from io import BytesIO
from pathlib import Path

from PIL import Image


SOURCE = Path("/Users/gracepack/.codex/generated_images/01a05646-7638-71e0-a33d-e69c6d6fa698")
DESTINATION = Path("public/assets/generated/product-gallery")
TARGET_BYTES = 170 * 1024

IMAGES = {
    "glass-olive-oil-bottle-1l": {
        "front": "exec-9fbac975-4c2c-4d5c-9d66-92101eb51592.png",
        "closure-detail": "exec-3938c2c9-b134-488c-8665-c79552107eb3.png",
        "packaging-detail": "exec-004f3f61-dba7-47de-8455-d68572975270.png",
        "handheld-use": "exec-cdc0bfc1-329b-4215-a2c2-cfb910b372af.png",
    },
    "glass-tomato-sauce-bottle-330ml": {
        "front": "exec-b2d83b27-b11c-43f2-b3a8-a44aada0f72e.png",
        "closure-detail": "exec-6dd7aa54-6905-4e4c-a0c2-432d42386226.png",
        "packaging-detail": "exec-aa9c5daa-9bb9-43d1-9d3d-84ce704a7d7e.png",
        "handheld-use": "exec-bd22e905-1cdf-4cfd-bc6d-00f798a414f7.png",
    },
    "mini-soy-sauce-bottle-30ml": {
        "front": "exec-50d97098-264d-4a7c-b7de-61e7983a4824.png",
        "closure-detail": "exec-df87f56d-7068-4612-8524-2774ada2a9d3.png",
        "packaging-detail": "exec-68eeb674-df6b-478c-850d-5464e4097caa.png",
        "handheld-use": "exec-ae1bd5a0-7d5c-433c-9af6-59e16d071bfa.png",
    },
    "mini-sauce-bottles-15-30ml": {
        "front": "exec-394a6a1f-6275-450c-9c21-a90200e87820.png",
        "closure-detail": "exec-0b54a8d4-10dc-4155-aef5-ac0306890ac1.png",
        "packaging-detail": "exec-29a4ac97-2839-4f2e-ab94-4641e8782255.png",
        "handheld-use": "exec-f44e1991-e073-4c2e-950b-931d6e2ea317.png",
    },
    "glass-spice-jar-cork-120ml": {
        "front": "exec-c405e176-d4d9-46cc-8ede-18500fb35fb9.png",
        "closure-detail": "exec-124ba933-7ac8-4c75-9734-bfb1e04570e9.png",
        "packaging-detail": "exec-db1b603a-6922-4890-b27c-5b23d0950351.png",
        "handheld-use": "exec-90cf678e-82b5-46e2-ab11-2d717cb8a26c.png",
    },
    "opaque-spice-jar-120ml": {
        "front": "exec-6ddc073f-d436-4451-b78b-1e4c57bcffee.png",
        "closure-detail": "exec-ac0c6a13-9c11-43d2-a376-c819a8d54e04.png",
        "packaging-detail": "exec-2f6f411d-808d-4551-9a2b-9900eb78a1ef.png",
        "handheld-use": "exec-f6aea1d3-855a-4abd-bb9c-a482bdc24411.png",
    },
    "pet-spice-shaker-100ml": {
        "front": "exec-62881601-90ed-4827-b9e5-0118d50e5db5.png",
        "closure-detail": "exec-f0eee567-9472-4a9b-aeeb-db49bdfe7593.png",
        "packaging-detail": "exec-bbb4a91a-5a3a-4bc4-91a0-08c94d4c97e0.png",
        "handheld-use": "exec-736a87dd-42b6-4678-a27f-facf2eb35ce1.png",
    },
}


def encode_near_target(image: Image.Image) -> bytes:
    best = b""
    best_delta = float("inf")
    for quality in range(45, 101):
        buffer = BytesIO()
        image.save(buffer, "WEBP", quality=quality, method=6)
        data = buffer.getvalue()
        delta = abs(len(data) - TARGET_BYTES)
        if delta < best_delta:
            best, best_delta = data, delta
    return best


DESTINATION.mkdir(parents=True, exist_ok=True)
for slug, roles in IMAGES.items():
    for role, source_name in roles.items():
        source = SOURCE / source_name
        destination = DESTINATION / f"fr-{slug}-{role}.webp"
        with Image.open(source) as image:
            data = encode_near_target(image.convert("RGB"))
        destination.write_bytes(data)
        print(f"{destination}: {len(data) / 1024:.1f} KB")
