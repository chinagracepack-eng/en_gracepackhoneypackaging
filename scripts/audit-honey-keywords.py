"""Reassess every unique workbook query for an empty-packaging B2B website.
Conservative rules produce candidate clusters, not automatic product claims.
"""
import json,re,csv,collections,pathlib
root=pathlib.Path(__file__).resolve().parents[1]
rows=json.loads((root/'content-evidence/keyword-workbook-source.json').read_text())
def has(pattern,s):return bool(re.search(pattern,s))
def assess(x):
 s=x['keyword'].lower().strip()
 def result(status,reason,url=''):return dict(x,websiteDecision=status,reason=reason,target=url)
 if has(r'hypixel|skyblock|merge dragons|grounded|bumbler|fly honey|bee movie|\bapk\b|\blyrics?\b|\braft\b|honey jar app|honey jar lite|honey jar song|honey jar tab',s):return result('Exclude','游戏、应用或影视音乐同名词')
 if has(r'curse|reconciliation|court case|lucky mojo|wicca|honey jar method|honey jar meaning|honey jar metaphor|honey jar slang|honey jar position|honey jar.*(?:myself|yourself)|honey jar.*money|honey jar.*working|honey jar yoga',s):return result('Exclude','仪式、隐喻或同名内容，不是空瓶罐采购')
 if has(r'\bcb2\b|\bckk\b|\bconsol\b|dominion|1868 honey|bormioli|ball mason|bernardin|kerr jar',s):return result('Exclude','第三方品牌导航词')
 if has(r'3d model|free download|icon|background|black and white',s):return result('Exclude','视觉素材需求')
 if has(r'jar with honey|packaged honey|honey and lemon|honey nut|honey whip|sweet honey|bottle of honey|jar of honey|honey in (?:a |the )?(?:jar|bottle)',s):return result('Hold','可能购买罐装蜂蜜或寻找泛蜂蜜内容；不作为空包装目标词')
 if has(r'\b(?:kenya|pakistan|canada|australia|uk|south africa|india|nigeria|nz|philippines|malaysia)\b',s):return result('Hold','非本次美国英语关键词布局；不创建未经验证的当地库存/门店页面')
 if has(r'bottling valve|bottling kit|bottling system|bottling plant|bottling stand|filler|warmer|filter',s):return result('Hold','设备或工装需求，尚无供货证据')
 if has(r'\bbottling\b|filling honey|pouring honey|putting honey|preparing honey|bottle to bottle|bubbles|white stuff|won.t come out|get honey out|got hard',s):return result('Guide candidate','填充或容器使用问题；仅用于相关包装指南，不建立产品页','/guides/honey-filling-and-packaging/')
 if has(r'with (?:a )?(?:spoon|stick|pump)|marble|silver plated|old fashioned|who invented',s):return result('Hold','餐桌器皿、装饰或历史需求，产品资料不足')
 if has(r'minecraft|terraria|roblox|earthbound|stardew|\bacnh\b|\bbss\b|\bbdo\b|bee swarm|animal crossing|pokemon|zelda|pixelmon',s):return result('Exclude','游戏词，与真实包装采购无关')
 if has(r'hard steel|royal honey|honeypack|honey pack (?:for|last|effect)|male|sex|erect|aphrodisiac|aphrodisiac|vital|viagra|vape|bong|dab rig|weed|cannabis|dabs|cbd|thc',s):return result('Exclude','保健/成人或烟具产品，与空包装项目无关')
 if has(r'spell|ritual|witch|hoodoo|voodoo|manifest|love jar|sugar jar|honey creek|heating and cooling|\bhvac\b|jarrett|jarret|honey boo boo',s):return result('Exclude','仪式、人物或其他同名业务')
 if has(r'antique|vintage|collectib|depression glass|anchor hocking|fenton|indiana glass|tiara|carnival glass',s):return result('Exclude','古董/收藏市场，不是新制包装批发')
 if has(r'amazon|walmart|target|ebay|etsy|aliexpress|alibaba|temu|costco|ikea|hobby lobby|dollar tree|michaels|tj maxx|homegoods|crate|le creuset|tiffany|kate spade|pioneer woman|norpro|norpo|paulsway|oxo|kilner|leifheit|bodum|alessi|fischer|beechworth|happy valley|billy bee|gunter|langnese|rowse|dabur|capilano|dutch gold|yamada|sue bee|y\.s\.|wedderspoon|comvita|nature nate|nates|tupperware|sailor plastics|betterbee|dadant|mann lake|burch|foxhound|cary company|fillmore',s):return result('Exclude','第三方品牌/平台导航词，不冒充其产品或授权')
 if has(r'clip ?art|svg|png|jpeg|drawing|draw |cartoon|tattoo|wallpaper|transparent background|vector|coloring|colouring|emoji|illustration|picture|photo|images?|mockup|crochet|knit|origami|3d print|diy|craft|decoupage',s):return result('Exclude','图像、模板或手工教程需求')
 if has(r'near me|nearby|local honey|san francisco|san diego|utah|houston|austin|chicago',s):return result('Exclude','本地即时零售意图；没有对应本地门店')
 if has(r'filled|with honey inside|honey in a jar price|price of honey|cost of honey|raw honey|organic honey|manuka|clover honey|acacia|buckwheat|orange blossom|honey butter|honey garlic|garlic honey|honey lemon|hot honey|honey mustard|honey sauce|honeysuckle|jarrah|jujube|maple|mead|recipe|calorie|nutrition|pasteuri|unpasteuri|benefit|\beat\b|safe to eat|still good|bad for|fake honey|pure honey|real honey|natural honey|unfiltered',s):return result('Exclude','成品蜂蜜、配方、食用/健康主题；非空包装采购')
 if has(r'bees? for sale|package bees|bee packages|queen bee|bee colony|nuc|honey bee package|honey bees package',s):return result('Exclude','蜂群/养蜂采购，与瓶罐产品不同')
 if has(r'machine|equipment|bottler|bottling tank|bottling bucket|melter|honey heater|honey heating|heated tank|filling line|packaging line|bottling line|extractor',s):return result('Hold','设备词：没有设备供货证据，不能建产品页')
 if has(r'cryst|harden|solidif|solid honey|soften|melt|microwave|boil|heat honey|warm.*honey',s):
  return result('Guide candidate','仅在容器使用与填充兼容性的范围讨论，不承接食用或健康判断','/guides/honey-filling-and-packaging/') if has(r'bottl|jar|container|plastic',s) else result('Exclude','泛蜂蜜结晶内容，采购关联较弱')
 if has(r'dipper|dispenser|honey pot|honey spoon|honey stick|honey server|honey wand|ceramic|porcelain',s):return result('Hold','餐桌器皿或配件；需要真实产品资料支持，暂不进入主产品架构')
 if has(r'weigh|weight|density|how many|how much|lbs? per|pounds? per|gallon of honey',s):return result('Guide candidate','包装净重与容积口径；排除按查询量机械建换算页','/guides/honey-jar-sizes/')
 if has(r'label|sticker',s):return result('Guide candidate','空包装装饰与标签区域；不宣称代办成品标签合规','/custom-honey-packaging/')
 if has(r'ship|transport|packing|leak|seal|liner|tamper',s):return result('Guide candidate','与瓶罐配套、密封和出口包装相关','/guides/honey-bottle-caps-and-seals/')
 if has(r'\blids?\b|\bcaps?\b|closure',s) and not has(r'with.*(?:lids?|caps?|closure)',s):return result('Commercial candidate','瓶盖与容器配套；实配规格以目录/图纸为准','/honey-jar-lids-and-caps/')
 if has(r'stor|shelf life|expir|refrigerat|freez|last',s):return result('Guide candidate','只保留与容器选择有关的问题','/guides/glass-vs-plastic-honey-packaging/') if has(r'plastic|bottl|jar|container|packag',s) else result('Exclude','泛食品保存主题')
 if has(r'how |what |why |can |is |are |does |do |should |best | vs |versus|safe|open|stuck|bottom',s):return result('Guide candidate','选型/使用查询，避免包装产品页承接不相符意图','/guides/glass-vs-plastic-honey-packaging/') if has(r'packag|bottl|jar|container',s) else result('Hold','疑问或多义查询，需实际SERP确认')
 if not has(r'honey|muth|queenline',s):return result('Exclude','不是蜂蜜包装的直接查询')
 if has(r'custom|personali|design|print|logo',s):return result('Commercial candidate','包装定制采购主题','/custom-honey-packaging/')
 if has(r'packag',s):return result('Commercial candidate','通用蜂蜜包装采购主题，由首页承接','/')
 if has(r'bear',s) and not has(r'bottl|jar|container|packag',s):return result('Hold','honey bear 裸词多义，不直接布局')
 if has(r'bear',s):return result('Commercial candidate','熊形包装；材料与现有样品核验后确定页面','/honey-bear-bottles/')
 if has(r'squeez|inverted|upside|squirt|squeezy',s):return result('Commercial candidate','挤压/倒置蜂蜜瓶采购','/honey-squeeze-bottles/')
 if has(r'hexagon|\bhex\b',s):return result('Commercial candidate','六角瓶罐主题；必须明确玻璃或塑料','/hexagon-honey-jars/')
 if has(r'\bmini(?:ature)?\b|small|tiny|little|favour|favor|wedding|party|\b[124] ?(?:oz|ounce)|\b1\.5 ?oz',s):return result('Commercial candidate','迷你空罐/赠礼包装；页面明确不含蜂蜜','/mini-honey-jars/')
 if has(r'muth|queenline|skep|comb honey|honeycomb|beehive|cork|mason|drum|bucket|pail|jug',s):return result('Hold','特定瓶型或大包装，等待目录验证实际供货')
 if has(r'glass',s) and has(r'jar|bottl|container',s):return result('Commercial candidate','玻璃蜂蜜瓶罐批发','/glass-honey-jars/')
 if has(r'plastic|\bpet\b|ldpe|hdpe',s) and has(r'jar|bottl|container',s):return result('Commercial candidate','塑料蜂蜜瓶罐采购','/plastic-honey-bottles/')
 if has(r'jar|bottl|container',s):return result('Commercial candidate','通用蜂蜜空瓶罐主题；用主目录承接','/products/')
 return result('Hold','缺少明确空包装意图，不自动加入网站')
# Unknown modifiers are retained for review, never automatically inserted into web copy.
allowed=set("honey honeys jar jars bottle bottles container containers glass plastic pet hdpe ldpe pp clear empty bulk wholesale wholesaler wholesalers manufacturer manufacturers supplier suppliers manufacturing supply supplies for sale buy buying purchase in with and the a an of to by from no bpa free food grade reusable recyclable recyclable squeezable squeeze squeezey squeezies squeezing squeez squeezy squeezie inverted upside down flip top fliptop cap caps lid lids closure closures leak proof drip dripless non nozzle spout valve valves seal seals tamper evident resistant airtight honeybear bear bears shaped shape shapes round oval square hex hexagonal hexagon classic mini miniature small smaller tiny little large larger big size sizes ounce ounces oz fl fluid pound pounds lb lbs g gm gms gram grams kg kilogram kilograms ml milliliter milliliters litre liter litres liters gallon gallons pint pints quart quarts wedding weddings favor favors favour favours party gift gifts gifting beekeeping beekeeper beekeepers bee bees packaging package packages pack packs packaged packing custom customized customised customize personalise personalized personalised personalization design designs designer printing printed print logo branded branding color colour colored coloured colours colors amber white black yellow gold golden green blue red brown pink purple transparent ribbed flat panel panels screw threaded neck wide mouth handle handles handleless refillable refills refill replacement replacements roundness cost costs price prices pricing cheap cheaper cheapest economical low minimum moq order orders quantities quantity case cases carton cartons stock top bottom end quality premium reusable recycled recycle foodgrade double wall dripfree drop dropper dripproof squeezer squeezy bottles bottle petg lightweight good better best most beautiful unique novelty decorative cute affordable traditional retail commercial industrial online international usa us united states america american china chinese direct factory factories export exporter exporters import importer importers distributor distributors distribution shipping printed labels label sticker stickers labelling labeling smooth surface honeycomb bee hive beehive skep queenline muth cork mason jug jugs bucket buckets pail pails drum drums".split())
result=[]
for x in rows:
 r=assess(x)
 if r['websiteDecision']=='Commercial candidate':
  terms=re.findall(r"[a-z]+",x['keyword'].lower())
  unknown=sorted(set(terms)-allowed)
  if unknown:
   r.update(websiteDecision='Hold',reason='出现需人工核实的限定词：'+', '.join(unknown)+'；不自动加入商业页面',target='')
 result.append(r)
assert len(result)==10200 and len({x['keyword'] for x in result})==10200
out=root/'content-evidence'
(out/'honey-keyword-audit.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
with (out/'honey-keyword-audit.csv').open('w',encoding='utf-8-sig',newline='') as f:
 w=csv.DictWriter(f,fieldnames=result[0].keys());w.writeheader();w.writerows(result)
stats=collections.Counter(x['websiteDecision'] for x in result)
print(json.dumps(stats,ensure_ascii=False))
for status in ['Commercial candidate','Guide candidate','Hold']:
 xs=[x for x in result if x['websiteDecision']==status and x['previousGroup']=='有效关键词']
 (out/(status.split()[0].lower()+'-review.txt')).write_text('\n'.join(x['keyword']+' | '+str(x['volume'])+' | '+x['target'] for x in xs))
