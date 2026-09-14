// Madhuri Handicrafts / Furniture — Curated 2026 Collection Data
// Matching Official Etsy Store: Premium Wooden Deities (10), Nature's Collection (4), Collectibles (2) = Total 16

const HUB_COLLECTIONS = [
  {
    id: "deities",
    kicker: "Handcrafted Sacred Art",
    title: "Premium <em>Wooden Deities</em>",
    meta: "10 Masterpieces · Hand-Carved Solid Teakwood & Sacred Boxwood",
    chip: "10 Exclusive Works",
    category: "deities",
    image: "images/hero_deities.jpg",
    linkText: "Explore Collection"
  },
  {
    id: "nature",
    kicker: "Vastu & Wildlife Artistry",
    title: "Nature's <em>Collection</em>",
    meta: "4 Sculptures · Royal Elephant, Surya 7 Horses, Bengal Tiger & Himalayan Bear",
    chip: "4 Curated Works",
    category: "nature",
    image: "images/hero_nature.jpg",
    linkText: "Explore Collection"
  },
  {
    id: "collectibles",
    kicker: "National Heritage & Emblems",
    title: "<em>Collectibles</em>",
    meta: "Exclusive Editions · Ashoka Stambh Lion Capital & Commemorative Art",
    chip: "Collector's Edit",
    category: "collectibles",
    image: "images/hero_collectibles.jpg",
    linkText: "Explore Collection"
  }
];

const CATALOG_DATA = [
  {
    "id": "deity-01",
    "title": "Adiyogi Shiva Cosmic Meditation Wood Carving",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Masterpiece",
    "material": "Seasoned Indian Teakwood & Boxwood",
    "finish": "Natural Honey-Gold Wax Polish",
    "dimensions": "12\" H x 9\" W x 4.5\" D (Also in 30\")",
    "weight": "2.8 kg",
    "pages": "Plate 1",
    "description": "Depicting the first yogi Lord Shiva in tranquil dhyana contemplation with sacred crescent moon, serpent, and flowing jata locks. Hand-chiseled from single seasoned wood blocks.",
    "image": "images/products/adiyogi.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Hand-carved facial serenity",
      "Single-block seasoned teakwood",
      "Protective natural beeswax coating"
    ]
  },
  {
    "id": "deity-02",
    "title": "Grand Adiyogi Shiva 30-Inch Monumental Sculpture",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Grand Centerpiece",
    "material": "Solid Grade-A Teakwood",
    "finish": "Rich Walnut Satin Polish",
    "dimensions": "30\" H x 22\" W x 10\" D",
    "weight": "12.5 kg",
    "pages": "Plate 2",
    "description": "An imposing, life-affirming 30-inch Adiyogi masterwork meant for entry foyers, temple sanctums, and meditation retreats.",
    "image": "images/products/adiyogi_12_inch_teakwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Monumental presence",
      "Precision anatomy & drapery",
      "Termite-treated seasoned teak"
    ]
  },
  {
    "id": "deity-03",
    "title": "Sacred Heart of Jesus Christ Wooden Relief",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Devotional",
    "material": "Fine Indian Hardwood & Teak",
    "finish": "Antique Oak Stained Polish",
    "dimensions": "20\" H x 12\" W x 3\" D",
    "weight": "3.9 kg",
    "pages": "Plate 3",
    "description": "Compassionate portraiture of Jesus Christ with open hands of grace, crowned with holy radiance and expressive flowing hair.",
    "image": "images/products/jesus.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Expressive anatomical handwork",
      "Smooth halo relief",
      "Mounting bracket installed"
    ]
  },
  {
    "id": "deity-04",
    "title": "Meditation Hanuman Ji (12 Inch Teak Edition)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Devotion",
    "material": "A-Grade Teakwood",
    "finish": "Golden Honey Polish",
    "dimensions": "12\" H x 7\" W x 3.5\" D",
    "weight": "2.4 kg",
    "pages": "Plate 4",
    "description": "Compact meditative Hanumanji for study tables, yoga rooms, and mandir shelves to inspire mental focus and fearlessness.",
    "image": "images/products/meditation_hanuman_12_inch_teakwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Symmetric lotus posture",
      "Gada resting beside",
      "Natural grain brilliance"
    ]
  },
  {
    "id": "deity-05",
    "title": "Mayur Peacock Ganpati with Elaborate Arch (24 Inch)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Flagship",
    "material": "Single-Block Indian Teakwood",
    "finish": "Royal Heritage Wax Polish",
    "dimensions": "24\" H x 14\" W x 5.5\" D",
    "weight": "7.4 kg",
    "pages": "Plate 5",
    "description": "Spectacular Ganesha sculpture enveloped by dancing peacocks whose ornate feathers form a regal prabhavali arch around the deity.",
    "image": "images/products/peacock_ganpati.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Full 3D openwork lattice carving",
      "Feather-by-feather engraving",
      "Grand focal centerpiece"
    ]
  },
  {
    "id": "deity-06",
    "title": "Wall Ganesha Architectural High-Relief Panel (24 Inch)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Architectural Accent",
    "material": "Seasoned Teakwood Single Slab",
    "finish": "Walnut Stain with Burnished Edges",
    "dimensions": "24\" H x 16\" W x 3.5\" Depth",
    "weight": "6.9 kg",
    "pages": "Plate 6",
    "description": "Magnificent high-relief Ganesha panel designed to command focal prominence on living room accents, foyers, or courtyard walls.",
    "image": "images/products/wall_ganesha.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Bold sculptural depth",
      "Heavy-duty concealed rear hooks",
      "Resistant to seasonal warping"
    ]
  },
  {
    "id": "deity-07",
    "title": "Wall Shiv Mahadev Celestial Face Wall Sculpture",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Tranquil Aura",
    "material": "Indian Teakwood",
    "finish": "Deep Teak Oil Finish",
    "dimensions": "22\" H x 14\" W x 3\" Depth",
    "weight": "5.1 kg",
    "pages": "Plate 7",
    "description": "Captivating relief of Lord Shiva in peaceful meditation, adorned with holy Ganga flowing from matted hair, Vasuki serpent, and Tripundra mark.",
    "image": "images/products/wall_shiv.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Serene transcendental features",
      "Sculptural floating effect",
      "Deep single-plank carving"
    ]
  },
  {
    "id": "deity-08",
    "title": "Adiyogi Shiva 12-Inch Sacred Boxwood Altar Idol",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Sacred Boxwood",
    "material": "Rare Indian Boxwood",
    "finish": "Silky Natural Wax Luster",
    "dimensions": "12\" H x 8.5\" W x 4\" D",
    "weight": "2.1 kg",
    "pages": "Plate 8",
    "description": "Compact altarpiece edition of the Cosmic Yogic Dhyana Shiva, meticulously chiseled from dense pale sacred boxwood.",
    "image": "images/products/adiyogi_12_inch_boxwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Ultra-fine boxwood chisel detailing",
      "Micro-carved trishula & crescent",
      "Ideal for compact meditation altars"
    ]
  },
  {
    "id": "deity-09",
    "title": "Tirupati Balaji Venkateshwara 12-Inch Sanctum Murti",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Tirumala Darshan",
    "material": "Solid Indian Teakwood",
    "finish": "Antique Honey Amber Wax",
    "dimensions": "12\" H x 6.5\" W x 3.5\" D",
    "weight": "2.2 kg",
    "pages": "Plate 9",
    "description": "Sacred desktop darshan idol of Lord Venkateshwara adorned with Shankha, Chakra, and ornate temple archways.",
    "image": "images/products/balaji_12_inch.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Intricate gold-burnished jewelry",
      "Four-arm divine iconography",
      "Solid pedestal base"
    ]
  },
  {
    "id": "deity-10",
    "title": "Panchmukhi Hanuman Ji 6-Inch Sacred Boxwood Idol",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Protection Vastu",
    "material": "Sacred Boxwood",
    "finish": "Organic Beeswax Luster",
    "dimensions": "6\" H x 4.2\" W x 2.8\" D",
    "weight": "0.9 kg",
    "pages": "Plate 10",
    "description": "Five-faced divine form of Hanuman Ji (Hanuman, Narasimha, Garuda, Varaha, and Hayagriva) chiseled from fragrant boxwood.",
    "image": "images/products/panchmukhi_hanuman_6_inch_boxwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "All five divine faces chiseled in detail",
      "Sacred boxwood grain",
      "Powerful spiritual protection"
    ]
  },
  {
    "id": "nature-01",
    "title": "Royal Elephant Scenery — Forest Sanctuary (Model 2)",
    "category": "nature",
    "collection": "Nature's Collection",
    "tag": "Collector's Panel",
    "material": "Solid Reclaimed Teakwood Plank",
    "finish": "Antique Golden Honey Polish",
    "dimensions": "42\" W x 24\" H x 4\" Depth",
    "weight": "11.2 kg",
    "pages": "Plate 11",
    "description": "Expansive panorama of maternal elephant guiding calves through sacred wilderness, evoking family bonding and natural harmony.",
    "image": "images/products/elephant_scenery_model_2.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Imposing architectural scale",
      "Natural woodgrain flow",
      "Vastu strength symbol"
    ]
  },
  {
    "id": "nature-02",
    "title": "Surya 7 Horses Hand-Carved Teakwood Stand Panel",
    "category": "nature",
    "collection": "Nature's Collection",
    "tag": "Success & Speed",
    "material": "Solid Teakwood on Heavy Base",
    "finish": "Deep Espresso Polish",
    "dimensions": "28\" W x 12\" H x 4\" Base",
    "weight": "5.4 kg",
    "pages": "Plate 12",
    "description": "Freestanding executive office edition of the 7 horses sculpture, engineered for boardroom credenzas and executive desks.",
    "image": "images/products/seven_horses_7_horse_teakwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Freestanding stable podium",
      "Expressive equine anatomy",
      "High-prestige corporate gift"
    ]
  },
  {
    "id": "nature-03",
    "title": "Royal Bengal Tiger Wall Sculpture (Model 2 Stalking)",
    "category": "nature",
    "collection": "Nature's Collection",
    "tag": "Apex Hunter",
    "material": "Single Teak Block",
    "finish": "Rich Satin Teak Polish",
    "dimensions": "30\" W x 20\" H x 4\" Depth",
    "weight": "7.1 kg",
    "pages": "Plate 13",
    "description": "Dynamic profile of the Royal Bengal Tiger in stalking stance, expressing raw majesty, courage, and focused determination.",
    "image": "images/products/wall_tiger_wall_tiger_2.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Stalking dynamic curvature",
      "Fine muscle definition",
      "Heavy-duty wall anchors"
    ]
  },
  {
    "id": "nature-04",
    "title": "Himalayan Forest Bear Artisanal Wood Carving",
    "category": "nature",
    "collection": "Nature's Collection",
    "tag": "Wilderness Heritage",
    "material": "A-Grade Indian Hardwood",
    "finish": "Dark Antique Charcoal Polish",
    "dimensions": "14\" H x 15\" W x 5.5\" D",
    "weight": "4.3 kg",
    "pages": "Plate 14",
    "description": "Rugged yet charming depiction of the Indian black bear foraging peacefully amidst rocky slopes.",
    "image": "images/products/bear.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Textured fur engraving",
      "Solid weighty presence",
      "Artisan signed"
    ]
  },
  {
    "id": "collect-01",
    "title": "Lion Capital of Ashoka — Ashoka Stambh Heritage Sculpture",
    "category": "collectibles",
    "collection": "Collectibles",
    "tag": "National Heritage",
    "material": "Solid Indian Teakwood & Brass Finial Accents",
    "finish": "Regal Royal Polish with Hand-Burnished Highlights",
    "dimensions": "18\" H x 7.5\" Base Dia (Also in 12\" & 24\")",
    "weight": "4.2 kg",
    "pages": "Plate 15",
    "description": "The revered National Emblem of India. Four Asiatic Lions standing back to back symbolizing Power, Courage, Pride, and Confidence, mounted upon an abacus with high-relief Ashoka Chakra wheels.",
    "image": "images/products/ashoka_stambh.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Four back-to-back lions chiseled with immaculate symmetry",
      "Accurate 24-spoke Dharma Chakras",
      "Ideal for dignitaries, embassies, corporate offices"
    ]
  },
  {
    "id": "collect-02",
    "title": "Sacred Lotus Heritage Seal & Emblem Carving",
    "category": "collectibles",
    "collection": "Collectibles",
    "tag": "Insignia",
    "material": "Solid Teakwood Relief",
    "finish": "Golden Ochre Hand Rub",
    "dimensions": "14\" H x 14\" W x 2\" D",
    "weight": "2.5 kg",
    "pages": "Plate 16",
    "description": "Symbolic blossoming lotus carved with geometric precision, representing purity of action, enlightenment, and national cultural pride.",
    "image": "images/products/lotus_emblem.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Concentric floral symmetry",
      "Smooth beveled edges",
      "Wall mounting or tabletop easel display"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CATALOG_DATA, HUB_COLLECTIONS };
}
