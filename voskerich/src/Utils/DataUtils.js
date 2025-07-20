export const jewelryData = [
  {
    id: 1,
    name: "Ոսկե մատանի ադամանդով",
    type: "ring",
    material: "gold",
    category: "gold",
    price: 450000,
    originalPrice: 500000,
    description: "Գեղեցիկ ոսկե մատանի բնական ադամանդով, կատարյալ նվեր ամուսնության համար",
    images: [
      "https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg",
      "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg"
    ],
    inStock: true,
    rating: 4.8,
    reviews: 24,
    specifications: {
      material: "18K ոսկի",
      stone: "Բնական ադամանդ",
      weight: "3.2գ",
      size: "Ունիվերսալ"
    }
  },
  {
    id: 2,
    name: "Արծաթե վզնոց մարգարիտով",
    type: "necklace",
    material: "silver",
    category: "silver",
    price: 85000,
    originalPrice: 95000,
    description: "Էլեգանտ արծաթե վզնոց բնական մարգարիտներով",
    images: [
      "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg",
      "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg"
    ],
    inStock: true,
    rating: 4.6,
    reviews: 18,
    specifications: {
      material: "925 արծաթ",
      stone: "Բնական մարգարիտ",
      length: "45սմ",
      weight: "12գ"
    }
  },
  {
    id: 3,
    name: "Ոսկե ականջօղեր",
    type: "earrings",
    material: "gold",
    category: "gold",
    price: 320000,
    description: "Նուրբ ոսկե ականջօղեր ամենօրյա կրելու համար",
    images: [
      "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg",
      "https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg"
    ],
    inStock: true,
    rating: 4.9,
    reviews: 31,
    specifications: {
      material: "14K ոսկի",
      weight: "2.1գ",
      type: "Կախովի",
      closure: "Անվտանգ փակում"
    }
  },
  {
    id: 4,
    name: "Արծաթե ապարանջան",
    type: "bracelet",
    material: "silver",
    category: "silver",
    price: 65000,
    description: "Գեղեցիկ արծաթե ապարանջան նուրբ զարդարանքով",
    images: [
      "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg",
      "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg"
    ],
    inStock: false,
    rating: 4.7,
    reviews: 12,
    specifications: {
      material: "925 արծաթ",
      length: "18սմ",
      weight: "8գ",
      adjustable: "Այո"
    }
  },
  {
    id: 5,
    name: "Բիժուտերիա վզնոց",
    type: "necklace",
    material: "bijouterie",
    category: "bijouterie",
    price: 15000,
    description: "Ոճային բիժուտերիա վզնոց ամենօրյա կրելու համար",
    images: [
      "https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg",
      "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg"
    ],
    inStock: true,
    rating: 4.3,
    reviews: 8,
    specifications: {
      material: "Մետաղական համաձուլվածք",
      coating: "Ոսկե ծածկույթ",
      length: "50սմ",
      adjustable: "Այո"
    }
  },
  {
    id: 6,
    name: "Ոսկե շղթա",
    type: "chain",
    material: "gold",
    category: "gold",
    price: 280000,
    description: "Ամուր ոսկե շղթա տղամարդկանց համար",
    images: [
      "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg",
      "https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg"
    ],
    inStock: true,
    rating: 4.8,
    reviews: 19,
    specifications: {
      material: "18K ոսկի",
      length: "55սմ",
      weight: "15գ",
      type: "Բիսմարկ"
    }
  }
];

export async function getGems() {
  await new Promise(resolve => setTimeout(resolve, 500));
  return jewelryData;
}

export async function getGemById(id) {
  await new Promise(resolve => setTimeout(resolve, 300));
  return jewelryData.find(item => item.id === parseInt(id));
}

export async function getGemsByCategory(category) {
  await new Promise(resolve => setTimeout(resolve, 400));
  return jewelryData.filter(item => item.category === category);
}

export function formatPrice(price) {
  return new Intl.NumberFormat('hy-AM', {
    style: 'currency',
    currency: 'AMD',
    minimumFractionDigits: 0
  }).format(price);
}

export function calculateDiscount(originalPrice, currentPrice) {
  if (!originalPrice || originalPrice <= currentPrice) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}