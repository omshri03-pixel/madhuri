import os
import json
import re
from PIL import Image, ImageDraw, ImageFont

# Page dimensions: A4 at 150 DPI = 1240 x 1754 px
PAGE_W = 1240
PAGE_H = 1754

# Colors
C_BG = (12, 10, 8)
C_CARD_BG = (20, 16, 13)
C_GOLD = (217, 173, 109)
C_GOLD_BRIGHT = (235, 195, 135)
C_IVORY = (246, 241, 231)
C_IVORY_DIM = (200, 192, 180)
C_LINE = (217, 173, 109, 60)
C_DARK_LINE = (45, 36, 28)

# Fonts
FONT_TITLE = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 46)
FONT_HEADING = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 32)
FONT_SUB = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 22)
FONT_BODY = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 18)
FONT_SMALL = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 14)
FONT_PLATE = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 20)

def draw_gold_border(draw):
    margin = 40
    # Outer thin border
    draw.rectangle([margin, margin, PAGE_W - margin, PAGE_H - margin], outline=(160, 120, 65), width=1)
    # Inner border
    draw.rectangle([margin + 8, margin + 8, PAGE_W - margin - 8, PAGE_H - margin - 8], outline=(217, 173, 109), width=2)
    # Corner ornaments
    cw = 24
    for x, y in [(margin, margin), (PAGE_W - margin, margin), (margin, PAGE_H - margin), (PAGE_W - margin, PAGE_H - margin)]:
        draw.rectangle([x - 4, y - 4, x + 4, y + 4], fill=C_GOLD)

def create_cover_page():
    img = Image.new('RGB', (PAGE_W, PAGE_H), color=C_BG)
    draw = ImageDraw.Draw(img)
    draw_gold_border(draw)

    # Add crest logo
    crest_path = "images/madhuri_crest.png"
    if os.path.exists(crest_path):
        try:
            crest = Image.open(crest_path).convert("RGBA")
            crest.thumbnail((260, 260), Image.Resampling.LANCZOS)
            cx = (PAGE_W - crest.width) // 2
            cy = 220
            img.paste(crest, (cx, cy), crest)
        except Exception as e:
            print("Crest load error:", e)

    # Wordmark
    text_brand = "MADHURI FURNITURE"
    bbox = draw.textbbox((0, 0), text_brand, font=FONT_TITLE)
    tw = bbox[2] - bbox[0]
    draw.text(((PAGE_W - tw) // 2, 540), text_brand, font=FONT_TITLE, fill=C_GOLD_BRIGHT)

    # Tagline
    tagline = "WHERE STYLE MEETS CRAFTSMANSHIP  ·  ESTD. 1983"
    bbox = draw.textbbox((0, 0), tagline, font=FONT_SUB)
    tw = bbox[2] - bbox[0]
    draw.text(((PAGE_W - tw) // 2, 605), tagline, font=FONT_SUB, fill=C_GOLD)

    # Divider line
    draw.line([(PAGE_W // 2 - 180, 650), (PAGE_W // 2 + 180, 650)], fill=C_GOLD, width=2)

    # Hero title
    t1 = "THE MASTERCRAFT LOOKBOOK"
    bbox = draw.textbbox((0, 0), t1, font=FONT_HEADING)
    draw.text(((PAGE_W - (bbox[2] - bbox[0])) // 2, 740), t1, font=FONT_HEADING, fill=C_IVORY)

    t2 = "2026 ARCHIVAL COLLECTION"
    bbox = draw.textbbox((0, 0), t2, font=FONT_SUB)
    draw.text(((PAGE_W - (bbox[2] - bbox[0])) // 2, 790), t2, font=FONT_SUB, fill=C_GOLD)

    # Collection Highlights Box
    box_w = 880
    box_h = 360
    box_x = (PAGE_W - box_w) // 2
    box_y = 890
    draw.rectangle([box_x, box_y, box_x + box_w, box_y + box_h], fill=C_CARD_BG, outline=C_GOLD, width=1)

    intro_lines = [
        "CURATED SOLID TEAKWOOD & SACRED BOXWOOD CREATIONS",
        "",
        "· 40 Masterpiece Deities: Adiyogi Shiva, Panchmukhi Hanuman, Balaji & Ganesha",
        "· 16 Nature's Sculptures: 7 Running Horses, Wild Elephants & Imperial Tiger Reliefs",
        "· National Heritage Collectibles: Ashoka Stambh Lion Capital & Sacred Symbols",
        "",
        "Fashioned by Multi-Generational Master Artisans of Saharanpur, India"
    ]
    cur_y = box_y + 40
    for line in intro_lines:
        font_to_use = FONT_SUB if "CURATED" in line else FONT_BODY
        color_to_use = C_GOLD_BRIGHT if "CURATED" in line else C_IVORY_DIM
        bbox = draw.textbbox((0, 0), line, font=font_to_use)
        draw.text(((PAGE_W - (bbox[2] - bbox[0])) // 2, cur_y), line, font=font_to_use, fill=color_to_use)
        cur_y += 38

    # Contact footer on cover
    footer_text = "Official Inquiries: WhatsApp +91 9627606000  ·  Etsy: madhurihandicraft.etsy.com"
    bbox = draw.textbbox((0, 0), footer_text, font=FONT_BODY)
    draw.text(((PAGE_W - (bbox[2] - bbox[0])) // 2, 1600), footer_text, font=FONT_BODY, fill=C_GOLD)

    loc_text = "Saharanpur, Uttar Pradesh, India"
    bbox = draw.textbbox((0, 0), loc_text, font=FONT_SMALL)
    draw.text(((PAGE_W - (bbox[2] - bbox[0])) // 2, 1635), loc_text, font=FONT_SMALL, fill=C_IVORY_DIM)

    return img

def create_product_page(item, page_idx, total_pages):
    img = Image.new('RGB', (PAGE_W, PAGE_H), color=C_BG)
    draw = ImageDraw.Draw(img)
    draw_gold_border(draw)

    # Header in plate
    header_str = "MADHURI FURNITURE  ·  THE MASTERCRAFT EDIT 2026"
    draw.text((70, 60), header_str, font=FONT_SMALL, fill=C_GOLD)
    
    cat_str = item.get("collection", "Handcrafted Masterpiece").upper()
    bbox = draw.textbbox((0, 0), cat_str, font=FONT_SMALL)
    draw.text((PAGE_W - 70 - (bbox[2] - bbox[0]), 60), cat_str, font=FONT_SMALL, fill=C_IVORY_DIM)

    draw.line([(70, 85), (PAGE_W - 70, 85)], fill=(70, 56, 40), width=1)

    # Artwork image container
    # Image frame: 1040 wide x 1120 high
    frame_w = 1040
    frame_h = 1120
    frame_x = (PAGE_W - frame_w) // 2
    frame_y = 110

    # Load and fit image
    item_img_path = item.get("image", "")
    if os.path.exists(item_img_path):
        try:
            prod_img = Image.open(item_img_path).convert("RGB")
            # Aspect ratio fit within frame
            prod_img.thumbnail((frame_w, frame_h), Image.Resampling.LANCZOS)
            px = frame_x + (frame_w - prod_img.width) // 2
            py = frame_y + (frame_h - prod_img.height) // 2
            # Drop shadow
            draw.rectangle([px - 4, py - 4, px + prod_img.width + 4, py + prod_img.height + 4], outline=C_GOLD, width=1)
            img.paste(prod_img, (px, py))
        except Exception as e:
            print("Error loading", item_img_path, e)

    # Plate details bottom card
    card_y = 1270
    card_h = 370
    card_w = 1040
    card_x = (PAGE_W - card_w) // 2
    draw.rectangle([card_x, card_y, card_x + card_w, card_y + card_h], fill=C_CARD_BG, outline=C_GOLD, width=1)

    # Plate number
    plate_num = f"PLATE {StringPad(page_idx)} / {StringPad(total_pages)}"
    draw.text((card_x + 30, card_y + 24), plate_num, font=FONT_PLATE, fill=C_GOLD)

    # Title
    title = item.get("title", "Masterpiece")
    if len(title) > 55:
        title = title[:52] + "..."
    draw.text((card_x + 30, card_y + 60), title, font=FONT_HEADING, fill=C_IVORY)

    # Material & dimensions line
    specs = f"Material: {item.get('material', 'Solid Indian Teakwood')}  ·  Dimensions: {item.get('dimensions', 'Custom Order Available')}"
    draw.text((card_x + 30, card_y + 115), specs, font=FONT_BODY, fill=C_GOLD_BRIGHT)

    # Description
    desc = item.get("description", "")
    lines = wrap_text(desc, 90)
    dy = card_y + 160
    for l in lines[:3]:
        draw.text((card_x + 30, dy), l, font=FONT_BODY, fill=C_IVORY_DIM)
        dy += 28

    # Inquiry footer
    inquiry_text = f"Direct Inquiry / Custom Commission: WhatsApp +91 9627606000  ·  Etsy: madhurihandicraft.etsy.com"
    draw.line([(card_x + 30, card_y + 300), (card_x + card_w - 30, card_y + 300)], fill=(70, 56, 40), width=1)
    draw.text((card_x + 30, card_y + 318), inquiry_text, font=FONT_SMALL, fill=C_GOLD)

    return img

def create_back_cover():
    img = Image.new('RGB', (PAGE_W, PAGE_H), color=C_BG)
    draw = ImageDraw.Draw(img)
    draw_gold_border(draw)

    crest_path = "images/madhuri_crest.png"
    if os.path.exists(crest_path):
        try:
            crest = Image.open(crest_path).convert("RGBA")
            crest.thumbnail((200, 200), Image.Resampling.LANCZOS)
            cx = (PAGE_W - crest.width) // 2
            img.paste(crest, (cx, 280), crest)
        except Exception as e:
            print(e)

    # Brand Title
    b1 = "MADHURI FURNITURE"
    bbox = draw.textbbox((0, 0), b1, font=FONT_TITLE)
    draw.text(((PAGE_W - (bbox[2] - bbox[0])) // 2, 530), b1, font=FONT_TITLE, fill=C_GOLD_BRIGHT)

    b2 = "FOUR DECADES OF DEVOTION & CRAFTSMANSHIP"
    bbox = draw.textbbox((0, 0), b2, font=FONT_SUB)
    draw.text(((PAGE_W - (bbox[2] - bbox[0])) // 2, 590), b2, font=FONT_SUB, fill=C_GOLD)

    draw.line([(PAGE_W // 2 - 140, 630), (PAGE_W // 2 + 140, 630)], fill=C_GOLD, width=2)

    # Box with guarantee
    bw, bh = 840, 420
    bx = (PAGE_W - bw) // 2
    by = 720
    draw.rectangle([bx, by, bx + bw, by + bh], fill=C_CARD_BG, outline=C_GOLD, width=1)

    closing_text = [
        "CERTIFICATE OF ARTISANAL INTEGRITY",
        "",
        "Every creation in this lookbook is hand-chiseled from legally sourced,",
        "seasoned Indian Teakwood and Sacred Boxwood by master craftsmen",
        "carrying forward ancestral woodcraft heritage.",
        "",
        "DIRECT ARTISAN DESK & GLOBAL COMMISSIONS",
        "Phone / WhatsApp: +91 9627606000",
        "Official Online Store: madhurihandicraft.etsy.com",
        "Workshop & Gallery: Saharanpur, Uttar Pradesh, India",
        "",
        "Worldwide Insured Express Delivery Available."
    ]

    cy = by + 35
    for l in closing_text:
        is_h = "CERTIFICATE" in l or "DIRECT" in l
        font = FONT_SUB if is_h else FONT_BODY
        color = C_GOLD if is_h else C_IVORY_DIM
        bbox = draw.textbbox((0, 0), l, font=font)
        draw.text(((PAGE_W - (bbox[2] - bbox[0])) // 2, cy), l, font=font, fill=color)
        cy += 30

    footer = "Thank you for supporting traditional Indian handmade craftsmanship."
    bbox = draw.textbbox((0, 0), footer, font=FONT_SUB)
    draw.text(((PAGE_W - (bbox[2] - bbox[0])) // 2, 1420), footer, font=FONT_SUB, fill=C_GOLD)

    return img

def StringPad(n):
    return str(n).zfill(2)

def wrap_text(text, max_chars):
    words = text.split()
    lines = []
    cur = []
    cur_len = 0
    for w in words:
        if cur_len + len(w) + 1 <= max_chars:
            cur.append(w)
            cur_len += len(w) + 1
        else:
            lines.append(" ".join(cur))
            cur = [w]
            cur_len = len(w)
    if cur:
        lines.append(" ".join(cur))
    return lines

def main():
    # Read catalog items from catalog-data.js
    with open("js/catalog-data.js", "r", encoding="utf-8") as f:
        content = f.read()

    # Extract CATALOG_DATA using regex
    m = re.search(r"const CATALOG_DATA = (\[.*?\]);", content, re.DOTALL)
    if not m:
        print("Could not find CATALOG_DATA in catalog-data.js")
        return

    # Basic JSON sanitize for JS object literal
    raw_js = m.group(1)
    # convert unquoted keys or trailing commas if needed
    # Better: execute node to export JSON!
    import subprocess
    cmd = 'node -e "const fs = require(\'fs\'); const code = fs.readFileSync(\'js/catalog-data.js\', \'utf8\'); eval(code.replace(\'const HUB_COLLECTIONS\', \'var HUB_COLLECTIONS\').replace(\'const CATALOG_DATA\', \'var CATALOG_DATA\')); console.log(JSON.stringify(CATALOG_DATA));"'
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True, encoding="utf-8")
    items = json.loads(res.stdout)
    print(f"Loaded {len(items)} items for catalogue generation.")

    pages = []
    print("Generating Cover Page...")
    pages.append(create_cover_page())

    total = len(items)
    for i, item in enumerate(items):
        print(f"Generating Plate {i+1}/{total}: {item.get('title')[:30]}...")
        pages.append(create_product_page(item, i + 1, total))

    print("Generating Back Cover Page...")
    pages.append(create_back_cover())

    # Save multi-page PDF
    pdf_path = "madhuri_furniture_catalogue_2026.pdf"
    print(f"Saving PDF to {pdf_path} (Total {len(pages)} pages)...")
    pages[0].save(
        pdf_path,
        save_all=True,
        append_images=pages[1:],
        resolution=150.0,
        quality=92
    )
    print("PDF generation complete! File size:", os.path.getsize(pdf_path), "bytes")

if __name__ == "__main__":
    main()
