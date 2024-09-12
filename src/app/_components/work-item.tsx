"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import CoverImage from "./cover-image";
import type { Post } from "../../interfaces/post";

export function WorkItem({ title, slug, coverImage, tags }: Post) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [100, 0, 0, -100]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.42, 0.65, 1],
    [0, 1, 1, 0]
  );

  const imageY = useTransform(scrollYProgress, [0, 1], [85, -85]);

  return (
    <li ref={ref} className="w-full px-[4vw] my-[30vh] relative snap-center">
      <Link
        href={`/posts/${slug}`}
        aria-label={title}
        className="flex justify-between items-center"
      >
        <div className="overflow-hidden">
          <motion.p
            style={{ y, opacity }}
            className="uppercase md:inline-block hidden hover:underline"
          >
            {title}
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p style={{ y, opacity }} className="lg:inline-block hidden">
            {tags}
          </motion.p>
        </div>
        <div className="overflow-hidden w-[100vw] md:w-[65vw] lg:w-[42vw] ">
          <motion.div style={{ y: imageY, scale: 1.15 }}>
            <CoverImage slug={slug} title={title} src={coverImage} />
          </motion.div>
        </div>
        {/* <div className="absolute inset-0 bg-secondary mix-blend-overlay z-[-1]"></div> */}
      </Link>
    </li>
  );
}
