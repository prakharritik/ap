import React from "react";
import "./tabs.css";

const Tabs = () => {
  return (
    <div class="tab">
      <button class="tablinks" onclick="openCity(event, 'London')">
        Resources
      </button>
      <button class="tablinks" onclick="openCity(event, 'Paris')">
        Requests
      </button>
      <button class="tablinks" onclick="openCity(event, 'Tokyo')">
        Users
      </button>
    </div>
  );
};

export default Tabs;
