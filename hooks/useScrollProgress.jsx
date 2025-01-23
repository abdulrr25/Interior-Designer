"use client";

import { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        const progress = (currentProgress / scrollHeight) * 100;
        setCompletion(Math.min(progress, 100)); // Ensure max value is 100%
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);

    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
