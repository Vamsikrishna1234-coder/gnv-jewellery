// src/data/coinsProducts.js

import img1 from "../assets/images/coins bg.png";

import GC1 from "../assets/images/coins/gc1.png"
import GC2 from "../assets/images/coins/gc2.png"
import GC3 from "../assets/images/coins/gc3.png"
import GC4 from "../assets/images/coins/gc4.png"
import GC5 from "../assets/images/coins/gc5.png"
import GC6 from "../assets/images/coins/gc6.png"

import SC1 from "../assets/images/silver/sc1.png"
import SC2 from "../assets/images/silver/sc2.png"
import SC3 from "../assets/images/silver/sc3.png"
import SC4 from "../assets/images/silver/sc4.png"
import SC5 from "../assets/images/silver/sc5.png"
import SC6 from "../assets/images/silver/sc6.png"

const coinsProducts = [

  /* ================= GOLD COINS ================= */
  { id: "gold-coin-101", category: "gold-coins", name: "Gold Coin 10g", weight: "1", price: 6500, image: GC1, purity: "24KT", makingCharges: "5%", description: "1g gold coin.", images: [GC1,GC1,GC1]},
  { id: "gold-coin-102", category: "gold-coins", name: "Gold Coin 20g", weight: "2", price: 13000, image: GC2, purity: "24KT", makingCharges: "5%", description: "2g gold coin.", images: [GC2,GC2,GC2]},
  { id: "gold-coin-103", category: "gold-coins", name: "Gold Coin 30g", weight: "5", price: 32000, image: GC3, purity: "24KT", makingCharges: "5%", description: "5g gold coin.", images: [GC3,GC3,GC3]},
  { id: "gold-coin-104", category: "gold-coins", name: "Sarswathidevi gold coin", weight: "10", price: 64000, image: GC4, purity: "24KT", makingCharges: "5%", description: "10g gold coin.", images: [GC4,GC4,GC4]},
  { id: "gold-coin-105", category: "gold-coins", name: "Lakshmi Gold Coin", weight: "8", price: 52000, image: GC5, purity: "24KT", makingCharges: "6%", description: "Lakshmi coin.", images: [GC5,GC5,GC5]},
  { id: "gold-coin-106", category: "gold-coins", name: "Ganesha Gold Coin", weight: "8", price: 53000, image: GC6, purity: "24KT", makingCharges: "6%", description: "Ganesha coin.", images: [GC6,GC6,GC6]},


  /* ================= COINS ================= */
      { id: "silver-coin-201", category: "silver-coins", name: "Silver Coin 10g", weight: "10", price: 1350, image: SC1, purity: "99.9", makingCharges: "5%", description: "10g silver coin.", images: [SC1,SC1.SC1]},
      { id: "silver-coin-202", category: "silver-coins", name: "Silver Coin 20g", weight: "20", price: 2600, image: SC2, purity: "99.9", makingCharges: "5%", description: "20g silver coin.", images: [SC2,SC2,SC2]},
      { id: "silver-coin-203", category: "silver-coins", name: "Silver Coin 50g", weight: "50", price: 6200, image: SC3, purity: "99.9", makingCharges: "5%", description: "50g silver coin.", images: [SC3,SC3,SC3]},
      { id: "silver-coin-204", category: "silver-coins", name: "Saraswathidevi Silver coin", weight: "100", price: 12000, image: SC4, purity: "99.9", makingCharges: "5%", description: "100g silver coin.", images: [SC4,SC4,SC4]},
      { id: "silver-coin-205", category: "silver-coins", name: "Lakshmi Silver Coin", weight: "15", price: 2000, image: SC5, purity: "99.9", makingCharges: "6%", description: "Lakshmi design coin.", images: [SC5,SC5,SC5]},
      { id: "silver-coin-206", category: "silver-coins", name: "Ganesha Silver Coin", weight: "15", price: 2100, image: SC6, purity: "99.9", makingCharges: "6%", description: "Ganesha design coin.", images: [SC6,SC6,SC6]},

];

export default coinsProducts;