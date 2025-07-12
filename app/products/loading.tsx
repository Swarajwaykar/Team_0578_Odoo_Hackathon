// This file was left out for brevity in previous turns. Its content is assumed to be correct and unchanged.
// Placeholder content for demonstration. In a real scenario, this would be the full file content.
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Skeleton className="h-10 w-1/2 mx-auto mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar Skeleton */}
          <aside className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md h-fit sticky top-20 space-y-6">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-8 w-full" />
          </aside>

          {/* Product Grid Skeleton */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-10 w-1/4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="group border-0 bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-md"
                >
                  <Skeleton className="aspect-square w-full rounded-t-lg" />
                  <div className="p-4 space-y-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <div className="flex justify-between items-center">
                      <Skeleton className="h-6 w-1/3" />
                      <Skeleton className="h-6 w-1/4" />
                    </div>
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
