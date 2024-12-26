import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Import images directly
import beefBurger from "../assets/images/beefBurger.png";
import beefPizza from "../assets/images/beefPizza.png";
import brownee from "../assets/images/brownee.png";
import burger from "../assets/images/burger.png";
import chickenFry from "../assets/images/chickenFry.png";
import friedricePlater from "../assets/images/friedricePlater.png";
import pizza from "../assets/images/pizza.png";
import stackwithsalad from "../assets/images/stackwithsalad.png";
import stackwithVegitable from "../assets/images/stackwithVegitable.png";
import { useState } from "react";

// Define the slides array
const slides = [
  { src: beefBurger, alt: "Beef Burger", width: 800, height: 600 },
  { src: beefPizza, alt: "Beef Pizza", width: 1000, height: 900 },
  { src: brownee, alt: "Brownie", width: 1000, height: 900 },
  { src: burger, alt: "Burger", width: 900, height: 900 },
  { src: chickenFry, alt: "Chicken Fry", width: 700, height: 900 },
  { src: friedricePlater, alt: "Fried Rice Platter", width: 1200, height: 900 },
  { src: pizza, alt: "pizza", width: 1100, height: 900 },
  { src: stackwithsalad, alt: "stackwithsalad", width: 700, height: 900 },
  { src: stackwithVegitable, alt: "stackwithVegitable", width: 1200, height: 900 },
  { src: beefPizza, alt: "Beef Pizza", width: 1000, height: 900 },
  { src: brownee, alt: "Brownie", width: 1000, height: 900 },
  { src: burger, alt: "Burger", width: 900, height: 900 },
  { src: chickenFry, alt: "Chicken Fry", width: 700, height: 900 },
  { src: friedricePlater, alt: "Fried Rice Platter", width: 1200, height: 900 },
  { src: pizza, alt: "pizza", width: 1100, height: 900 },
  { src: stackwithsalad, alt: "stackwithsalad", width: 700, height: 900 },
  { src: stackwithVegitable, alt: "stackwithVegitable", width: 1200, height: 900 },
  { src: beefPizza, alt: "Beef Pizza", width: 1000, height: 900 },
];

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const [auto, setAuto] = useState(false);

  return (
    <div className="bg-[#fef5ee]">
    <div className="">
        <span className='md:text-xl text-lg font-bold font-lobster text-red-600 pt-3 text-center block'>Gallary</span>
        <h2 className="md:text-2xl text-xl font-semibold text-black text-center mt-2 mb-1">Our Food Gallary</h2>
    </div>
      <div className="p-8">
        <RowsPhotoAlbum
            photos={slides}
            targetRowHeight={200}
            columns={(containerWidth) => {
                if (containerWidth < 600) return 2; // 2 columns for small screens
                if (containerWidth < 900) return 3; // 3 columns for medium screens
                return 4; // 4 columns for larger screens
            }}
            spacing={20} // Space between images
            onClick={({ index: current }) => setIndex(current)}
        />
      </div>

      <Lightbox
        index={index}
        fullscreen={{ auto }}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
};
export default Gallery;
