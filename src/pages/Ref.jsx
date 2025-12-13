import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();
  const countRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Is visible");
        } else {
          console.log("Insible");
        }
      },
      {
        threshold: 0,
        rootMargin: "200px",
      }
    );
    observer.observe(videoRef.current);
  }, []);

  const playVideo = () => {
    videoRef.current.play();
    setIsPlaying(true);
    countRef.current++;
    console.log(countRef.current);
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div style={{ paddingTop: "700px", paddingBottom: "700px" }}>
      <h1>Ref</h1>
      <video
        src="https://www.w3schools.com/tags/mov_bbb.mp4"
        ref={videoRef}
      ></video>
      <button onClick={playVideo} disabled={isPlaying}>
        Play
      </button>
      <button onClick={pauseVideo} disabled={!isPlaying}>
        Pause
      </button>
    </div>
  );
};

export default Ref;
