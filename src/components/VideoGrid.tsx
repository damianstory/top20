import { Video } from "@/lib/data";
import VideoCard from "./VideoCard";

interface VideoGridProps {
  videos: Video[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  if (videos.length === 0) {
    return (
      <div className="py-16 text-center bg-transparent">
        <p className="text-gray-500 text-lg">
          No videos found matching your filters. Try adjusting your selection.
        </p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
} 