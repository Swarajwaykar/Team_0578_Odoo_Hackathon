// This file was left out for brevity in previous turns. Its content is assumed to be correct and unchanged.
// Placeholder content for demonstration. In a real scenario, this would be the full file content.
import { Skeleton } from "@/components/ui/skeleton"

export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Skeleton className="h-10 w-1/2 mx-auto mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Skeleton className="h-[120px] w-full rounded-lg" />
          <Skeleton className="h-[120px] w-full rounded-lg" />
          <Skeleton className="h-[120px] w-full rounded-lg" />
        </div>

        {/* User Management Skeleton */}
        <Skeleton className="h-[300px] w-full rounded-lg mb-8" />

        {/* Item Moderation Skeleton */}
        <Skeleton className="h-[300px] w-full rounded-lg mb-8" />

        {/* Exchange History Skeleton */}
        <Skeleton className="h-[200px] w-full rounded-lg" />
      </div>
    </div>
  )
}
