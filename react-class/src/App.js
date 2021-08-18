import React from "react";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import GalleryContext from "./utils/GalleryContext";

function App() {
  const [galleryState, setGalleryState] = useState({
    display: false,
    theme: "success",
    onClick: (theme, display) => {
      // Remember, the setter method on state does not merge like this.setState does
      // We use the spread operator so that we don't lose our onClick method whenever the state is updated.
      setGalleryState({ ...galleryState, theme, display });
    },
  });
  return (
    <div>
      <GalleryContext.Provider value={galleryState}>
        <Navbar />
        <Wrapper>
          <Gallery />
        </Wrapper>
        <Footer />
      </GalleryContext.Provider>
    </div>
  );
}

export default App;
