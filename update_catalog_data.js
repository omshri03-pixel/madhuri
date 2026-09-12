const fs = require('fs');

// Read existing catalog-data.js
const originalCode = fs.readFileSync('js/catalog-data.js', 'utf8');

// Load HUB_COLLECTIONS from original
const hubMatch = originalCode.match(/const HUB_COLLECTIONS = (\[[\s\S]*?\]);/);
const hubCollectionsStr = hubMatch ? hubMatch[1] : '[]';

// 13 New Deities to reach 40 (27 + 13 = 40)
const additionalDeities = [
  {
    id: "deity-28",
    title: "Adiyogi Shiva 12-Inch Sacred Boxwood Altar Idol",
    category: "deities",
    collection: "Premium Wooden Deities",
    tag: "Sacred Boxwood",
    material: "Rare Indian Boxwood",
    finish: "Silky Natural Wax Luster",
    dimensions: '12" H x 8.5" W x 4" D',
    weight: "2.1 kg",
    pages: "Plate 28",
    description: "Compact altarpiece edition of the Cosmic Yogic Dhyana Shiva, meticulously chiseled from dense pale sacred boxwood.",
    image: "images/products/adiyogi_12_inch_boxwood.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Ultra-fine boxwood chisel detailing", "Micro-carved trishula & crescent", "Ideal for compact meditation altars"]
  },
  {
    id: "deity-29",
    title: "Tirupati Balaji Venkateshwara 12-Inch Sanctum Murti",
    category: "deities",
    collection: "Premium Wooden Deities",
    tag: "Tirumala Darshan",
    material: "Solid Indian Teakwood",
    finish: "Antique Honey Amber Wax",
    dimensions: '12" H x 6.5" W x 3.5" D',
    weight: "2.2 kg",
    pages: "Plate 29",
    description: "Sacred desktop darshan idol of Lord Venkateshwara adorned with Shankha, Chakra, and ornate temple archways.",
    image: "images/products/balaji_12_inch.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Intricate gold-burnished jewelry", "Four-arm divine iconography", "Solid pedestal base"]
  },
  {
    id: "deity-30",
    title: "Meditating Buddha Nirvana High-Relief (Model 1)",
    category: "deities",
    collection: "Premium Wooden Deities",
    tag: "Zen Serenity",
    material: "Fine Indian Teakwood",
    finish: "Earthy Matt Teak Polish",
    dimensions: '16" H x 12" W x 3" Depth',
    weight: "3.4 kg",
    pages: "Plate 30",
    description: "Gautama Buddha under the Bodhi tree in tranquil Samadhi meditation with ornate floral halos and gentle drapery.",
    image: "images/products/buddha_model_1.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Gentle meditative expression", "Bodhi leaves intricate relief", "Deep wall relief carving"]
  },
  {
    id: "deity-31",
    title: "Shrimant Dagduseth Halwai Ganpati 12-Inch Teakwood Murti",
    category: "deities",
    collection: "Premium Wooden Deities",
    tag: "Pune Icon",
    material: "Solid Teakwood",
    finish: "Warm Golden Teak Luster",
    dimensions: '12" H x 8" W x 4.5" D',
    weight: "2.8 kg",
    pages: "Plate 31",
    description: "Sacred darshan idol of the world-famous Dagduseth Ganpati adorned with majestic Mukut and blessings for prosperity.",
    image: "images/products/dagduseth_12_inch_teakwood.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Accurate Dagduseth crown carving", "Modak in left hand with divine trunk", "Traditional pooja pedestal"]
  },
  {
    id: "deity-32",
    title: "Guru Nanak Dev Ji 21-Inch Monumental Teakwood Relief",
    category: "deities",
    collection: "Premium Wooden Deities",
    tag: "Divine Blessing",
    material: "Select Indian Teakwood",
    finish: "Deep Natural Teak Polish",
    dimensions: '21" H x 14" W x 3" Depth',
    weight: "5.6 kg",
    pages: "Plate 32",
    description: "Large monumental wooden relief of Guru Nanak Dev Ji in Abhaya blessing pose with Ek Onkar sacred seal.",
    image: "images/products/guru_nanak_21_inch_teakwood.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Soulful radiant aura carving", "Fine prayer bead rosary details", "Architectural frame border"]
  },
  {
    id: "deity-33",
    title: "Mahakaal Shiva Rudra Avatar 24-Inch Wall Frame Relief",
    category: "deities",
    collection: "Premium Wooden Deities",
    tag: "Ujjain Darshan",
    material: "Single-Plank Teakwood",
    finish: "Dark Antique Charcoal Patina",
    dimensions: '24" H x 15" W x 3.5" Depth',
    weight: "6.4 kg",
    pages: "Plate 33",
    description: "Fierce yet deeply protective Mahakaal Shiva face with third eye, Vasuki serpent, and sacred crescent moon.",
    image: "images/products/mahakaal_24_inch_teakwood.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Intense devotional aura", "Deep 3D undercut reliefs", "Pre-installed heavy-duty hanging brackets"]
  },
  {
    id: "deity-34",
    title: "Mahakaal Sacred Temple Wall Board Relief",
    category: "deities",
    collection: "Premium Wooden Deities",
    tag: "Temple Accent",
    material: "Seasoned Teakwood Board",
    finish: "Traditional Walnut Stain",
    dimensions: '20" H x 14" W x 2.5" Depth',
    weight: "4.8 kg",
    pages: "Plate 34",
    description: "Sacred temple-style wall board showcasing the majestic Trishul, Damru, and Mahakaal insignia.",
    image: "images/products/mahakaal_mahakaal_board.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Trishul & Damru centerpiece", "Burnished gold highlights", "Resistant to moisture"]
  },
  {
    id: "deity-35",
    title: "Meditation Hanuman Ji 6-Inch Pure Boxwood Idol",
    category: "deities",
    collection: "Premium Wooden Deities",
    tag: "Bhakti Yoga",
    material: "Rare Sacred Boxwood",
    finish: "Natural Satin Wood Polish",
    dimensions: '6" H x 4" W x 2.5" D',
    weight: "0.85 kg",
    pages: "Plate 35",
    description: "Compact sacred altar idol of Lord Hanuman seated in peaceful contemplation, radiating strength and unwavering loyalty.",
    image: "images/products/meditation_hanuman_6_inch_boxwood.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Miniature chisel precision", "Silk-smooth boxwood texture", "Ideal for puja mandir or car dashboard"]
  },
  {
    id: "deity-36",
    title: "Mouse Ganpati Mushakraj 12-Inch Teakwood Sculpture",
    category: "deities",
    collection: "Premium Wooden Deities",
    tag: "Divine Vahana",
    material: "Solid Indian Teak",
    finish: "Warm Honey Gloss",
    dimensions: '12" H x 8.5" W x 4.5" D',
    weight: "2.9 kg",
    pages: "Plate 36",
    description: "Charming traditional composition featuring Lord Ganesha accompanied lovingly by his sacred vahana Mushakraj.",
    image: "images/products/mouse_ganpati_12_inch_teakwood.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Intricately detailed mouse vahana", "Blessing abhaya mudra", "Natural teakwood grains"]
  },
  {
    id: "deity-37",
    title: "Panchmukhi Hanuman Ji 6-Inch Sacred Boxwood Idol",
    category: "deities",
    collection: "Premium Wooden Deities",
    tag: "Protection Vastu",
    material: "Sacred Boxwood",
    finish: "Organic Beeswax Luster",
    dimensions: '6" H x 4.2" W x 2.8" D',
    weight: "0.9 kg",
    pages: "Plate 37",
    description: "Five-faced divine form of Hanuman Ji (Hanuman, Narasimha, Garuda, Varaha, and Hayagriva) chiseled from fragrant boxwood.",
    image: "images/products/panchmukhi_hanuman_6_inch_boxwood.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["All five divine faces chiseled in detail", "Sacred boxwood grain", "Powerful spiritual protection"]
  },
  {
    id: "deity-38",
    title: "Mayur Peacock Ganpati 12-Inch Teakwood Sculpture",
    category: "deities",
    collection: "Premium Wooden Deities",
    tag: "Royal Mayur",
    material: "Solid Teakwood",
    finish: "Two-Tone Burnished Gold Wax",
    dimensions: '12" H x 9" W x 4.5" D',
    weight: "2.7 kg",
    pages: "Plate 38",
    description: "Lord Vinayaka seated upon an ornate dancing Mayur peacock throne with plumage spread in full glory.",
    image: "images/products/peacock_ganpati_12_inch_teakwood.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Open featherwork fret carving", "Royal umbrella prabhavali", "Traditional auspicious motif"]
  },
  {
    id: "deity-39",
    title: "Riddhi Siddhi Ganpati 24-Inch Teakwood Wall Relief",
    category: "deities",
    collection: "Premium Wooden Deities",
    tag: "Prosperity & Wisdom",
    material: "Seasoned Teakwood Single Slab",
    finish: "Deep Amber Patina",
    dimensions: '24" H x 16" W x 3" Depth',
    weight: "6.8 kg",
    pages: "Plate 39",
    description: "Grand high-relief depicting Lord Ganesha flanked by celestial consorts Riddhi and Siddhi, bestowing wisdom and eternal prosperity.",
    image: "images/products/riddhi_siddhi_ganpati_24_inch_teakwood.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Three divine figures in high relief", "Ornate archway with floral carvings", "Grand living room wall centerpiece"]
  },
  {
    id: "deity-40",
    title: "Maa Saraswati with Veena 24-Inch Teakwood Relief",
    category: "deities",
    collection: "Premium Wooden Deities",
    tag: "Sacred Arts",
    material: "Select Grade-A Teakwood",
    finish: "Warm Golden Satin Wax",
    dimensions: '24" H x 14" W x 3" Depth',
    weight: "6.5 kg",
    pages: "Plate 40",
    description: "Full-sized classical wall carving of Goddess Saraswati with sacred Veena, rosary beads, and the mythical Hamsa bird.",
    image: "images/products/saraswati_24_inch_teakwood.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Graceful hand posture on veena", "Intricate crown & drapery", "Finished with organic natural oils"]
  }
];

// 4 New Nature Items to reach 16 (12 + 4 = 16)
const additionalNature = [
  {
    id: "nature-13",
    title: "Royal Elephant Forest Panorama (Model 1)",
    category: "nature",
    collection: "Nature's Collection",
    tag: "Wildlife Heritage",
    material: "Select Indian Teakwood",
    finish: "Deep Walnut & Amber Wax",
    dimensions: '30" W x 18" H x 3" Depth',
    weight: "7.2 kg",
    pages: "Plate 53",
    description: "Breathtaking panoramic forest relief capturing a matriarch elephant and calf navigating through deep wilderness canopy.",
    image: "images/products/elephant_scenery_model_1.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Layered multi-depth perspective", "Realistic jungle foliage carving", "Symbol of peace and good fortune"]
  },
  {
    id: "nature-14",
    title: "Deep Wilderness Wildlife Panorama (Edition 1)",
    category: "nature",
    collection: "Nature's Collection",
    tag: "Jungle Sanctuary",
    material: "Solid Teakwood",
    finish: "Matt Natural Earth Polish",
    dimensions: '32" W x 18" H x 3" Depth',
    weight: "7.5 kg",
    pages: "Plate 54",
    description: "Detailed three-dimensional forest relief depicting deer, birds, and ancient trees in harmonious ecosystem harmony.",
    image: "images/products/nature_scenery_nature_scenery_1.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Rich textural tree bark & foliage", "Hand-chiseled wildlife figures", "Wall accent for executive spaces"]
  },
  {
    id: "nature-15",
    title: "Surya 7 Running Horses Vastu Board Relief",
    category: "nature",
    collection: "Nature's Collection",
    tag: "Vastu Energy",
    material: "Solid Teakwood Single Slab",
    finish: "Burnished Golden Honey Finish",
    dimensions: '36" W x 16" H x 2.5" Depth',
    weight: "7.8 kg",
    pages: "Plate 55",
    description: "Seven galloping stallions representing speed, success, and unstoppable forward momentum according to ancient Vastu Shastra.",
    image: "images/products/seven_horses_7_horse_board.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Dynamic muscular horse anatomy", "Flowing manes & tails in high relief", "Premier corporate & home office decor"]
  },
  {
    id: "nature-16",
    title: "Royal Bengal Tiger 3D Wall Relief (Archival Edition 1)",
    category: "nature",
    collection: "Nature's Collection",
    tag: "Apex Predator",
    material: "Seasoned Indian Hardwood",
    finish: "Rich Earthy Dark Polish",
    dimensions: '28" W x 18" H x 3.5" Depth',
    weight: "6.9 kg",
    pages: "Plate 56",
    description: "Powerful three-dimensional carving of the Royal Bengal Tiger emerging silently from the jungle grass, exuding regal authority.",
    image: "images/products/wall_tiger_wall_tiger_1.jpg",
    etsyUrl: "https://madhurihandicraft.etsy.com",
    features: ["Muscular anatomical fidelity", "Realistic bamboo and grass backdrop", "Finished with moisture-resistant wax"]
  }
];

// Now load existing CATALOG_DATA
eval(originalCode.replace('const HUB_COLLECTIONS', 'var HUB_COLLECTIONS').replace('const CATALOG_DATA', 'var CATALOG_DATA'));

const deitiesExisting = CATALOG_DATA.filter(i => i.category === 'deities');
const natureExisting = CATALOG_DATA.filter(i => i.category === 'nature');
const collectiblesExisting = CATALOG_DATA.filter(i => i.category === 'collectibles');

// Keep top 2 collectibles matching Etsy shop (Ashoka Stambh + Sacred Lotus Seal)
const finalCollectibles = [
  collectiblesExisting.find(i => i.id === 'collect-01') || collectiblesExisting[0],
  collectiblesExisting.find(i => i.id === 'collect-03') || collectiblesExisting[1]
];

const finalDeities = [...deitiesExisting, ...additionalDeities];
const finalNature = [...natureExisting, ...additionalNature];

console.log('Final Deities count:', finalDeities.length); // Exactly 40
console.log('Final Nature count:', finalNature.length);   // Exactly 16
console.log('Final Collectibles count:', finalCollectibles.length); // Exactly 2
console.log('Total items:', finalDeities.length + finalNature.length + finalCollectibles.length); // Exactly 58

const allFinal = [...finalDeities, ...finalNature, ...finalCollectibles];

const outputJS = `// Madhuri Handicrafts / Furniture — Curated 2026 Collection Data
// Matching Official Etsy Store: Premium Wooden Deities (40), Nature's Collection (16), Collectibles (2) = Total 58

const HUB_COLLECTIONS = ${hubCollectionsStr};

const CATALOG_DATA = ${JSON.stringify(allFinal, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CATALOG_DATA, HUB_COLLECTIONS };
}
`;

fs.writeFileSync('js/catalog-data.js', outputJS, 'utf8');
console.log('js/catalog-data.js successfully updated with all 58 items!');
