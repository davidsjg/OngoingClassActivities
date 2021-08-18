import { any } from "prop-types";
import React from "react";

const GalleryContext = React.createContext({
  display: "",
  theme: "",
  onclick: () => undefined,
});

export default GalleryContext;
