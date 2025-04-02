
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Zoom, Thumbs } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/zoom";
// import "swiper/css/thumbs";

// const images = [
//   "/comic/1/1-C1 CAPA.jpg",
//   "/comic/1/1-C2 FICHA.jpg",
//   "/comic/1/1-P0.jpg",
//   "/comic/1/1-P1.jpg",
//   "/comic/1/1-P2.jpg",
//   "/comic/1/1-P3.jpg",
//   "/comic/1/1-P4.jpg",
//   "/comic/1/1-P5.jpg",
//   "/comic/1/1-P6.jpg",
//   "/comic/1/1-P7.jpg",
//   "/comic/1/1-P8.jpg",
//   "/comic/1/1-P9.jpg",
//   "/comic/1/1-P10.jpg",
//   "/comic/1/1-P11.jpg",
// ];

// const ComicSwiperViewer = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div style={{ width: "100%", height: "100%", position: "relative" }}>
//       {/* Main Swiper Viewer */}
//       <Swiper
//         modules={[Navigation, Zoom, Thumbs]}
//         spaceBetween={0}
//         slidesPerView={1}
//         navigation
//         zoom={{ maxRatio: 3 }}
//         thumbs={{ swiper: thumbsSwiper }}
//         style={{ width: "100%", height: "calc(100vh - 120px)" }}
//       >
//         {images.map((src, index) => (
//           <SwiperSlide key={index}>
//             <div className="swiper-zoom-container">
//               <img
//                 src={src}
//                 alt={`Page ${index + 1}`}
//                 className="comic-image"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Thumbnails Swiper */}
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={6}
//         freeMode
//         watchSlidesProgress
//         style={{
//           width: "100%",
//           marginTop: "10px",
//         }}
//       >
//         {images.map((src, index) => (
//           <SwiperSlide key={index} style={{ cursor: "pointer" }}>
//             <img
//               src={src}
//               alt={`Thumbnail ${index + 1}`}
//               style={{
//                 width: "100%",
//                 height: "auto",
//                 borderRadius: "5px",
//               }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ComicSwiperViewer;