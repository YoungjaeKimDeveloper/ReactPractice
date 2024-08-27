import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";

import CoreConcepts from "./components/CoreConcepts.jsx";
import Example from "./components/Example.jsx";

function App() {
  console.log("APP COMPONENT EXECUTING");

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Example />
      </main>
    </div>
  );
}

export default App;
