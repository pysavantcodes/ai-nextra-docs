import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import logo from "./images/img.png";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {" "}
      <img
        src="https://github.com/pysavantcodes/portfolio/blob/main/img.png?raw=true"
        alt=""
        style={{ width: "30px", height: "30px", borderRadius: "30px" }}
      />{" "}
      Comfy Creator
    </div>
  ),
  // navbar: { component: <></> },
  project: {
    link: "https://github.com/comfy-creator/comfy-creator-docs/tree/main/",
  },
  docsRepositoryBase:
    "https://github.com/comfy-creator/comfy-creator-docs/tree/main/",
  footer: {
    text: "Comfy Creator Docs",
  },
  primaryHue: {
    dark: 273,
    light: 273,
  },
};

export default config;
