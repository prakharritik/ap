import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

function App() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    return async () => {
      const res = await axios.get(
        "https://media-content.ccbp.in/website/react-assignment/resources.json"
      );
      setItems(res.data);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Tabs />
      <SearchBar />
      <Items />
    </div>
  );
}

export default App;
