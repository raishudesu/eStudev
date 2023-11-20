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
    <div className="w-full space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[80%]" />
    </div>
  );
};

export const CardSkeletons = () => {
  return (
    <div className="w-full flex items-center space-x-4 col-span-2">
      <Skeleton className="h-32 w-64 rounded-full" />
      <div className="w-full space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[60%]" />
        <Skeleton className="h-4 w-[40%]" />
      </div>
    </div>
  );
};
