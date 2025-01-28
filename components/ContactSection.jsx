// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
// const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

// export default function GoogleReviewsSection() {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch(
//           `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&key=${API_KEY}`
//         );
//         const data = await response.json();

//         if (data.status === "OK") {
//           setReviews(data.result.reviews || []);
//         } else {
//           console.error("Error fetching reviews:", data.status);
//         }
//       } catch (error) {
//         console.error("Failed to fetch reviews:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []);

//   return (
//     <div className="pt-12">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <motion.h2
//           initial="offscreen"
//           whileInView="onscreen"
//           className="text-3xl font-bold tracking-tight sm:text-4xl"
//         >
//           Customer Reviews
//         </motion.h2>
//         <motion.p
//           initial="offscreen"
//           whileInView="onscreen"
//           className="mt-2 text-lg leading-8 text-muted-foreground"
//         >
//           See what our customers are saying about us!
//         </motion.p>

//         {loading ? (
//           <div className="mt-10 text-center text-gray-600">Loading reviews...</div>
//         ) : reviews.length > 0 ? (
//           <motion.div
//             initial="offscreen"
//             whileInView="onscreen"
//             className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 gap-y-16"
//           >
//             {reviews.map((review, index) => (
//               <article
//                 key={index}
//                 className="flex max-w-xl flex-col items-start justify-between"
//               >
//                 <div className="flex items-center gap-x-4 text-xs">
//                   <Image
//                     src="/image/star.svg"
//                     alt="Star Icon"
//                     width={20}
//                     height={20}
//                     className="inline-block"
//                   />
//                   <span className="relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium">
//                     {review.rating} Stars
//                   </span>
//                 </div>

//                 <div className="group relative">
//                   <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
//                     {review.author_name}
//                   </h3>
//                   <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
//                     {review.text}
//                   </p>
//                 </div>

//                 <div className="relative mt-8 flex items-center gap-x-4">
//                   <img
//                     src={review.profile_photo_url || "/image/default-profile.png"}
//                     alt={review.author_name}
//                     className="h-10 w-10 rounded-full bg-gray-500"
//                   />

//                   <div className="text-sm leading-6">
//                     <p className="font-semibold">{review.author_name}</p>
//                     <p className="text-muted-foreground">
//                       {new Date(review.time * 1000).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </motion.div>
//         ) : (
//           <div className="mt-10 text-center text-gray-600">
//             No reviews available.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
