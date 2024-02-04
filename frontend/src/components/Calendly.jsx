import React, { useEffect } from "react";

const Calendly = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js",
    );
    head.appendChild(script);

    script.addEventListener("load", () => {
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/musfiqdehan/30min",
        parentElement: document.getElementById("calendly-embed"),
      });
    });

    return () => {
      head.removeChild(script);
    };
  }, []);

  return (
    <div id="calendly-embed" style={{ minWidth: "320px", height: "700px" }} />
  );
};

export default Calendly;
