"""One-off script: crop the three raw (already-transparent) product photos
tight to content and export optimized webp assets for the turntable hero."""
from PIL import Image

SRC = "public/images"
OUT = "public/images"

FILES = {
    "controller": "disc,jog-wheel.png",
    "cup": "espresso cup.png",
    "vinyl": "vinyl record.png",
}


def cutout(path, pad_frac=0.02):
    im = Image.open(path).convert("RGBA")
    alpha = im.split()[3]
    bbox = alpha.getbbox()
    if bbox:
        w, h = im.size
        pad_x = int((bbox[2] - bbox[0]) * pad_frac)
        pad_y = int((bbox[3] - bbox[1]) * pad_frac)
        crop_box = (
            max(0, bbox[0] - pad_x),
            max(0, bbox[1] - pad_y),
            min(w, bbox[2] + pad_x),
            min(h, bbox[3] + pad_y),
        )
        im = im.crop(crop_box)
    return im


if __name__ == "__main__":
    for name, fn in FILES.items():
        img = cutout(f"{SRC}/{fn}")
        print(name, "cropped ->", img.size)

        max_dim = 1400
        scale = min(1.0, max_dim / max(img.size))
        if scale < 1.0:
            img = img.resize((int(img.size[0] * scale), int(img.size[1] * scale)), Image.LANCZOS)

        img.save(f"{OUT}/{name}.webp", "WEBP", quality=90, method=6)
        print(name, "->", f"{OUT}/{name}.webp", img.size)
