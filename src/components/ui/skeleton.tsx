import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

<<<<<<< HEAD
export { Skeleton };
=======
export { Skeleton };
>>>>>>> 341cf735da52260ed6e4908981d32b93d46e8c29
