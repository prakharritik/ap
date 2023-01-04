import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeClass, setActiveClass] = useState("Resources");
  const [search, setSearch] = useState("");
  let filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  if (activeClass !== "Resources") {
    filteredItems = filteredItems.filter(
      (item) => item.tag + "s" === activeClass.toLowerCase()
    );
  }
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://media-content.ccbp.in/website/react-assignment/resources.json"
      );
      setItems(res.data);

      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Tabs activeClass={activeClass} setActiveClass={setActiveClass} />
      <SearchBar search={search} setSearch={setSearch} />
      {loading ? <h2>Loading...</h2> : <Items items={filteredItems} />}
    </div>
  );
}

export default App;
