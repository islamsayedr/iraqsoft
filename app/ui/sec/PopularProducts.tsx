"use client";

import styles from "./PopularProducts.module.css";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import ProductCard from "../components/molecules/ProductCard";
import Btn from "../components/atoms/Btn";
import { ProductsData } from "../../lib/dummyData";
import { ArrowLeft, ArrowRight } from "../components/atoms/icons/index";

export default function PopularProducts() {
  const [width, setWidth] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const [swipeDistanceVW, setSwipeDistanceVW] = useState(60);

  const goToSystems = () => {};
  useEffect(() => {
    if (listRef.current) {
      setWidth(listRef.current.scrollWidth - listRef.current.offsetWidth);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSwipeDistanceVW(90);
      } else {
        setSwipeDistanceVW(40);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const vwToPx = (vw: number) => {
    return typeof window !== "undefined" ? (vw / 100) * window.innerWidth : 100;
  };
  const swipeDistancePx = vwToPx(swipeDistanceVW);

  const swipeRight = () => {
    if (currentPos < 0) {
      const newPosition = Math.min(currentPos + swipeDistancePx, 0);
      setCurrentPos(newPosition);
      controls.start({ x: -newPosition });
    }
  };

  const swipeLeft = () => {
    if (currentPos > -width) {
      const newPosition = Math.max(currentPos - swipeDistancePx, -width);
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
  return (
    <section className={styles.popular}>
      <div className={`container ${styles.container}`}>
        <div className="flex w-full justify-between ">
          <h2>اشهر الانظمة والبرامج</h2>
          <div>
            <Btn type="sec" classes={styles.all} handleClick={goToSystems}>
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
            {ProductsData.map((product, index) => (
              <motion.div className="flex w-auto" key={index}>
                <ProductCard
                  data={product}
                  classes="lg:w-[900px] md:w-[700px]"
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
