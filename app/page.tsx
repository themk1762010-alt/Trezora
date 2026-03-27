"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const products = [
    { section: "phones", name: "REALME NARZO 80 PRO 5G", price: "₹19999", rating: "4.3", reviews: "2.2K reviews", link: "https://amzn.to/3Pu5OV1", img: "https://m.media-amazon.com/images/I/51Y3grhyQ1L._SY300_SX300_QL70_FMwebp_.jpg" },
    { section: "laptops", name: "HP 15 13TH GEN i3", price: "₹45990", rating: "4.1", reviews: "2.2K reviews", link: "https://amzn.to/4t43Nx9", img: "https://m.media-amazon.com/images/I/617GQ0W6fxL._SL1500_.jpg" },
    { section: "speakers", name: "TRIBIT XSOUND GO", price: "₹2843", rating: "4.3", reviews: "18K reviews", link: "https://amzn.to/4bxkCec", img: "https://m.media-amazon.com/images/I/41mtPtOAkUL._SY300_SX300_QL70_FMwebp_.jpg" },
    { section: "tabs", name: "HONOR PAD X9", price: "₹15126", rating: "4.3", reviews: "1.8K reviews", link: "https://amzn.to/4dGv44g", img: "https://m.media-amazon.com/images/I/418DG-xeJYL._SY300_SX300_QL70_FMwebp_.jpg" },
    { section: "earbuds", name: "ONEPLUS NORD BUDS 3r", price: "₹1599", rating: "4.2", reviews: "40K reviews", link: "https://amzn.to/3NJisyH", img: "https://m.media-amazon.com/images/I/31UrMxaUxbL._SY300_SX300_QL70_FMwebp_.jpg" },
    { section: "smartwatch", name: "BOAT WAVE CALL 3", price: "₹1399", rating: "4.1", reviews: "25K reviews", link: "https://amzn.to/4c3MQgE", img: "https://m.media-amazon.com/images/I/41YgzJVIYTL._SY300_SX300_QL70_FMwebp_.jpg" },
    { section: "shoes", name: "U.S. POLO SHOES", price: "₹2199", rating: "4.4", reviews: "1K reviews", link: "https://amzn.to/4bwnyHX", img: "https://m.media-amazon.com/images/I/71Jqccq3+aL._SY575_.jpg" },
    { section: "watch", name: "TITAN WATCH", price: "₹1994", rating: "4.4", reviews: "1.4K reviews", link: "https://amzn.to/4t1w7Ae", img: "https://m.media-amazon.com/images/I/51ykbSj-eoL._SX679_.jpg" },
    { section: "trending", name: "HEALTHSENSE WEIGHT MACHINE", price: "₹699", rating: "4.1", reviews: "8.3K reviews", link: "https://amzn.to/3NnDq6o", img: "https://m.media-amazon.com/images/I/71VQ93ago8L._SL1500_.jpg" },
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

      {/* NAVBAR */}
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px" }}>
        
        {/* LEFT */}
        <div style={{ display: "flex", gap: "20px" }}>
          <button onClick={() => scrollTo("tech")}>TECH</button>
          <button onClick={() => scrollTo("lifestyle")}>LIFESTYLE</button>
          <button onClick={() => scrollTo("trending")}>TRENDING🔥</button>
        </div>

        {/* CENTER SEARCH */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          <input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "10px",
              width: "300px",
              textAlign: "center"
            } as any}
          />
        </div>

        {/* RIGHT */}
        <a href="mailto:themk1762010@gmail.com">
          <button style={{ padding: "8px 15px", background: "white", color: "black", borderRadius: "10px" }}>
            Contact Us
          </button>
        </a>

      </div>

      {/* TITLE */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1 style={{ fontWeight: "bold" }}>TREZORA</h1>
        <p>Only Deals Worth It.</p>
      </div>

      {/* TECH */}
      <div id="tech" style={{ padding: "20px" }}>
        <h2>TECH</h2>
        {renderSection("Phones", "phones")}
        {renderSection("Laptops", "laptops")}
        {renderSection("Speakers", "speakers")}
        {renderSection("Tablets", "tabs")}
        {renderSection("Earbuds", "earbuds")}
        {renderSection("Smartwatches", "smartwatch")}
      </div>

      {/* LIFESTYLE */}
      <div id="lifestyle" style={{ padding: "20px" }}>
        <h2>LIFESTYLE</h2>
        {renderSection("Shoes", "shoes")}
        {renderSection("Watches", "watch")}
      </div>

      {/* TRENDING */}
      <div id="trending" style={{ padding: "20px" }}>
        <h2>TRENDING🔥</h2>
        {renderSection("", "trending")}
      </div>

    </div>
  );
}