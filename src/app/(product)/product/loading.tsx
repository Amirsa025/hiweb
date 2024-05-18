import { Loading as Load } from "@/app/_components/loading";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <Load size="large" variant="success" />
    </div>
  );
}
