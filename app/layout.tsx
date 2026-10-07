import './blog.css';
import type {Metadata} from 'next';
import './globals.css';
import {Header,Footer} from './components/Chrome';
import {JsonLd} from './seo';
import {siteUrl,email,phone} from './data';
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:'Honey Packaging Supplier | Plastic Bottles & Glass Jars | Gracepack',template:'%s | Gracepack'},description:'Wholesale plastic honey bottles, glass honey jars and matching closures. Compare real packaging models and discuss samples and custom options with Gracepack.',icons:{icon:'/assets/logo/favicon.png'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-US"><body><Header/><main id="main">{children}</main><Footer/><JsonLd data={{'@context':'https://schema.org','@type':'Organization','@id':siteUrl+'/#organization',name:'Gracepack Honey Packaging',url:siteUrl,logo:siteUrl+'/assets/logo/logo.png',email,telephone:phone,address:{'@type':'PostalAddress',addressLocality:'Cixi, Ningbo',addressRegion:'Zhejiang',addressCountry:'CN'},sameAs:['https://egracepack.com/']}}/></body></html>;}
