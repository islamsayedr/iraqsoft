"use client";

import styles from "./LatestUpdates.module.css";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import Btn from "../components/atoms/Btn";
// import { updates } from "../../lib/dummyData";
import { ArrowLeft, ArrowRight } from "../components/atoms/icons/index";
import UpdateCard from "../components/molecules/UpdateCard";
// import { useNavigate } from "react-router-dom";
import { Update } from "../../lib/definitions";

interface LatestUpdatesProps {
  updates: Update[];
  error?: string;
}
export default function LatestUpdates({ updates, error }: LatestUpdatesProps) {
  const [width, setWidth] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);
  const [swipeDistanceVW, setSwipeDistanceVW] = useState(60);
  // const navigate = useNavigate();

  const goToUpdates = () => {
    // navigate("updates");
  };
  const listRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (listRef.current) {
      setWidth(listRef.current.scrollWidth - listRef.current.offsetWidth);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setSwipeDistanceVW(343);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const swipeRight = () => {
    if (currentPos < 0) {
      const newPosition = Math.min(currentPos + swipeDistanceVW, 0);
      setCurrentPos(newPosition);
      controls.start({ x: -newPosition });
    }
  };

  const swipeLeft = () => {
    if (currentPos > -width) {
      const newPosition = Math.max(currentPos - swipeDistanceVW, -width);
      setCurrentPos(newPosition);
      controls.start({ x: -newPosition });
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.x;
    const newPosition = currentPos - offset;
    setCurrentPos(Math.max(Math.min(newPosition, 0), -width));
  };
  if (error) {
    return (
      <section className="bg-white">
        <div className="container flex-col md:gap-12 gap-6">
          <h2 className="title">اخر الاخبار والتحديثات</h2>
          <div className="flex w-full gap-4 justify-center flex-wrap">
            <p>Error: {error}</p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className={styles.popular}>
      <div className={`container ${styles.container}`}>
        <div className="flex w-full justify-between ">
          <h2>اخر الاخبار والتحديثات</h2>
          <div>
            <Btn type="sec" classes={styles.all} handleClick={goToUpdates}>
              المزيد
            </Btn>
          </div>
        </div>
        <motion.div ref={listRef} className={`flex w-full ${styles.slider}`}>
          <motion.div
            whileTap={{ cursor: "grabbing" }}
            className="flex cursor-pointer gap-4"
            drag="x"
            dragConstraints={{ left: 0, right: width }}
            animate={controls}
            onDragEnd={handleDragEnd}
          >
            {updates.map((event) => (
              <motion.div className={`flex w-auto `} key={event.id}>
                <UpdateCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  des={event.des}
                  date={event.createdAt.toLocaleDateString()}
                  cover={event.cover}
                  video={event.video}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {currentPos < 0 && (
          <Btn
            type="sec"
            classes={`${styles.prevBtn} `}
            handleClick={swipeRight}
          >
            <ArrowRight />
          </Btn>
        )}
        {currentPos > -width && (
          <Btn
            type="primary"
            classes={`${styles.nextBtn} `}
            handleClick={swipeLeft}
          >
            <ArrowLeft />
          </Btn>
        )}

        {/* <div className={`${styles.actions} md:hidden`}>
          <Btn type="sec" classes="" handleClick={swipeRight}>
            <ArrowRight />
          </Btn>
          <Btn type="primary" classes="" handleClick={swipeLeft}>
            <ArrowLeft />
          </Btn>
        </div> */}
      </div>
    </section>
  );
}
