import { useState } from "react";
// import { Link } from 'react-router-dom';

export function NavBar() {
  const [activeTab, setActiveTab] = useState("Home");
  // Tab items
  const tabs = ["Poletics", "World", "Economy", "Science&Tech","Business","Travel","Climate","lifeStyle","Food","Sport"];
  return (
    <nav className="flex space-x-4 p-2 bg-[#1A1A1A] text-white justify-between">
        <div className="pl-10">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-2 py-1 rounded ${
            activeTab === tab
              ? "bg-[#04594D] text-white"
              : ""
          }`}
        >
          {tab}
        </button>
      ))}
      </div>
      <button> 13:44 🌧 24🍳</button>
    </nav>
  );
}
