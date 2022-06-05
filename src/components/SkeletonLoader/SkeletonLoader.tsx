import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// typesctipt  for props
type Props = {
  count?: number;
  height?: string;
  width?: string;
  className?: string;
};
const SkeletonLoader = ({ count, height, width, className }: Props) => {
  return (
    <Skeleton
      height={height || "100%"}
      width={width || "100%"}
      count={count}
      className={className || ""}
    />
  );
};

export default SkeletonLoader;
