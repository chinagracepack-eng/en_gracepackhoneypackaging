param(
  [string]$GalleryDir = (Join-Path (Split-Path -Parent $PSScriptRoot) "public\assets\generated\product-gallery")
)

$slugs = @(
  "slim-pepper-grinder-bottle-225ml",
  "clear-tall-spice-grinder-bottle-250ml",
  "compact-black-cap-pepper-grinder-100ml",
  "compact-clear-cap-spice-grinder-100ml",
  "mini-black-cap-spice-grinder-80ml",
  "mini-clear-cap-spice-grinder-80ml",
  "square-black-cap-pepper-grinder-90ml",
  "square-clear-cap-spice-grinder-90ml",
  "tall-glass-salt-pepper-grinder-350ml",
  "rounded-glass-spice-grinder-350ml",
  "tapered-glass-salt-grinder-350ml",
  "slim-glass-pepper-grinder-350ml"
)

$types = @("front", "closure-detail", "packaging-detail", "handheld-use")
$missing = @()

foreach ($slug in $slugs) {
  foreach ($type in $types) {
    $path = Join-Path $GalleryDir "$slug-$type.avif"
    if (!(Test-Path $path)) {
      $missing += "$slug-$type.avif"
    }
  }
}

if ($missing.Count -gt 0) {
  Write-Error ("Missing spice grinder AVIF assets:`n" + ($missing -join "`n"))
  exit 1
}

Write-Output "All spice grinder product AVIF assets are present: $($slugs.Count) products x $($types.Count) views."
