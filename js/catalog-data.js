// Madhuri Handicrafts / Furniture — Curated 2026 Collection Data
// Matching Official Etsy Store: Premium Wooden Deities (40), Nature's Collection (4), Collectibles (2) = Total 46

const HUB_COLLECTIONS = [
  {
    id: "deities",
    kicker: "Handcrafted Sacred Art",
    title: "Premium <em>Wooden Deities</em>",
    meta: "40 Masterpieces · Hand-Carved Solid Teakwood & Sacred Boxwood",
    chip: "40 Exclusive Works",
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
    "pages": "Pages 4-5",
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
    "pages": "Pages 6-7",
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
    "title": "Tirupati Balaji Sri Venkateshwara Divine Idol (24 Inch)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Auspicious",
    "material": "A-Grade Indian Teakwood with Brass Accents",
    "finish": "Hand-Rubbed Antique Walnut Lustre",
    "dimensions": "24\" H x 12\" W x 5\" D",
    "weight": "6.2 kg",
    "pages": "Pages 8-9",
    "description": "Intricately detailed representation of Lord Venkateshwara with Shankha, Chakra, and Varada Mudra. Crowned with the sacred Kireetam and ornate garland ornamentation.",
    "image": "images/products/balaji.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Intricate jewelry relief work",
      "Stable weighted pedestal",
      "Sanctum puja grade"
    ]
  },
  {
    "id": "deity-04",
    "title": "Tirupati Balaji Sanctum Idol (12 Inch Temple Edition)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Bestseller",
    "material": "Solid Seasoned Teakwood",
    "finish": "Golden Honey Sheen",
    "dimensions": "12\" H x 6.5\" W x 3.5\" D",
    "weight": "2.1 kg",
    "pages": "Pages 10-11",
    "description": "Compact home temple Balaji idol carved with micro-chisel precision to bring Vaikuntha blessings and endless abundance into your home.",
    "image": "images/products/balaji_24inch.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Fine jewel carvings",
      "Fits any home mandir",
      "Hand-finished edges"
    ]
  },
  {
    "id": "deity-05",
    "title": "Lord Buddha in Deep Dhyana Meditation (Model 1)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Zen Tranquility",
    "material": "Selected Grain Teakwood",
    "finish": "Smooth Silk Matte Finish",
    "dimensions": "18\" H x 12\" W x 6\" D",
    "weight": "4.5 kg",
    "pages": "Pages 12-13",
    "description": "Gautama Buddha seated upon a double lotus throne in meditative absorption, emanating supreme peace, mindfulness, and equanimity.",
    "image": "images/products/buddha.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Sculpted lotus petals",
      "Gentle facial compassion",
      "Vastu harmony approved"
    ]
  },
  {
    "id": "deity-06",
    "title": "Abhaya Mudra Blessing Buddha (Model 2 - 12 Inch)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Protection",
    "material": "Rare Fine Boxwood & Teak",
    "finish": "Warm Amber Hand Polish",
    "dimensions": "12\" H x 7.5\" W x 4\" D",
    "weight": "1.9 kg",
    "pages": "Pages 14-15",
    "description": "Buddha with right hand raised in Abhaya mudra dispelling fear and conferring protection, surrounded by flowing monastic robes.",
    "image": "images/products/buddha_model_2_12_inch.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Intricate sanghati folds",
      "Protective aura",
      "Solid one-piece carving"
    ]
  },
  {
    "id": "deity-07",
    "title": "Shrimant Dagduseth Halwai Ganpati Maharaj (Teakwood)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Divine Grace",
    "material": "Solid Teakwood & Golden Foil Accents",
    "finish": "Regal Royal Polish",
    "dimensions": "24\" H x 15\" W x 8\" D",
    "weight": "7.8 kg",
    "pages": "Pages 16-17",
    "description": "Faithfully capturing the celebrated Pune Dagduseth Ganpati's iconic ornate crown, trunk ornaments, modak, and divine protective palm.",
    "image": "images/products/dagduseth.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Exact Dagduseth crown ornamentation",
      "Heavy stable base",
      "Hand-detailed mukut"
    ]
  },
  {
    "id": "deity-08",
    "title": "Shrimant Dagduseth Ganpati (6 Inch Boxwood Edition)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Puja Mandir",
    "material": "Dense Seasoned Boxwood",
    "finish": "Natural Yellow Honey Lustre",
    "dimensions": "6\" H x 4\" W x 2.5\" D",
    "weight": "650 g",
    "pages": "Pages 18-19",
    "description": "Miniature high-detail Dagduseth idol sculpted in dense boxwood grain, ideal for office desks, personal altars, and auspicious gifting.",
    "image": "images/products/dagduseth_6_inch_boxwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Pocket mastercraft",
      "Fine micro-chiseled features",
      "Pure natural wood color"
    ]
  },
  {
    "id": "deity-09",
    "title": "Guru Nanak Dev Ji Handcrafted Blessing Icon (21 Inch)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Spiritual Light",
    "material": "Seasoned Teakwood & Boxwood",
    "finish": "Rich Vintage Wood Glow",
    "dimensions": "21\" H x 14\" W x 5\" D",
    "weight": "5.4 kg",
    "pages": "Pages 20-21",
    "description": "Revered representation of Sri Guru Nanak Dev Ji with hand raised in blessing (Ek Onkar), depicting compassionate visage and traditional dastar.",
    "image": "images/products/guru_nanak.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Ek Onkar sacred detailing",
      "Soulful benevolent gaze",
      "Handcrafted prayer beads"
    ]
  },
  {
    "id": "deity-10",
    "title": "Guru Nanak Dev Ji Boxwood Altar Icon (6 Inch)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Sacred Altar",
    "material": "Solid Dense Boxwood",
    "finish": "Fine Silk Sanded & Waxed",
    "dimensions": "6\" H x 4\" W x 2.5\" D",
    "weight": "580 g",
    "pages": "Pages 22-23",
    "description": "Exquisitely detailed devotional piece for prayer spaces, radiating oneness, truth, and spiritual warmth.",
    "image": "images/products/guru_nanak_6_inch_boxwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Fine beard & robe texture",
      "Natural organic finish",
      "Export packed with care"
    ]
  },
  {
    "id": "deity-11",
    "title": "Sacred Heart of Jesus Christ Wooden Relief",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Devotional",
    "material": "Fine Indian Hardwood & Teak",
    "finish": "Antique Oak Stained Polish",
    "dimensions": "20\" H x 12\" W x 3\" D",
    "weight": "3.9 kg",
    "pages": "Pages 24-25",
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
    "id": "deity-12",
    "title": "Lord Krishna Divine Flute Mural Wall Board",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Signature Panel",
    "material": "Single Teakwood Plank Relief",
    "finish": "Duotone Golden Teak & Espresso",
    "dimensions": "30\" H x 16\" W x 2.5\" D",
    "weight": "7.1 kg",
    "pages": "Pages 26-27",
    "description": "Lord Krishna in tribhanga posture playing the enchanting bansuri under the Kadamba tree with divine peacock feather crown.",
    "image": "images/products/krishna_flute.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Deep 3D undercut relief",
      "Peacock feather crown etching",
      "Acoustic wood selection"
    ]
  },
  {
    "id": "deity-13",
    "title": "Dhyana Mudra Meditation Hanuman Ji (24 Inch)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Vastu & Strength",
    "material": "Indian Teakwood",
    "finish": "Deep Walnut with Burnished Highlights",
    "dimensions": "24\" H x 13\" W x 6\" D",
    "weight": "6.8 kg",
    "pages": "Pages 28-29",
    "description": "Lord Hanuman in deep yogic samadhi, embodying boundless strength coupled with supreme surrender, devotion, and inner stillness.",
    "image": "images/products/meditation_hanuman.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Muscular anatomical fidelity",
      "Peaceful inward dhyana face",
      "Solid one-piece wood"
    ]
  },
  {
    "id": "deity-14",
    "title": "Meditation Hanuman Ji (12 Inch Teak Edition)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Devotion",
    "material": "A-Grade Teakwood",
    "finish": "Golden Honey Polish",
    "dimensions": "12\" H x 7\" W x 3.5\" D",
    "weight": "2.4 kg",
    "pages": "Pages 30-31",
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
    "id": "deity-15",
    "title": "Mahakaal Shiva Rudra Avatar Relief Board",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Supreme Cosmic",
    "material": "Heavy Solid Teakwood Board",
    "finish": "Charcoal & Walnut Dual Tone",
    "dimensions": "24\" H x 18\" W x 3\" D",
    "weight": "6.5 kg",
    "pages": "Pages 32-33",
    "description": "Imposing Mahakaal Ujjain manifestation with Trishul, Damru, crescent moon, and third eye of transcendental wisdom.",
    "image": "images/products/mahakaal.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Trishul & Damru deep relief",
      "Powerful spiritual resonance",
      "Reinforced mounting backer"
    ]
  },
  {
    "id": "deity-16",
    "title": "Mouse Ganpati — Vinayaka on Sacred Mushak Vahana",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Charming Detail",
    "material": "Seasoned Teakwood & Boxwood",
    "finish": "Satin Smooth Luster",
    "dimensions": "12\" H x 8\" W x 4.5\" D",
    "weight": "2.6 kg",
    "pages": "Pages 34-35",
    "description": "Delightful depiction of Ganesha in playful yet royal posture with his faithful mouse attendant Mushak offering modak.",
    "image": "images/products/mouse_ganpati.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Expressive Mushak carving",
      "Intricate crown & modak bowl",
      "Auspicious home entrance gift"
    ]
  },
  {
    "id": "deity-17",
    "title": "Panchmukhi Hanuman Ji 5-Faced Supreme Protector",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Ultimate Protection",
    "material": "Indian Teakwood (Mounted / Stand)",
    "finish": "Antique Golden Oak Stain",
    "dimensions": "24\" H x 16\" W x 6\" D",
    "weight": "8.2 kg",
    "pages": "Pages 36-37",
    "description": "Featuring all five sacred faces: Hanuman (East), Narasimha (South), Garuda (West), Varaha (North), and Hayagriva (Skyward).",
    "image": "images/products/panchmukhi_hanuman.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "All 5 faces chiseled with distinct iconography",
      "Ten sacred arms with astras",
      "Master artisan signed"
    ]
  },
  {
    "id": "deity-18",
    "title": "Mayur Peacock Ganpati with Elaborate Arch (24 Inch)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Flagship",
    "material": "Single-Block Indian Teakwood",
    "finish": "Royal Heritage Wax Polish",
    "dimensions": "24\" H x 14\" W x 5.5\" D",
    "weight": "7.4 kg",
    "pages": "Pages 38-39",
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
    "id": "deity-19",
    "title": "Mayur Peacock Ganpati (6 Inch Boxwood Altar)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Fine Artistry",
    "material": "Seasoned Dense Boxwood",
    "finish": "Natural Honey Sheen",
    "dimensions": "6\" H x 4.5\" W x 2\" D",
    "weight": "720 g",
    "pages": "Pages 40-41",
    "description": "Incredible miniature mastery exhibiting miniature peacock plumage and delicate modak holding trunk.",
    "image": "images/products/peacock_ganpati_6_inch_boxwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Museum grade miniature chiseling",
      "Uniform butter-smooth wood",
      "Collector favourite"
    ]
  },
  {
    "id": "deity-20",
    "title": "Radha Krishna Divine Eternal Love Relief",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Harmonious Union",
    "material": "Seasoned Teakwood Panel",
    "finish": "Warm Walnut Hand Finish",
    "dimensions": "22\" H x 14\" W x 3\" D",
    "weight": "4.8 kg",
    "pages": "Pages 42-43",
    "description": "Graceful sculpted duet of Sri Radha and Krishna sharing sweet glance beneath Kadamba blossoms, symbolizing celestial devotion.",
    "image": "images/products/radha_krishna.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Intimate emotive expression",
      "Fluid traditional jewelry",
      "Symbol of marital harmony"
    ]
  },
  {
    "id": "deity-21",
    "title": "Riddhi Siddhi Ganpati with Consorts of Prosperity",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Prosperity",
    "material": "Teakwood & Boxwood",
    "finish": "Golden Antique Polish",
    "dimensions": "24\" H x 15\" W x 5.5\" D",
    "weight": "7.0 kg",
    "pages": "Pages 44-45",
    "description": "Lord Ganesha accompanied by Goddesses Riddhi (Knowledge & Prosperity) and Siddhi (Attainment & Spiritual Power) upon a royal singhasan.",
    "image": "images/products/riddhi_siddhi_ganpati.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Triple divine manifestation",
      "Bringer of trade success & intellect",
      "Carved throne base"
    ]
  },
  {
    "id": "deity-22",
    "title": "Shirdi Sai Baba Blessing Statue (Teakwood Stand & Mounted)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Faith & Patience",
    "material": "Solid Teakwood",
    "finish": "Natural Warm Wood Satin",
    "dimensions": "24\" H x 12\" W x 6\" D",
    "weight": "6.2 kg",
    "pages": "Pages 46-47",
    "description": "Soul-stirring posture of Shirdi Sai Baba seated upon his sacred stone slab in 'Sabka Malik Ek' blessing gesture.",
    "image": "images/products/sai_baba.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Faithful depiction of kafni & headcloth",
      "Serene compassionate smile",
      "Option of freestanding or wall mount"
    ]
  },
  {
    "id": "deity-23",
    "title": "Maa Saraswati with Sacred Veena & Hamsa (24 Inch)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Wisdom & Arts",
    "material": "Select Teakwood & Boxwood",
    "finish": "Silky Honey Satin",
    "dimensions": "24\" H x 13\" W x 5\" D",
    "weight": "6.5 kg",
    "pages": "Pages 48-49",
    "description": "Goddess of music, arts, knowledge, and wisdom playing the celestial veena, seated upon the white lotus with the sacred swan.",
    "image": "images/products/saraswati.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Carved veena strings & fretboard",
      "Graceful swan vahana",
      "Ideal for students & musicians"
    ]
  },
  {
    "id": "deity-24",
    "title": "Shrinathji of Nathdwara Govardhan Dharan Icon",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Pushtimarg Heritage",
    "material": "Solid Teakwood with Traditional Border",
    "finish": "Deep Antique Patina",
    "dimensions": "20\" H x 14\" W x 3\" D",
    "weight": "4.9 kg",
    "pages": "Pages 50-51",
    "description": "Sacred icon of 7-year-old Krishna holding Govardhan hill with his left hand, lotus garlands, and the iconic jeweled pagh crown.",
    "image": "images/products/shrinathji.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Authentic Nathdwara darshan motif",
      "Intricate shringar jewelry carving",
      "Ready to hang wall brackets"
    ]
  },
  {
    "id": "deity-25",
    "title": "Bhagwan Swaminarayan Divine Murti Sculpture",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Pure Devotion",
    "material": "Fine Grain Indian Teak",
    "finish": "Warm Golden Brown Luster",
    "dimensions": "18\" H x 10\" W x 4.5\" D",
    "weight": "4.2 kg",
    "pages": "Pages 52-53",
    "description": "Revered posture of Bhagwan Swaminarayan with benevolent gaze, ornate dhoti drapery, and traditional pagh garland.",
    "image": "images/products/swaminarayan.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Devotional handwork",
      "Lustrous organic wax polish",
      "Durable seasoned teak"
    ]
  },
  {
    "id": "deity-26",
    "title": "Wall Ganesha Architectural High-Relief Panel (24 Inch)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Architectural Accent",
    "material": "Seasoned Teakwood Single Slab",
    "finish": "Walnut Stain with Burnished Edges",
    "dimensions": "24\" H x 16\" W x 3.5\" Depth",
    "weight": "6.9 kg",
    "pages": "Pages 54-55",
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
    "id": "deity-27",
    "title": "Wall Shiv Mahadev Celestial Face Wall Sculpture",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Tranquil Aura",
    "material": "Indian Teakwood",
    "finish": "Deep Teak Oil Finish",
    "dimensions": "22\" H x 14\" W x 3\" Depth",
    "weight": "5.1 kg",
    "pages": "Pages 56-57",
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
    "id": "deity-28",
    "title": "Adiyogi Shiva 12-Inch Sacred Boxwood Altar Idol",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Sacred Boxwood",
    "material": "Rare Indian Boxwood",
    "finish": "Silky Natural Wax Luster",
    "dimensions": "12\" H x 8.5\" W x 4\" D",
    "weight": "2.1 kg",
    "pages": "Plate 28",
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
    "id": "deity-29",
    "title": "Tirupati Balaji Venkateshwara 12-Inch Sanctum Murti",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Tirumala Darshan",
    "material": "Solid Indian Teakwood",
    "finish": "Antique Honey Amber Wax",
    "dimensions": "12\" H x 6.5\" W x 3.5\" D",
    "weight": "2.2 kg",
    "pages": "Plate 29",
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
    "id": "deity-30",
    "title": "Meditating Buddha Nirvana High-Relief (Model 1)",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Zen Serenity",
    "material": "Fine Indian Teakwood",
    "finish": "Earthy Matt Teak Polish",
    "dimensions": "16\" H x 12\" W x 3\" Depth",
    "weight": "3.4 kg",
    "pages": "Plate 30",
    "description": "Gautama Buddha under the Bodhi tree in tranquil Samadhi meditation with ornate floral halos and gentle drapery.",
    "image": "images/products/buddha_model_1.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Gentle meditative expression",
      "Bodhi leaves intricate relief",
      "Deep wall relief carving"
    ]
  },
  {
    "id": "deity-31",
    "title": "Shrimant Dagduseth Halwai Ganpati 12-Inch Teakwood Murti",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Pune Icon",
    "material": "Solid Teakwood",
    "finish": "Warm Golden Teak Luster",
    "dimensions": "12\" H x 8\" W x 4.5\" D",
    "weight": "2.8 kg",
    "pages": "Plate 31",
    "description": "Sacred darshan idol of the world-famous Dagduseth Ganpati adorned with majestic Mukut and blessings for prosperity.",
    "image": "images/products/dagduseth_12_inch_teakwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Accurate Dagduseth crown carving",
      "Modak in left hand with divine trunk",
      "Traditional pooja pedestal"
    ]
  },
  {
    "id": "deity-32",
    "title": "Guru Nanak Dev Ji 21-Inch Monumental Teakwood Relief",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Divine Blessing",
    "material": "Select Indian Teakwood",
    "finish": "Deep Natural Teak Polish",
    "dimensions": "21\" H x 14\" W x 3\" Depth",
    "weight": "5.6 kg",
    "pages": "Plate 32",
    "description": "Large monumental wooden relief of Guru Nanak Dev Ji in Abhaya blessing pose with Ek Onkar sacred seal.",
    "image": "images/products/guru_nanak_21_inch_teakwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Soulful radiant aura carving",
      "Fine prayer bead rosary details",
      "Architectural frame border"
    ]
  },
  {
    "id": "deity-33",
    "title": "Mahakaal Shiva Rudra Avatar 24-Inch Wall Frame Relief",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Ujjain Darshan",
    "material": "Single-Plank Teakwood",
    "finish": "Dark Antique Charcoal Patina",
    "dimensions": "24\" H x 15\" W x 3.5\" Depth",
    "weight": "6.4 kg",
    "pages": "Plate 33",
    "description": "Fierce yet deeply protective Mahakaal Shiva face with third eye, Vasuki serpent, and sacred crescent moon.",
    "image": "images/products/mahakaal_24_inch_teakwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Intense devotional aura",
      "Deep 3D undercut reliefs",
      "Pre-installed heavy-duty hanging brackets"
    ]
  },
  {
    "id": "deity-34",
    "title": "Mahakaal Sacred Temple Wall Board Relief",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Temple Accent",
    "material": "Seasoned Teakwood Board",
    "finish": "Traditional Walnut Stain",
    "dimensions": "20\" H x 14\" W x 2.5\" Depth",
    "weight": "4.8 kg",
    "pages": "Plate 34",
    "description": "Sacred temple-style wall board showcasing the majestic Trishul, Damru, and Mahakaal insignia.",
    "image": "images/products/mahakaal_mahakaal_board.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Trishul & Damru centerpiece",
      "Burnished gold highlights",
      "Resistant to moisture"
    ]
  },
  {
    "id": "deity-35",
    "title": "Meditation Hanuman Ji 6-Inch Pure Boxwood Idol",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Bhakti Yoga",
    "material": "Rare Sacred Boxwood",
    "finish": "Natural Satin Wood Polish",
    "dimensions": "6\" H x 4\" W x 2.5\" D",
    "weight": "0.85 kg",
    "pages": "Plate 35",
    "description": "Compact sacred altar idol of Lord Hanuman seated in peaceful contemplation, radiating strength and unwavering loyalty.",
    "image": "images/products/meditation_hanuman_6_inch_boxwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Miniature chisel precision",
      "Silk-smooth boxwood texture",
      "Ideal for puja mandir or car dashboard"
    ]
  },
  {
    "id": "deity-36",
    "title": "Mouse Ganpati Mushakraj 12-Inch Teakwood Sculpture",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Divine Vahana",
    "material": "Solid Indian Teak",
    "finish": "Warm Honey Gloss",
    "dimensions": "12\" H x 8.5\" W x 4.5\" D",
    "weight": "2.9 kg",
    "pages": "Plate 36",
    "description": "Charming traditional composition featuring Lord Ganesha accompanied lovingly by his sacred vahana Mushakraj.",
    "image": "images/products/mouse_ganpati_12_inch_teakwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Intricately detailed mouse vahana",
      "Blessing abhaya mudra",
      "Natural teakwood grains"
    ]
  },
  {
    "id": "deity-37",
    "title": "Panchmukhi Hanuman Ji 6-Inch Sacred Boxwood Idol",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Protection Vastu",
    "material": "Sacred Boxwood",
    "finish": "Organic Beeswax Luster",
    "dimensions": "6\" H x 4.2\" W x 2.8\" D",
    "weight": "0.9 kg",
    "pages": "Plate 37",
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
    "id": "deity-38",
    "title": "Mayur Peacock Ganpati 12-Inch Teakwood Sculpture",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Royal Mayur",
    "material": "Solid Teakwood",
    "finish": "Two-Tone Burnished Gold Wax",
    "dimensions": "12\" H x 9\" W x 4.5\" D",
    "weight": "2.7 kg",
    "pages": "Plate 38",
    "description": "Lord Vinayaka seated upon an ornate dancing Mayur peacock throne with plumage spread in full glory.",
    "image": "images/products/peacock_ganpati_12_inch_teakwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Open featherwork fret carving",
      "Royal umbrella prabhavali",
      "Traditional auspicious motif"
    ]
  },
  {
    "id": "deity-39",
    "title": "Riddhi Siddhi Ganpati 24-Inch Teakwood Wall Relief",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Prosperity & Wisdom",
    "material": "Seasoned Teakwood Single Slab",
    "finish": "Deep Amber Patina",
    "dimensions": "24\" H x 16\" W x 3\" Depth",
    "weight": "6.8 kg",
    "pages": "Plate 39",
    "description": "Grand high-relief depicting Lord Ganesha flanked by celestial consorts Riddhi and Siddhi, bestowing wisdom and eternal prosperity.",
    "image": "images/products/riddhi_siddhi_ganpati_24_inch_teakwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Three divine figures in high relief",
      "Ornate archway with floral carvings",
      "Grand living room wall centerpiece"
    ]
  },
  {
    "id": "deity-40",
    "title": "Maa Saraswati with Veena 24-Inch Teakwood Relief",
    "category": "deities",
    "collection": "Premium Wooden Deities",
    "tag": "Sacred Arts",
    "material": "Select Grade-A Teakwood",
    "finish": "Warm Golden Satin Wax",
    "dimensions": "24\" H x 14\" W x 3\" Depth",
    "weight": "6.5 kg",
    "pages": "Plate 40",
    "description": "Full-sized classical wall carving of Goddess Saraswati with sacred Veena, rosary beads, and the mythical Hamsa bird.",
    "image": "images/products/saraswati_24_inch_teakwood.jpg",
    "etsyUrl": "https://madhurihandicraft.etsy.com",
    "features": [
      "Graceful hand posture on veena",
      "Intricate crown & drapery",
      "Finished with organic natural oils"
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
    "pages": "Plate 41",
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
    "pages": "Plate 42",
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
    "pages": "Plate 43",
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
    "pages": "Plate 44",
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
    "pages": "Pages 86-87",
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
    "id": "collect-03",
    "title": "Sacred Lotus Heritage Seal & Emblem Carving",
    "category": "collectibles",
    "collection": "Collectibles",
    "tag": "Insignia",
    "material": "Solid Teakwood Relief",
    "finish": "Golden Ochre Hand Rub",
    "dimensions": "14\" H x 14\" W x 2\" D",
    "weight": "2.5 kg",
    "pages": "Pages 90-91",
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
