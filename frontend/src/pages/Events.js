import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Events() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/events`
      );

      setEvents(res.data);
    } catch (error) {
      console.log("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div style={{ background: "#222", minHeight: "100vh" }}>
      <Navbar />

      <h1 style={{ textAlign: "center", color: "gold" }}>
        Explore Events
      </h1>

      <div style={styles.searchRow}>
        <input name="search" placeholder="Search events..." />
        <input name="type" placeholder="Event type (e.g. Music)" />
        <input name="location" placeholder="Location" />

        <select name="sort">
          <option>Sort by Newest</option>
        </select>

        <button type="submit">Search</button>
      </div>

      {events.length === 0 ? (
        <p style={{ textAlign: "center", color: "white" }}>
          No events found...
        </p>
      ) : (
        events.map((event) => (
          <div key={event._id} style={styles.card}>
            <img
              src={event.image || "https://via.placeholder.com/400x200"}
              alt="event"
              style={styles.image}
            />

            <h2 style={{ color: "gold" }}>{event.title}</h2>

            <p style={{ fontSize: "14px" }}>
              {event.location}
            </p>

            <p
              style={{
                color: "lightgreen",
                fontWeight: "bold",
              }}
            >
              Upcoming
            </p>
          </div>
        ))
      )}
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
