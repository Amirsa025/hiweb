import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type SkletonProps = {
  children: React.ReactNode;
  baseColor?: string;
};
export default function SkeletonWrapper({
  children,
  baseColor = "#c3c3c3",
}: SkletonProps) {
  return (
    <SkeletonTheme
      baseColor={baseColor}
      highlightColor="#a9a9a9"
      borderRadius="0.5rem"
      duration={3}
    >
      {children}
    </SkeletonTheme>
  );
}
