"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { DownArrows, Play, UpArrows } from "../atoms/icons";

type updatesProps = {
  id: string;
  title: string;
  des: string;
  cover: string;
  date: string;
  video: string;
};

export default function UpdateCard({
  id,
  title,
  des,
  cover,
  date,
  video,
}: updatesProps) {
  const [read, setRead] = useState(false);
  const [play, setPlay] = useState(false);
  // const [url] = useState(
  //   `https://www.youtube.com/embed/pctmnCCqXi4?controls=0&autoplay=1&modestbranding=1`
  // );
  const handleDrag = () => {
    setRead(!read);
  };
  const handlePlay = () => {
    setPlay(!play);
  };

  useEffect(() => {}, [play]);

  return (
    <div
      className={`${id} bg-cover bg-center md:w-[380px] w-[327px] h-[600px] flex items-end rounded-[32px] overflow-hidden relative`}
    >
      <div
        style={{ backgroundImage: `url(${cover})` }}
        id="player"
        className="absolute top-0 left-0 w-full h-full bg-[var(--sc)] bg-cover  flex items-center justify-center"
      >
        {play ? (
          <iframe
            style={{
              width: "100%",
              height: "100%",
              display: `${!play ? "none" : "block"}`,
            }}
            src={video}
            title="التحديث الجديد حسابات الابراج"
            allow={`accelerometer; encrypted-media; gyroscope; autoplay; web-share`}
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          ""
        )}
        <div
          className={clsx(
            "cursor-pointer relative",
            { hidden: play },
            { block: !play }
          )}
          onClick={handlePlay}
        >
          <Play />
          <div className="absolute top-0 w-full h-full bg-[var(--yo)] rounded-full animate-ping opacity-75"></div>
        </div>
      </div>

      <div
        className={clsx(
          "p-6 w-full flex flex-col bg-gradient-to-b to-[#3F3369] transition-all ease-in-out z-10 cursor-pointer",
          { "max-h-full h-fit from-[#3F336900] gap-2 pb-10 pb-14": read },
          { "h-[138px] from-[#3F336900] ": !read }
        )}
        onClick={handleDrag}
      >
        <div className="flex items-top gap-4 w-full justify-center ">
          <h3
            className={clsx("text-white flex-1 font-md ", {
              "truncate overflow-hidden": !read,
            })}
          >
            {title}
          </h3>
          <span className="text-white leading-loose">{date}</span>
        </div>
        <p
          className={`text-white flex-1  text-ellipsis ${
            read ? "overflow-auto scroll-hide " : "overflow-hidden"
          }`}
        >
          {des}
        </p>
      </div>

      <div
        className={`p-6 h-[88px] flex from-[#3F336924] bg-gradient-to-b absolute bottom-0 w-full font-bold text-[var(--yo)] justify-center items-end   to-[#3F3369]  z-20 cursor-pointer`}
        onClick={handleDrag}
      >
        {read ? (
          <DownArrows stroke="var(--yo)" height={32} width={32} />
        ) : (
          <UpArrows
            stroke="var(--yo)"
            height={32}
            width={32}
            className="animate-bounce"
          />
        )}
      </div>
    </div>
  );
}
