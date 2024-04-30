import { useState } from "react";
import "./App.css";
import AllPages from "./components/AllPages";

function App() {
  return (
    <div className="h-auto w-screen bg-[#ffe0c3] text-black font-semibold flex justify-center items-center overflow-x-hidden flex-col">
      <AllPages />
    </div>
  );
}

export default App;
