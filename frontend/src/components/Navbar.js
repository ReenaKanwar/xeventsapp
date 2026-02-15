import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  // ✅ Detect login automatically
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const isAdmin = user?.role === "admin";
  const isOrganizer = user?.role === "organizer";

  // ✅ Logout Function
  function handleLogout() {
    localStorage.clear();
    navigate("/events");
    window.location.reload();
  }

  return (
    <nav style={styles.nav}>
      {/* ✅ Cypress expects this exact text */}
      <h2 style={styles.logo}>The Social Hub</h2>

      <div style={styles.links}>
        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>

            {/* ✅ Admin Tabs */}
            {isAdmin && (
              <>
                <Link to="/admin">Admin</Link>
                <Link to="/organizer">Organizer</Link>
              </>
            )}

            {/* ✅ Organizer Tab */}
            {isOrganizer && !isAdmin && (
              <Link to="/organizer">Organizer</Link>
            )}

            {/* ✅ Cypress needs Logout text */}
            <button type="submit" style={styles.logoutBtn} onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    background: "#222",
    color: "gold",
  },
  logo: {
    margin: 0,
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  logoutBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "6px 14px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};
