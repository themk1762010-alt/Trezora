"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const products = [

    // PHONES
    {
      section: "phones",
      name: "REALME NARZO 80 PRO 5G",
      price: "₹19999",
      rating: "4.3",
      reviews: "2.2K reviews",
      link: "https://amzn.to/3Pu5OV1",
      img: "https://m.media-amazon.com/images/I/51Y3grhyQ1L._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
      section: "phones",
      name: "iQOO Z10x 5G (6GB RAM, 128GB)",
      price: "₹16,998",
      rating: "4.4",
      reviews: "10K+ reviews",
      link: "https://amzn.to/4sMQZvp",
      img: "https://m.media-amazon.com/images/I/61oa+zoqwmL._SL1200_.jpg"
    },

    // LAPTOPS
    {
      section: "laptops",
      name: "HP 15 13TH GEN i3",
      price: "₹45990",
      rating: "4.1",
      reviews: "2.2K reviews",
      link: "https://amzn.to/4t43Nx9",
      img: "https://m.media-amazon.com/images/I/617GQ0W6fxL._SL1500_.jpg"
    },
    {
      section: "laptops",
      name: "Dell G15 i5 13th Gen RTX 3050 Gaming Laptop",
      price: "₹78,990",
      rating: "4.0",
      reviews: "1.4K reviews",
      link: "https://amzn.to/4cbslP2",
      img: "https://m.media-amazon.com/images/I/61ko2a0owDL._SL1080_.jpg"
    },

    // SPEAKERS
    {
      section: "speakers",
      name: "TRIBIT XSOUND GO",
      price: "₹2843",
      rating: "4.3",
      reviews: "18K reviews",
      link: "https://amzn.to/4bxkCec",
      img: "https://m.media-amazon.com/images/I/41mtPtOAkUL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
      section: "speakers",
      name: "JBL Go Essential Bluetooth Speaker",
      price: "₹1,499",
      rating: "4.6",
      reviews: "10K+ reviews",
      link: "https://amzn.to/3O67VxR",
      img: "https://m.media-amazon.com/images/I/71uji1ExbsL._SL1500_.jpg"
    },

    // TABLETS
    {
      section: "tabs",
      name: "HONOR PAD X9",
      price: "₹15126",
      rating: "4.3",
      reviews: "1.8K reviews",
      link: "https://amzn.to/4dGv44g",
      img: "https://m.media-amazon.com/images/I/418DG-xeJYL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
      section: "tabs",
      name: "OnePlus Pad Go (8GB RAM, 128GB)",
      price: "₹17,999",
      rating: "4.4",
      reviews: "1.9K reviews",
      link: "https://amzn.to/4uRqIxD",
      img: "https://m.media-amazon.com/images/I/513AOBO-8eL._SL1500_.jpg"
    },

    // EARBUDS
    {
      section: "earbuds",
      name: "ONEPLUS NORD BUDS 3r",
      price: "₹1599",
      rating: "4.2",
      reviews: "40K reviews",
      link: "https://amzn.to/3NJisyH",
      img: "https://m.media-amazon.com/images/I/31UrMxaUxbL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
      section: "earbuds",
      name: "GOBOLT x Mustang Wireless Earbuds",
      price: "₹1,799",
      rating: "4.0",
      reviews: "13K+ reviews",
      link: "https://amzn.to/4sJEvou",
      img: "https://m.media-amazon.com/images/I/71rbNPgK-RL._SL1500_.jpg"
    },

    // SMARTWATCH
    {
      section: "smartwatch",
      name: "BOAT WAVE CALL 3",
      price: "₹1399",
      rating: "4.1",
      reviews: "25K reviews",
      link: "https://amzn.to/4c3MQgE",
      img: "https://m.media-amazon.com/images/I/41YgzJVIYTL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
      section: "smartwatch",
      name: "Fire-Boltt Talk Round Smartwatch",
      price: "₹1,299",
      rating: "3.9",
      reviews: "59K reviews",
      link: "https://amzn.to/48eIm4q",
      img: "https://m.media-amazon.com/images/I/71tQv2EIRDL._SL1500_.jpg"
    },

    // SHOES
    {
      section: "shoes",
      name: "U.S. POLO SHOES",
      price: "₹2199",
      rating: "4.4",
      reviews: "1K reviews",
      link: "https://amzn.to/4bwnyHX",
      img: "https://m.media-amazon.com/images/I/71Jqccq3+aL._SY575_.jpg"
    },
    {
      section: "shoes",
      name: "U.S. Polo Assn Sneakers",
      price: "₹1,979",
      rating: "4.2",
      reviews: "8K+ reviews",
      link: "https://amzn.to/3PzaDwi",
      img: "https://m.media-amazon.com/images/I/61aSGGKkSwL._SY695_.jpg"
    },

    // WATCH (LIFESTYLE)
    {
      section: "watch",
      name: "TITAN WATCH",
      price: "₹1994",
      rating: "4.4",
      reviews: "1.4K reviews",
      link: "https://amzn.to/4t1w7Ae",
      img: "https://m.media-amazon.com/images/I/51ykbSj-eoL._SX679_.jpg"
    },

    // TRENDING
    {
      section: "trending",
      name: "HEALTHSENSE WEIGHT MACHINE",
      price: "₹699",
      rating: "4.1",
      reviews: "8.3K reviews",
      link: "https://amzn.to/3NnDq6o",
      img: "https://m.media-amazon.com/images/I/71VQ93ago8L._SL1500_.jpg"
    },
    {
      section: "trending",
      name: "Oddpod Under Table Hidden Drawer Organizer",
      price: "₹699",
      rating: "4.3",
      reviews: "374 reviews",
      link: "https://amzn.to/3Pyhh5X",
      img: "https://m.media-amazon.com/images/I/51fqvtAbpkL.jpg"
    }

  ];

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const card: any = {
    background: "#1c1c1c",
    padding: "15px",
    borderRadius: "12px",
    width: "220px",
  };

  const imgStyle: any = {
    width: "100%",
    height: "150px",
    objectFit: "contain",
    background: "white",
    borderRadius: "10px",
    marginBottom: "10px",
  };

  const dealBtn: any = {
    marginTop: "10px",
    width: "100%",
    background: "white",
    color: "black",
    padding: "10px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
  };

  const renderSection = (title: string, key: string) => (
    <>
      <h3 style={{ marginTop: "20px" }}>{title}</h3>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filtered.filter(p => p.section === key).map((p, i) => (
          <div key={i} style={card}>
            <img src={p.img} style={imgStyle} />
            <h4>{p.name}</h4>
            <p>{p.price}</p>
            <p>⭐ {p.rating} ({p.reviews})</p>
            <a href={p.link} target="_blank">
              <button style={dealBtn}>View Deal 🔥</button>
            </a>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div style={{ background: "#0d0d0d", color: "white", minHeight: "100vh", paddingBottom: "50px" }}>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>TREZORA</h1>
        <p>Only Deals Worth It.</p>
      </div>

      <div id="tech" style={{ padding: "20px" }}>
        <h2>TECH</h2>
        {renderSection("Phones", "phones")}
        {renderSection("Laptops", "laptops")}
        {renderSection("Speakers", "speakers")}
        {renderSection("Tablets", "tabs")}
        {renderSection("Earbuds", "earbuds")}
        {renderSection("Smartwatches", "smartwatch")}
      </div>

      <div id="lifestyle" style={{ padding: "20px" }}>
        <h2>LIFESTYLE</h2>
        {renderSection("Shoes", "shoes")}
        {renderSection("Watches", "watch")}
      </div>

      <div id="trending" style={{ padding: "20px" }}>
        <h2>TRENDING🔥</h2>
        {renderSection("", "trending")}
      </div>

    </div>
  );
}