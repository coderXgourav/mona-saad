"use client";
import { CSSProperties, FC, PropsWithChildren } from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";

interface Props extends PropsWithChildren {
  className?: string;
  delay?: number;
  initialY?: number;
  initialX?: number;
  style?: CSSProperties;
  id?: string;
  dir?: string;
  triggerOnScroll?: boolean; // New prop to control animation trigger
}

export const AnimationWrapper: FC<Props> = ({
  className,
  delay,
  initialY = 50,
  initialX = 0,
  children,
  style,
  id,
  dir,
  triggerOnScroll = true,
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        dir={dir}
        className={className}
        id={id}
        initial={{ opacity: 0, y: initialY, x: initialX }}
        animate={
          !triggerOnScroll
            ? {
                opacity: 1,
                y: 0,
                x: 0,
                transition: { delay: delay, duration: 0.5 },
              }
            : undefined // No `animate` if scroll-triggered
        }
        whileInView={
          triggerOnScroll
            ? {
                opacity: 1,
                y: 0,
                x: 0,
                transition: { delay: delay, duration: 0.5 },
              }
            : undefined // No `whileInView` if instant
        }
        viewport={triggerOnScroll ? { once: true, amount: 0.5 } : undefined}
        style={style}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};
