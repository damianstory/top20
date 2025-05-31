import { Video } from "@/lib/data";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* YouTube Video Embed */}
      <div className="aspect-video">
        <iframe
          src={video.youtubeUrl}
          title={video.title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      {/* Video Information */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {video.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {video.description}
        </p>
        
        {/* Metadata */}
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {video.schoolBoard}
          </span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
            Grade {video.grade}
          </span>
        </div>
      </div>
    </div>
  );
} 