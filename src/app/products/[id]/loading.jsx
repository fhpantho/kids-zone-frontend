export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto p-5 animate-pulse">
      
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Image Skeleton */}
        <div className="w-full h-[400px] bg-gray-300 rounded-xl"></div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>

          <div className="h-6 bg-gray-300 rounded w-1/3"></div>

          <div className="h-4 bg-gray-200 rounded w-1/2"></div>

          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>

          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>

        </div>
      </div>

      {/* Button Skeleton */}
      <div className="mt-6">
        <div className="h-12 bg-gray-300 rounded w-full"></div>
      </div>

    </div>
  );
}