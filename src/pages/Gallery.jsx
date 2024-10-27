import React from 'react';
import GalleryBanner from '../components/ForGallery/GalleryBanner';

const Gallery = () => {
     const images = [
          "/images/ForGallery/gallery1.jpg",
          "/images/ForGallery/gallery2.jpg",
          "/images/ForGallery/gallery3.jpg",
          "/images/ForGallery/gallery4.jpg",
          "/images/ForGallery/gallery5.jpg",
          "/images/ForGallery/gallery6.jpg"
     ];
  
     return (
         <>
             <GalleryBanner />
             <div className='grid grid-cols-3 gap-6 gap-y-8 w-[74%] mx-auto py-20'>
                 {images.map((item, index) => (
                     <div key={index} className='h-[60vh]'>
                         <img src={item} alt={`Gallery image ${index + 1}`} className='h-full object-cover' />
                     </div>
                 ))}
             </div>
         </>
     );
}

export default Gallery;
