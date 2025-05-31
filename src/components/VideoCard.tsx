import { Video } from "@/lib/data";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  // Extract iframe src from Loom embed HTML
  const getLoomIframeSrc = (loomEmbedHtml: string) => {
    const srcMatch = loomEmbedHtml.match(/src="([^"]+)"/);
    return srcMatch ? srcMatch[1] : '';
  };

  // Extract iframe src from Google Drive embed HTML
  const getGoogleDriveIframeSrc = (googleDriveEmbedHtml: string) => {
    const srcMatch = googleDriveEmbedHtml.match(/src="([^"]+)"/);
    return srcMatch ? srcMatch[1] : '';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Video Embed - handles YouTube, Loom, and Google Drive */}
      <div className="aspect-video">
        {video.videoType === 'loom' && video.loomEmbedHtml ? (
          // Loom embed as simple iframe - let aspect-video handle sizing
          <iframe
            src={getLoomIframeSrc(video.loomEmbedHtml)}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
          />
        ) : video.videoType === 'googledrive' && video.googleDriveEmbedHtml ? (
          // Google Drive embed as simple iframe - let aspect-video handle sizing
          <iframe
            src={getGoogleDriveIframeSrc(video.googleDriveEmbedHtml)}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          />
        ) : (
          // YouTube embed (fallback for any video without specific embed HTML)
          <iframe
            src={video.videoUrl}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
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