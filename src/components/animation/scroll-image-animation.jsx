"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.7], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="z-10 h-[60rem] w-[100%] md:h-[80rem] flex items-center justify-center p-2 absolute -top-[380px]"
      ref={containerRef}
    >
      <div
        className="py-10 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          scrollRef={containerRef}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Card = ({ rotate, scale, children, scrollRef }) => {
  console.log(rotate);
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      viewport={{ once: true }}
      className="max-w-6xl -mt-12 mx-auto h-[40rem] md:h-[45rem] w-full border-4 border-white p-2 bg-[#222222] rounded-[30px] shadow-lg"
    >
      <div className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl ">
        {children}
      </div>
    </motion.div>
  );
};
