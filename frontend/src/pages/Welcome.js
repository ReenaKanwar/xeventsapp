import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Welcome to <span style={styles.brand}>The Social Hub</span>
      </h1>

      <p style={styles.subtitle}>
        Your one-stop hub for <b>exciting events</b> — meet, explore, and
        experience like never before!
      </p>

      {/* ✅ Cypress needs this exact text */}
      <button style={styles.button} onClick={() => navigate("/events")}>
        Explore Events
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#111",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px",
    textAlign: "center",
    padding: "20px",
  },

  heading: {
    fontSize: "42px",
    fontWeight: "bold",
  },

  brand: {
    color: "gold",
  },

  subtitle: {
    maxWidth: "600px",
    fontSize: "18px",
    lineHeight: "28px",
    color: "#ccc",
  },

  button: {
    padding: "12px 28px",
    fontSize: "16px",
    fontWeight: "bold",
    background: "gold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
