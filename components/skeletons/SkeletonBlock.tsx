export function SkeletonBlock({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse bg-border-grey/60 ${className}`}
      {...props}
    />
  );
}

export function SkeletonLine({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse bg-border-grey/60 h-4 w-full ${className}`}
      {...props}
    />
  );
}
