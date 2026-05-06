const products = [
  {
    id: 1,
    name: "Royal Diamond Necklace Set",
    category: "Diamond",
    price: 85000,
    image: "assets/images/placeholder.jpg",
    description: "An exquisite diamond necklace set featuring premium cut diamonds set in 18k white gold. Perfect for weddings and grand celebrations.",
    material: "18k White Gold, Natural Diamonds",
    weight: "45.5g",
    availability: "In Stock"
  },
  {
    id: 2,
    name: "Classic Gold Bridal Haram",
    category: "Gold",
    price: 145000,
    image: "assets/images/placeholder.jpg",
    description: "Traditional long gold haram crafted with intricate detailing, featuring auspicious motifs and a grand pendant.",
    material: "22k Yellow Gold",
    weight: "85.2g",
    availability: "In Stock"
  },
  {
    id: 3,
    name: "Emerald Kundan Choker",
    category: "Kundan",
    price: 72000,
    image: "assets/images/placeholder.jpg",
    description: "A stunning choker featuring rich green emeralds and uncut diamonds in traditional kundan setting.",
    material: "22k Gold, Emeralds, Uncut Diamonds",
    weight: "52.0g",
    availability: "Made to Order"
  },
  {
    id: 4,
    name: "Antique Gold Bangles",
    category: "Bangles",
    price: 58000,
    image: "assets/images/placeholder.jpg",
    description: "A pair of antique finished gold bangles with intricate temple jewellery design elements.",
    material: "22k Antique Gold",
    weight: "36.5g",
    availability: "In Stock"
  },
  {
    id: 5,
    name: "Diamond Drop Earrings",
    category: "Earrings",
    price: 42000,
    image: "assets/images/placeholder.jpg",
    description: "Elegant diamond drop earrings that add a touch of sparkle to your everyday or evening look.",
    material: "18k White Gold, Diamonds",
    weight: "8.5g",
    availability: "In Stock"
  },
  {
    id: 6,
    name: "Ruby Bridal Necklace",
    category: "Bridal",
    price: 125000,
    image: "assets/images/placeholder.jpg",
    description: "A magnificent bridal necklace adorned with radiant rubies and classic gold craftsmanship.",
    material: "22k Gold, Natural Rubies",
    weight: "72.0g",
    availability: "In Stock"
  },
  {
    id: 7,
    name: "Gold Temple Necklace",
    category: "Gold",
    price: 96000,
    image: "assets/images/placeholder.jpg",
    description: "Divine temple jewellery necklace featuring Goddess Lakshmi motifs and gold beads.",
    material: "22k Yellow Gold",
    weight: "60.0g",
    availability: "In Stock"
  },
  {
    id: 8,
    name: "Kundan Bridal Set",
    category: "Kundan",
    price: 110000,
    image: "assets/images/placeholder.jpg",
    description: "Complete kundan bridal set including necklace, earrings, and maang tikka with meenakari work.",
    material: "22k Gold, Kundan, Pearls",
    weight: "88.5g",
    availability: "In Stock"
  },
  {
    id: 9,
    name: "Diamond Pendant Chain",
    category: "Diamond",
    price: 48000,
    image: "assets/images/placeholder.jpg",
    description: "A delicate gold chain with a brilliant floral diamond pendant.",
    material: "18k Gold, Diamonds",
    weight: "12.0g",
    availability: "In Stock"
  },
  {
    id: 10,
    name: "Traditional Gold Jhumkas",
    category: "Earrings",
    price: 36000,
    image: "assets/images/placeholder.jpg",
    description: "Classic gold jhumkas with intricate filigree work and gold drops.",
    material: "22k Yellow Gold",
    weight: "22.5g",
    availability: "In Stock"
  },
  {
    id: 11,
    name: "Polki Necklace Set",
    category: "Bridal",
    price: 135000,
    image: "assets/images/placeholder.jpg",
    description: "A royal polki uncut diamond necklace set perfect for the modern bride.",
    material: "22k Gold, Polki Diamonds",
    weight: "75.0g",
    availability: "Made to Order"
  },
  {
    id: 12,
    name: "Gold Daily Wear Chain",
    category: "Gold",
    price: 32000,
    image: "assets/images/placeholder.jpg",
    description: "A sturdy and stylish gold chain suitable for everyday wear.",
    material: "22k Yellow Gold",
    weight: "20.0g",
    availability: "In Stock"
  },
  {
    id: 13,
    name: "Diamond Ring",
    category: "Rings",
    price: 28000,
    image: "assets/images/placeholder.jpg",
    description: "A beautiful solitaire diamond ring set in a modern gold band.",
    material: "18k Gold, Solitaire Diamond",
    weight: "4.5g",
    availability: "In Stock"
  },
  {
    id: 14,
    name: "Ruby Stone Bangles",
    category: "Bangles",
    price: 64000,
    image: "assets/images/placeholder.jpg",
    description: "Vibrant ruby stone bangles crafted in gold for festive occasions.",
    material: "22k Gold, Rubies",
    weight: "40.0g",
    availability: "In Stock"
  },
  {
    id: 15,
    name: "Pearl Kundan Earrings",
    category: "Kundan",
    price: 30000,
    image: "assets/images/placeholder.jpg",
    description: "Elegant kundan earrings with beautiful freshwater pearl drops.",
    material: "22k Gold, Kundan, Pearls",
    weight: "18.0g",
    availability: "In Stock"
  },
  {
    id: 16,
    name: "Bridal Long Haram",
    category: "Bridal",
    price: 160000,
    image: "assets/images/placeholder.jpg",
    description: "An extraordinary long haram showcasing impeccable craftsmanship and grandeur.",
    material: "22k Gold",
    weight: "95.0g",
    availability: "Made to Order"
  },
  {
    id: 17,
    name: "Gold Lakshmi Pendant",
    category: "Gold",
    price: 40000,
    image: "assets/images/placeholder.jpg",
    description: "A finely crafted pendant featuring Goddess Lakshmi, a symbol of prosperity.",
    material: "22k Yellow Gold",
    weight: "25.0g",
    availability: "In Stock"
  },
  {
    id: 18,
    name: "Diamond Bracelet",
    category: "Diamond",
    price: 55000,
    image: "assets/images/placeholder.jpg",
    description: "A sleek and elegant diamond tennis bracelet for a touch of luxury.",
    material: "18k White Gold, Diamonds",
    weight: "15.0g",
    availability: "In Stock"
  },
  {
    id: 19,
    name: "Antique Nakshi Necklace",
    category: "Gold",
    price: 88000,
    image: "assets/images/placeholder.jpg",
    description: "A beautiful necklace featuring traditional nakshi work with an antique finish.",
    material: "22k Antique Gold",
    weight: "55.0g",
    availability: "In Stock"
  },
  {
    id: 20,
    name: "Premium Wedding Jewellery Set",
    category: "Bridal",
    price: 195000,
    image: "assets/images/placeholder.jpg",
    description: "The ultimate wedding set comprising a choker, long haram, earrings, and bangles.",
    material: "22k Gold, Mixed Stones",
    weight: "120.0g",
    availability: "Made to Order"
  }
];

// Utility to format price in INR
function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}
