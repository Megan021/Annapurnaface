import React from "react";
import GalleryBanner from "../components/ForGallery/GalleryBanner";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Gallery = () => {
  const images = [
    "/images/ForGallery/gallery1.jpg",
    "/images/ForGallery/gallery2.jpg",
    "/images/ForGallery/gallery3.jpg",
    "/images/ForGallery/gallery4.jpg",
    "/images/ForGallery/gallery5.jpg",
    "/images/ForGallery/gallery6.jpg",
  ];

  return (
    <>
      <GalleryBanner />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 gap-y-8 md:w-[74%] px-4 md:px-0 mx-auto py-20">
        {images.map((item, index) => (
          <Zoom>
            <div key={index} className="">
              <img
                src={item}
                alt={`Gallery image ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </Zoom>
        ))}
      </div>
    </>
  );
};

export default Gallery;
