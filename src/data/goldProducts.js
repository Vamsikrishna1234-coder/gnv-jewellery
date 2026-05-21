
import img1 from "../assets/images/jewel image.jpg";
import N1 from "../assets/images/gold/royalgoldneck.jpeg"
import N2 from "../assets/images/gold/classicneck.jpeg"
import N3 from "../assets/images/gold/tempneck.jpeg"
import N4 from "../assets/images/gold/shortneck.jpeg"
import N5 from "../assets/images/gold/designneck.jpeg"
import N6 from "../assets/images/gold/bridalneck.png"

import B1 from "../assets/images/gold/b2.jpeg"
import B2 from "../assets/images/gold/b1.jpeg"
import B3 from "../assets/images/gold/b3.jpeg"
import B4 from "../assets/images/gold/b5.jpeg"
import B5 from "../assets/images/gold/b6.jpeg"
import B6 from "../assets/images/gold/b4.jpeg"


import E1 from "../assets/images/gold/ear1.jpeg";
import E2 from "../assets/images/gold/ear2.jpeg";
import E3 from "../assets/images/gold/ear3.jpeg";
import E4 from "../assets/images/gold/ear4.jpeg";
import E5 from "../assets/images/gold/ear5.jpeg";
import E6 from "../assets/images/gold/ear6.jpeg";

import R1 from "../assets/images/gold/r1.jpeg"
import R2 from "../assets/images/gold/r2.jpeg"
import R3 from "../assets/images/gold/r3.jpeg"
import R4 from "../assets/images/gold/r4.jpeg"
import R5 from "../assets/images/gold/r5.jpeg"
import R6 from "../assets/images/gold/r6.jpeg"

import C1 from "../assets/images/gold/gchain1.jpeg"
import C2 from "../assets/images/gold/gchain2.jpeg"
import C3 from "../assets/images/gold/gchain3.jpeg"
import C4 from "../assets/images/gold/gchain4.jpeg"
import C5 from "../assets/images/gold/gchain5.jpeg"
import C6 from "../assets/images/gold/gchain6.jpeg"


const goldProducts = [

  /* ================= NECKLACES ================= */
  {
    id: "gold-101",
    category: "necklace",
    name: "Royal Gold Necklace",
    weight: "32.5",
    metal: "Gold",
    price: 245000,
    image: N1,
    purity: "22KT",
    makingCharges: "12%",
    description: "Bridal necklace with premium detailing.",
    images: [N1, N1, N1]
  },
  {
    id: "gold-102",
    category: "necklace",
    name: "Classic Layer Necklace",
    metal: "Gold",
    weight: "28",
    price: 212000,
    image: N2,
    purity: "22KT",
    makingCharges: "11%",
    description: "Layered festive necklace.",
    images: [N2, N2, N2]
  },
  {
    id: "gold-103",
    category: "necklace",
    name: "Temple Necklace",
    metal: "Gold",
    weight: "40",
    price: 310000,
    image: N3,
    purity: "22KT",
    makingCharges: "14%",
    description: "Temple style heavy necklace.",
    images: [N3, N3, N3]
  },
  {
    id: "gold-104",
    category: "necklace",
    name: "Short Gold Necklace",
    metal: "Gold",
    weight: "20",
    price: 150000,
    image: N4,
    purity: "22KT",
    makingCharges: "10%",
    description: "Short elegant necklace.",
    images: [N4, N4, N4]
  },
  {
    id: "gold-105",
    category: "necklace",
    name: "Designer Necklace",
    metal: "Gold",
    weight: "26",
    price: 198000,
    image: N5,
    purity: "22KT",
    makingCharges: "12%",
    description: "Modern designer necklace.",
    images: [N5, N5, N5]
  },
  {
    id: "gold-106",
    category: "necklace",
    name: "Bridal Gold Set Necklace",
    metal: "Gold",
    weight: "50",
    price: 385000,
    image: N6,
    purity: "22KT",
    makingCharges: "15%",
    description: "Heavy bridal necklace.",
    images: [N6, N6, N6]
  },

  /* ================= RINGS ================= */
  {
    id: "gold-201",
    category: "rings",
    name: "Peacock Heritage Ring",
    metal: "Gold",
    weight: "5",
    price: 39000,
    image: R1,
    purity: "22KT",
    makingCharges: "10%",
    description: "Stylish modern ring.",
    images: [R1,R1,R1]
  },
  {
    id: "gold-202",
    category: "rings",
    name: "Divine Temple Ring",
    metal: "Gold",
    weight: "4",
    price: 32000,
    image: R2,
    purity: "22KT",
    makingCharges: "10%",
    description: "Floral gold ring.",
    images: [R2,R2,R2]
  },
  {
    id: "gold-203",
    category: "rings",
    name: "Lord Idol Rings",
    metal: "Gold",
    weight: "6",
    price: 45000,
    image: R3,
    purity: "22KT",
    makingCharges: "9%",
    description: "Simple band ring.",
    images: [R3, R3, R3]
  },
  {
    id: "gold-204",
    category: "rings",
    name: "Royal Dome Ring",
    metal: "Gold",
    weight: "5.5",
    price: 41000,
    image: R4,
    purity: "22KT",
    makingCharges: "10%",
    description: "Elegant engagement ring.",
    images: [R4, R4, R4]
  },
  {
    id: "gold-205",
    category: "rings",
    name: "Ruby Statement Ring Set",
    metal: "Gold",
    weight: "6.2",
    price: 48000,
    image: R5,
    purity: "22KT",
    makingCharges: "11%",
    description: "Ring with stone design.",
    images: [R5, R5, R5]
  },
  {
    id: "gold-206",
    category: "rings",
    name: "Floral Pink Stone Ring",
    metal: "Gold",
    weight: "3.5",
    price: 28000,
    image: R6,
    purity: "22KT",
    makingCharges: "8%",
    description: "Minimal daily wear ring.",
    images: [R6, R6, R6]
  },

  /* ================= BANGLES ================= */
  {
    id: "gold-301",
    category: "bangles",
    name: "Traditional Bangles",
    metal: "Gold",
    weight: "38",
    price: 120000,
    image: B1,
    purity: "22KT",
    makingCharges: "13%",
    description: "Traditional gold bangles.",
    images: [B1, B1, B1]
  },
  {
    id: "gold-302",
    category: "bangles",
    name: "Lightweight Bangles",
    metal: "Gold",
    weight: "18",
    price: 80000,
    image: B2,
    purity: "22KT",
    makingCharges: "11%",
    description: "Daily wear bangles.",
    images: [B2, B2, B2]
  },
  {
    id: "gold-303",
    category: "bangles",
    name: "Designer Bangles",
    metal: "Gold",
    weight: "25",
    price: 90000,
    image: B3,
    purity: "22KT",
    makingCharges: "12%",
    description: "Designer bangles.",
    images: [B3, B3, B3]
  },
  {
    id: "gold-304",
    category: "bangles",
    name: "Bridal Bangles",
    metal: "Gold",
    weight: "45",
    price: 70000,
    image: B4,
    purity: "22KT",
    makingCharges: "15%",
    description: "Heavy bridal bangles.",
    images: [B4, B4, B4]
  },
  {
    id: "gold-305",
    category: "bangles",
    name: "Thin Bangles",
    metal: "Gold",
    weight: "12",
    price: 92000,
    image: B5,
    purity: "22KT",
    makingCharges: "9%",
    description: "Slim bangles.",
    images: [B5, B5, B5]
  },
  {
    id: "gold-306",
    category: "bangles",
    name: "Antique Bangles",
    metal: "Gold",
    weight: "30",
    price: 120000,
    image: B6,
    purity: "22KT",
    makingCharges: "13%",
    description: "Antique finish bangles.",
    images: [B6, B6, B6]
  },

  /* ================= CHAINS ================= */
  {
    id: "gold-401",
    category: "chains",
    name: "Classic Chain",
    metal: "Gold",
    weight: "16",
    price: 119000,
    image: C1,
    purity: "22KT",
    makingCharges: "9%",
    description: "Classic gold chain.",
    images: [C1, C1, C1]
  },
  {
    id: "gold-402",
    category: "chains",
    name: "Box Chain",
    metal: "Gold",
    weight: "18",
    price: 135000,
    image: C2,
    purity: "22KT",
    makingCharges: "10%",
    description: "Box design chain.",
    images: [C2, C2, C2]
  },
  {
    id: "gold-403",
    category: "chains",
    name: "Rope Chain",
    metal: "Gold",
    weight: "20",
    price: 150000,
    image: C3,
    purity: "22KT",
    makingCharges: "11%",
    description: "Rope style chain.",
    images: [C3, C3, C3]
  },
  {
    id: "gold-404",
    category: "chains",
    name: "Flat Chain",
    metal: "Gold",
    weight: "14",
    price: 105000,
    image: C4,
    purity: "22KT",
    makingCharges: "9%",
    description: "Flat design chain.",
    images: [C4, C4, C4]
  },
  {
    id: "gold-405",
    category: "chains",
    name: "Fancy Chain",  
    metal: "Gold",
    weight: "22",
    price: 165000,
    image: C5,
    purity: "22KT",
    makingCharges: "12%",
    description: "Fancy stylish chain.",
    images: [C5, C5, C5]
  },
  {
    id: "gold-406",
    category: "chains",
    name: "Heavy Chain",
    metal: "Gold",
    weight: "30",
    price: 225000,
    image: C6,
    purity: "22KT",
    makingCharges: "13%",
    description: "Heavy premium chain.",
    images: [C6, C6, C6]
  },

  /* ================= BRACELETS ================= */
  // {
  //   id: "gold-501",
  //   category: "Earrings",
  //   name: "Gold Earrings",
  //   metal: "Gold",
  //   weight: "14",
  //   price: 110000,
  //   image: img1,
  //   purity: "22KT",
  //   makingCharges: "10%",
  //   description: "Premium bracelet.",
  //   images: [img1, img1, img1]
  // },
  // {
  //   id: "gold-502",
  //   category: "bracelets",
  //   name: "Charm Bracelet",
  //   metal: "Gold",
  //   weight: "12",
  //   price: 95000,
  //   image: img1,
  //   purity: "22KT",
  //   makingCharges: "9%",
  //   description: "Charm bracelet.",
  //   images: [img1, img1, img1]
  // },
  // {
  //   id: "gold-503",
  //   category: "bracelets",
  //   name: "Men Bracelet",
  //   metal: "Gold",
  //   weight: "18",
  //   price: 140000,
  //   image: img1,
  //   purity: "22KT",
  //   makingCharges: "11%",
  //   description: "Bold men bracelet.",
  //   images: [img1, img1, img1]
  // },
  // {
  //   id: "gold-504",
  //   category: "bracelets",
  //   name: "Thin Bracelet",
  //   metal: "Gold",
  //   weight: "10",
  //   price: 78000,
  //   image: img1,
  //   purity: "22KT",
  //   makingCharges: "8%",
  //   description: "Slim bracelet.",
  //   images: [img1, img1, img1]
  // },
  // {
  //   id: "gold-505",
  //   category: "bracelets",
  //   name: "Designer Bracelet",
  //   metal: "Gold",
  //   weight: "16",
  //   price: 125000,
  //   image: img1,
  //   purity: "22KT",
  //   makingCharges: "10%",
  //   description: "Designer bracelet.",
  //   images: [img1, img1, img1]
  // },
  // {
  //   id: "gold-506",
  //   category: "bracelets",
  //   metal: "Gold",
  //   name: "Antique Bracelet",
  //   weight: "20",
  //   price: 155000,
  //   image: img1,
  //   purity: "22KT",
  //   makingCharges: "12%",
  //   description: "Antique finish bracelet.",
  //   images: [img1, img1, img1]
  // }

  {
    id: "gold-501",
    category: "Earrings",
    name: "Royal Temple Jhumkas",
    metal: "Gold",
    weight: "14",
    price: 110000,
    image: E1,
    purity: "22KT",
    makingCharges: "10%",
    description: "Premium gold stud earrings.",
    images: [E1,E1,E1]
  },
  {
    id: "gold-502",
    category: "Earrings",
    name: "Traditional Layer Drop Earrings",
    metal: "Gold",
    weight: "12",
    price: 95000,
    image: E2,
    purity: "22KT",
    makingCharges: "9%",
    description: "Elegant charm earrings.",
    images: [E2,E2,E2]
  },
  {
    id: "gold-503",
    category: "Earrings",
    name: "Bridal Chandbali Earrings",
    metal: "Gold",
    weight: "18",
    price: 140000,
    image: E3,
    purity: "22KT",
    makingCharges: "11%",
    description: "Bold men gold earrings.",
    images: [E3,E3,E3]
  },
  {
    id: "gold-504",
    category: "Earrings",
    name: "Floral Hanging Earrings",
    metal: "Gold",
    weight: "10",
    price: 78000,
    image: E4,
    purity: "22KT",
    makingCharges: "8%",
    description: "Slim gold earrings.",
    images: [E4,E4,E4]
  },
  {
    id: "gold-505",
    category: "Earrings",
    name: "Antique Temple Jhumkas",
    metal: "Gold",
    weight: "16",
    price: 125000,
    image: E5,
    purity: "22KT",
    makingCharges: "10%",
    description: "Designer gold earrings.",
    images: [E5,E5,E5]
  },
  {
    id: "gold-506",
    category: "Earrings",
    metal: "Gold",
    name: "Designer Filigree Earrings",
    weight: "20",
    price: 155000,
    image: E6,
    purity: "22KT",
    makingCharges: "12%",
    description: "Antique finish gold earrings.",
    images: [E6,E6,E6]
  }

];

export default goldProducts;