"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import Spline with no SSR to avoid hydration mismatches
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-gray-600">Loading 3D...</div>,
});

export default function LazySpline({ scene, className }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Render when in view, unmount when out of view to save GPU
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "200px", // Pre-load 200px before it comes into view
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? (
        <Spline scene={scene} className="w-full h-full" />
      ) : (
        <div className="w-full h-full" /> // Placeholder to maintain layout
      )}
    </div>
  );
}
