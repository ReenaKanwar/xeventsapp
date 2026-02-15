import React from "react";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div style={{ background: "#222", minHeight: "100vh" }}>
      
      {/* ✅ Navbar auto detects login */}
      <Navbar />

      {/* ✅ Cypress expects this exact text */}
      <h1 style={{ color: "gold", textAlign: "center", marginTop: "40px" }}>
        Welcome
      </h1>

      <h2 style={{ textAlign: "center", color: "white" }}>
        Your Registered Events
      </h2>
    </div>
  );
}
