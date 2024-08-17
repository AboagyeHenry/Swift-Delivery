// FadeInSection.tsx
import React from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  fadeDelay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className,
  fadeDelay = 0,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger the animation when 10% of the element is visible
  });

  return (
    <div
      ref={ref}
      className={classNames(className, {
        "opacity-0 transition-opacity duration-1000": !inView,
        [`opacity-100 transition-opacity duration-1000 delay-${fadeDelay}`]: inView,
      })}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
