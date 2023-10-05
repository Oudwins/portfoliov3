import { cn } from "../../lib/tailwindcss";

export default function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div
        className={cn(
          "animate-spin inline-block w-6 h-6 border-[5px] border-current border-t-transparent text-indigo-600 rounded-full",
          className
        )}
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
