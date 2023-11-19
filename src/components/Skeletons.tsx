import { Skeleton } from "./ui/skeleton";

export const ProfileSkeletons = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export const TextSkeletons = () => {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  );
};

export const CardSkeletons = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-32 w-32 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[450px]" />
        <Skeleton className="h-4 w-[400px]" />
        <Skeleton className="h-4 w-[350px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  );
};
