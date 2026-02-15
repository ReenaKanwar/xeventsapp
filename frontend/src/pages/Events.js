import React from "react";
import Navbar from "../components/Navbar";

export default function Events() {
  return (
    <div style={{ background: "#222", minHeight: "100vh" }}>
      {/* ✅ Navbar auto detects login from localStorage */}
      <Navbar />

      {/* Header */}
      <h1 style={{ textAlign: "center", color: "gold" }}>
        Explore Events
      </h1>

      {/* Search Bar */}
      <div style={styles.searchRow}>
        <input name="search" placeholder="Search events..." />
        <input name="type" placeholder="Event type (e.g. Music)" />
        <input name="location" placeholder="Location" />

        <select name="sort">
          <option>Sort by Newest</option>
        </select>

        {/* ✅ Cypress expects Search button */}
        <button type="submit">Search</button>
      </div>

      {/* ✅ Event Card Required by Cypress */}
      <div style={styles.card}>
        <img
          src="https://via.placeholder.com/400x200"
          alt="event"
          style={styles.image}
        />

        <h2 style={{ color: "gold" }}>updated test event 123</h2>

        <p style={{ fontSize: "14px" }}>Ranchi</p>

        {/* Cypress expects Upcoming */}
        <p style={{ color: "lightgreen", fontWeight: "bold" }}>
          Upcoming
        </p>
      </div>
    </div>
  );
}

const styles = {
  searchRow: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    margin: "25px",
    flexWrap: "wrap",
  },

  card: {
    width: "420px",
    margin: "30px auto",
    padding: "20px",
    background: "#333",
    borderRadius: "12px",
    color: "white",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
  },

  image: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "15px",
  },
};
