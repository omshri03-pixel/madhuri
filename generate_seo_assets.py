import os
import base64
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# 1. Load brand assets
crest = Image.open('images/madhuri_crest.png').convert('RGBA')
bg_photo = Image.open('images/wooden_craft.jpg').convert('RGBA')

# -------------------------------------------------------------
# GENERATE FAVICONS (Authentic Madhuri Crest with dark luxury base)
# -------------------------------------------------------------
def make_favicon(size):
    # Square canvas with dark obsidian background
    canvas = Image.new('RGBA', (size, size), (12, 10, 8, 255))
    draw = ImageDraw.Draw(canvas)
    
    # Rounded corner border or dark circle
    margin = max(1, int(size * 0.05))
    corner_r = max(2, int(size * 0.22))
    
    # Subtly glow or border
    draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=corner_r, fill=(14, 11, 8, 255), outline=(217, 173, 109, 180), width=max(1, int(size * 0.04)))
    
    # Fit crest inside
    inner_w = size - 2 * margin - int(size * 0.12)
    inner_h = inner_w
    
    # Aspect ratio of crest
    cw, ch = crest.size
    scale = min(inner_w / cw, inner_h / ch)
    target_w = int(cw * scale)
    target_h = int(ch * scale)
    
    scaled_crest = crest.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Center
    pos_x = (size - target_w) // 2
    pos_y = (size - target_h) // 2
    canvas.alpha_composite(scaled_crest, (pos_x, pos_y))
    return canvas

# Save sizes
fav_16 = make_favicon(16)
fav_32 = make_favicon(32)
fav_48 = make_favicon(48)
fav_64 = make_favicon(64)
fav_180 = make_favicon(180) # Apple touch icon
fav_192 = make_favicon(192) # Android / PWA
fav_512 = make_favicon(512) # PWA Splash

fav_16.save('favicon-16x16.png')
fav_32.save('favicon-32x32.png')
fav_64.save('favicon.png')
fav_180.save('apple-touch-icon.png')
fav_192.save('images/icon-192.png')
fav_512.save('images/icon-512.png')

# Save multi-size favicon.ico
fav_64.save('favicon.ico', format='ICO', sizes=[(16,16), (32,32), (48,48), (64,64)])

# Generate SVG embedding the authentic crest as high-res base64
with open('favicon-64.png' if os.path.exists('favicon-64.png') else 'favicon.png', 'rb') as f:
    b64_img = base64.b64encode(open('images/madhuri_crest.png', 'rb').read()).decode('utf-8')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2a2016" stop-opacity="1"/>
      <stop offset="100%" stop-color="#0c0a08" stop-opacity="1"/>
    </radialGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#bgGlow)"/>
  <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="13.25" fill="none" stroke="#d9ad6d" stroke-width="1.5" stroke-opacity="0.8"/>
  <image href="data:image/png;base64,{b64_img}" x="7" y="9" width="50" height="46" preserveAspectRatio="xMidYMid meet"/>
</svg>'''

with open('favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print("Favicons generated successfully!")

# -------------------------------------------------------------
# GENERATE 1200x630 OPEN GRAPH SHARE CARD (images/og-share-card.jpg)
# -------------------------------------------------------------
og_w, og_h = 1200, 630
og = Image.new('RGBA', (og_w, og_h), (12, 10, 8, 255))

# Process background photo on the right side
# Scale photo to cover right half (width ~750, height 630)
pw, ph = bg_photo.size
scale = max(750 / pw, 630 / ph)
rw, rh = int(pw * scale), int(ph * scale)
resized_photo = bg_photo.resize((rw, rh), Image.Resampling.LANCZOS)
# Crop to (750, 630)
crop_x = (rw - 750) // 2
crop_y = (rh - 630) // 2
cropped_photo = resized_photo.crop((crop_x, crop_y, crop_x + 750, crop_y + 630))

# Create fade mask from left to right on the photo
mask = Image.new('L', (750, 630), 0)
mask_draw = ImageDraw.Draw(mask)
for x in range(750):
    # 0 to 250 fades from 0 to 230, then 230 to 255
    if x < 280:
        alpha = int((x / 280.0) ** 1.6 * 220)
    else:
        alpha = min(255, int(220 + ((x - 280) / 470.0) * 35))
    mask_draw.line([(x, 0), (x, 630)], fill=alpha)

og.paste(cropped_photo, (og_w - 750, 0), mask)

# Dark gradient overlay for overall contrast
overlay = Image.new('RGBA', (og_w, og_h), (0, 0, 0, 0))
over_draw = ImageDraw.Draw(overlay)
for x in range(og_w):
    if x < 450:
        alpha = 250
    elif x < 750:
        # Fade from 250 to 50
        prog = (x - 450) / 300.0
        alpha = int(250 - prog * 200)
    else:
        alpha = 50
    over_draw.line([(x, 0), (x, og_h)], fill=(12, 10, 8, alpha))
og = Image.alpha_composite(og, overlay)

# Gold luxury accent line on top and bottom
draw = ImageDraw.Draw(og)
draw.line([(0, 0), (og_w, 0)], fill=(217, 173, 109, 255), width=4)
draw.line([(0, og_h - 2), (og_w, og_h - 2)], fill=(217, 173, 109, 160), width=2)

# Place Crest
cw, ch = crest.size
crest_scale = 160 / ch
target_cw = int(cw * crest_scale)
target_ch = int(ch * crest_scale)
scaled_crest = crest.resize((target_cw, target_ch), Image.Resampling.LANCZOS)
og.alpha_composite(scaled_crest, (75, 70))

# Load fonts
try:
    f_brand = ImageFont.truetype('C:/Windows/Fonts/georgia.ttf', 44)
    f_sub = ImageFont.truetype('C:/Windows/Fonts/georgia.ttf', 20)
    f_tagline = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', 16)
    f_desc = ImageFont.truetype('C:/Windows/Fonts/georgia.ttf', 22)
    f_badge = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', 15)
    f_domain = ImageFont.truetype('C:/Windows/Fonts/georgia.ttf', 22)
except Exception as e:
    print("Font fallback:", e)
    f_brand = ImageFont.load_default()
    f_sub = f_brand
    f_tagline = f_brand
    f_desc = f_brand
    f_badge = f_brand
    f_domain = f_brand

# Brand Title
draw.text((75, 255), "MADHURI HANDICRAFTS", font=f_brand, fill=(247, 243, 235))
draw.text((75, 310), "WHERE STYLE MEETS CRAFTSMANSHIP  ·  EST. 1983", font=f_tagline, fill=(217, 173, 109))

# Dividing accent line
draw.line([(75, 345), (550, 345)], fill=(217, 173, 109, 120), width=1)

# Description text
draw.text((75, 365), "Curated Collection of Handcrafted Brass Idols,", font=f_desc, fill=(225, 218, 205))
draw.text((75, 395), "Antique Urulis & Sacred Teakwood Temple Decor", font=f_desc, fill=(225, 218, 205))

# Trust Badges (Pills)
badge1_text = "5.0 Star Master Artisan"
badge2_text = "Worldwide Insured Delivery"

# Draw badge 1
b1_box = [75, 455, 305, 492]
draw.rounded_rectangle(b1_box, radius=18, fill=(35, 27, 18, 220), outline=(217, 173, 109, 200), width=1)
draw.text((95, 463), badge1_text, font=f_badge, fill=(252, 237, 201))

# Draw badge 2
b2_box = [320, 455, 560, 492]
draw.rounded_rectangle(b2_box, radius=18, fill=(35, 27, 18, 220), outline=(217, 173, 109, 200), width=1)
draw.text((338, 463), badge2_text, font=f_badge, fill=(252, 237, 201))

# Domain footer pill
foot_box = [75, 528, 430, 574]
draw.rounded_rectangle(foot_box, radius=23, fill=(217, 173, 109, 255))
draw.text((100, 538), "madhurihandicrafts.com", font=f_domain, fill=(12, 10, 8))

# Save high quality RGB JPEG
og_final = og.convert('RGB')
og_final.save('images/og-share-card.jpg', 'JPEG', quality=92, optimize=True)
print("OG share card generated: images/og-share-card.jpg (size:", os.path.getsize('images/og-share-card.jpg'), "bytes)")
