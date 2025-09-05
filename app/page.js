"use client";

import { useEffect, useState } from "react";
import { api } from "./lib/api"; // zorg dat ./app/lib/api.js bestaat

export default function Page() {
  const [trackers, setTrackers] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const data = await api.get("/trackers");
      setTrackers(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function create() {
    if (!name.trim()) return;
    setLoading(true);
    setError("");
    try {
      await api.post("/trackers", { name });
      setName("");
      await load();
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Trackers</h1>

      <div style={{ margin: "12px 0" }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nieuwe tracker naam"
        />
        <button onClick={create} disabled={loading} style={{ marginLeft: 8 }}>
          Toevoegen
        </button>
      </div>

      {error && <p style={{ color: "crimson" }}>{error}</p>}
      {loading ? (
        <p>Laden…</p>
      ) : (
        <ul>
          {trackers.map((t) => (
            <li key={t.id}>
              {t.id} — {t.name}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}