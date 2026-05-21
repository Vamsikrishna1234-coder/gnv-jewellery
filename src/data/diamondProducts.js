// src/data/diamondProducts.js

import img1 from "../assets/images/dmnd bg.png";


import DR1 from "../assets/images/diamond/dr1.jpeg"
import DR2 from "../assets/images/diamond/dr2.jpeg"
import DR3 from "../assets/images/diamond/dr3.jpeg"
import DR4 from "../assets/images/diamond/dr4.jpeg"
import DR5 from "../assets/images/diamond/dr5.jpeg"
import DR6 from "../assets/images/diamond/dr6.jpeg"

import DM1 from "../assets/images/diamond/dm1.jpeg";
import DM2 from "../assets/images/diamond/dm2.jpeg";
import DM3 from "../assets/images/diamond/dm3.jpeg";
import DM4 from "../assets/images/diamond/dm4.jpeg";
import DM5 from "../assets/images/diamond/dm5.jpeg";
import DM6 from "../assets/images/diamond/dm6.jpeg";

import DN1 from "../assets/images/diamond/dn1.jpeg";
import DN2 from "../assets/images/diamond/dn2.jpeg";
import DN3 from "../assets/images/diamond/dn3.jpeg";
import DN4 from "../assets/images/diamond/dn4.jpeg";
import DN5 from "../assets/images/diamond/dn5.jpeg";
import DN6 from "../assets/images/diamond/dn6.jpeg";

const diamondProducts = [

  /* ================= RINGS ================= */
  { id: "diamond-101", category: "rings", name: "Diamond Solitaire Ring", weight: "5", price: 85000, image: DR1, purity: "18KT", makingCharges: "12%", description: "Elegant solitaire ring.", images: [img1,img1,img1]},
  { id: "diamond-102", category: "rings", name: "Cluster Diamond Ring", weight: "6", price: 92000, image: DR2, purity: "18KT", makingCharges: "13%", description: "Cluster design ring.", images: [img1,img1,img1]},
  { id: "diamond-103", category: "rings", name: "Minimal Diamond Ring", weight: "4", price: 65000, image: DR3, purity: "18KT", makingCharges: "11%", description: "Minimal ring.", images: [img1,img1,img1]},
  { id: "diamond-104", category: "rings", name: "Engagement Diamond Ring", weight: "5.5", price: 98000, image: DR4, purity: "18KT", makingCharges: "13%", description: "Engagement ring.", images: [img1,img1,img1]},
  { id: "diamond-105", category: "rings", name: "Floral Diamond Ring", weight: "6.2", price: 105000, image: DR5, purity: "18KT", makingCharges: "14%", description: "Floral design ring.", images: [img1,img1,img1]},
  { id: "diamond-106", category: "rings", name: "Vintage Diamond Ring", weight: "7", price: 120000, image: DR6, purity: "18KT", makingCharges: "15%", description: "Vintage style ring.", images: [img1,img1,img1]},

  /* ================= NECKLACES ================= */
  { id: "diamond-201", category: "necklaces", name: "Diamond Necklace Set", weight: "25", price: 320000, image: DN1, purity: "18KT", makingCharges: "15%", description: "Premium necklace set.", images: [img1,img1,img1]},
  { id: "diamond-202", category: "necklaces", name: "Light Diamond Necklace", weight: "18", price: 240000, image: DN2, purity: "18KT", makingCharges: "14%", description: "Lightweight necklace.", images: [img1,img1,img1]},
  { id: "diamond-203", category: "necklaces", name: "Designer Necklace", weight: "22", price: 280000, image: DN3, purity: "18KT", makingCharges: "15%", description: "Designer necklace.", images: [img1,img1,img1]},
  { id: "diamond-204", category: "necklaces", name: "Layered Necklace", weight: "20", price: 260000, image: DN4, purity: "18KT", makingCharges: "14%", description: "Layered style.", images: [img1,img1,img1]},
  { id: "diamond-205", category: "necklaces", name: "Short Necklace", weight: "15", price: 210000, image: DN5, purity: "18KT", makingCharges: "13%", description: "Short necklace.", images: [img1,img1,img1]},
  { id: "diamond-206", category: "necklaces", name: "Heavy Bridal Necklace", weight: "35", price: 420000, image: DN6, purity: "18KT", makingCharges: "16%", description: "Bridal necklace.", images: [img1,img1,img1]},

  /* ================= BANGLES ================= */
  { id: "diamond-301", category: "bangles", name: "Diamond Bangles", weight: "28", price: 300000, image: img1, purity: "18KT", makingCharges: "15%", description: "Classic bangles.", images: [img1,img1,img1]},
  { id: "diamond-302", category: "bangles", name: "Light Bangles", weight: "20", price: 230000, image: img1, purity: "18KT", makingCharges: "14%", description: "Light bangles.", images: [img1,img1,img1]},
  { id: "diamond-303", category: "bangles", name: "Designer Bangles", weight: "25", price: 270000, image: img1, purity: "18KT", makingCharges: "15%", description: "Designer bangles.", images: [img1,img1,img1]},
  { id: "diamond-304", category: "bangles", name: "Bridal Bangles", weight: "35", price: 390000, image: img1, purity: "18KT", makingCharges: "16%", description: "Bridal bangles.", images: [img1,img1,img1]},
  { id: "diamond-305", category: "bangles", name: "Thin Bangles", weight: "15", price: 180000, image: img1, purity: "18KT", makingCharges: "13%", description: "Thin bangles.", images: [img1,img1,img1]},
  { id: "diamond-306", category: "bangles", name: "Antique Bangles", weight: "30", price: 350000, image: img1, purity: "18KT", makingCharges: "15%", description: "Antique bangles.", images: [img1,img1,img1]},

  /* ================= MANGALSUTRA ================= */
  { id: "diamond-401", category: "mangalsutra", name: "Diamond Mangalsutra", weight: "18", price: 210000, image: DM1, purity: "18KT", makingCharges: "14%", description: "Elegant mangalsutra.", images: [img1,img1,img1]},
  { id: "diamond-402", category: "mangalsutra", name: "Short Mangalsutra", weight: "15", price: 180000, image: DM2, purity: "18KT", makingCharges: "13%", description: "Short design.", images: [img1,img1,img1]},
  { id: "diamond-403", category: "mangalsutra", name: "Long Mangalsutra", weight: "22", price: 250000, image: DM3, purity: "18KT", makingCharges: "14%", description: "Long design.", images: [img1,img1,img1]},
  { id: "diamond-404", category: "mangalsutra", name: "Modern Mangalsutra", weight: "17", price: 195000, image: DM4, purity: "18KT", makingCharges: "13%", description: "Modern style.", images: [img1,img1,img1]},
  { id: "diamond-405", category: "mangalsutra", name: "Minimal Mangalsutra", weight: "12", price: 150000, image: DM5, purity: "18KT", makingCharges: "12%", description: "Minimal design.", images: [img1,img1,img1]},
  { id: "diamond-406", category: "mangalsutra", name: "Bridal Mangalsutra", weight: "28", price: 320000, image: DM6, purity: "18KT", makingCharges: "15%", description: "Bridal design.", images: [img1,img1,img1]},


  /* ================= EARRINGS ================= */
  { id: "diamond-601", category: "earrings", name: "Diamond Studs", weight: "6", price: 75000, image: img1, purity: "18KT", makingCharges: "12%", description: "Stud earrings.", images: [img1,img1,img1]},
  { id: "diamond-602", category: "earrings", name: "Drop Earrings", weight: "8", price: 88000, image: img1, purity: "18KT", makingCharges: "13%", description: "Drop earrings.", images: [img1,img1,img1]},
  { id: "diamond-603", category: "earrings", name: "Hoop Earrings", weight: "7", price: 82000, image: img1, purity: "18KT", makingCharges: "12%", description: "Hoop earrings.", images: [img1,img1,img1]},
  { id: "diamond-604", category: "earrings", name: "Jhumka Earrings", weight: "10", price: 95000, image: img1, purity: "18KT", makingCharges: "14%", description: "Jhumka style.", images: [img1,img1,img1]},
  { id: "diamond-605", category: "earrings", name: "Designer Earrings", weight: "9", price: 90000, image: img1, purity: "18KT", makingCharges: "13%", description: "Designer earrings.", images: [img1,img1,img1]},
  { id: "diamond-606", category: "earrings", name: "Minimal Earrings", weight: "5", price: 68000, image: img1, purity: "18KT", makingCharges: "11%", description: "Minimal earrings.", images: [img1,img1,img1]},
];

export default diamondProducts;