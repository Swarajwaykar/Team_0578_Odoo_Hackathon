// This file was left out for brevity in previous turns. Its content is assumed to be correct and unchanged.
// Placeholder content for demonstration. In a real scenario, this would be the full file content.
import { Skeleton } from "@/components/ui/skeleton"

export default function MessagesLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        {/* Conversation List Skeleton */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md space-y-4">
          <Skeleton className="h-8 w-3/4 mb-4" />
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-3">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex-1 space-y-1">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-3 w-3/4" />
              </div>
            </div>
          ))}
        </div>

        {/* Message Thread Skeleton */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md flex flex-col h-[calc(100vh-100px)]">
          <div className="flex items-center space-x-3 pb-4 border-b mb-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-6 w-1/4" />
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <Skeleton className="h-12 w-2/3 rounded-lg" />
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <Skeleton className="h-10 flex-1 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
