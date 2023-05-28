import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import NavBar from "./components/NavBar";
import Body from "./components/body";
import "./App.css";
import NavSection from "./navSection";
const App = () => {
  const app = useRef(null);
  useEffect(() => {
    gsap.to(app.current, { duration: 0, autoAlpha: 1 });
  });

  const [nav, setNav] = useState(false);
  return (
    <div className="app-container" ref={app}>
      <NavBar setNav={setNav} />
      {nav && <NavSection setNav={setNav} />}
      <Body />
    </div>
  );
};

export default App;
