import { PostDetails } from "@/Types/index";
import Image from "next/image";

const DetailedPost = ({ post }: { post: PostDetails }) => {
  const { imageUrl, author, readTime, title, content } = post;

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden">
      {/* Main Image */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[4/2]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="py-5 px-4 sm:px-6">
        {/* Author + Time */}
        <div className="flex items-center gap-3 flex-wrap text-xs sm:text-sm mb-3">
          <span className="bg-blue-700 text-white rounded px-3 py-1.5 font-medium">
            {author}
          </span>
          <span className="text-gray-400 font-medium">· {readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-white font-bold text-lg sm:text-2xl leading-snug mb-2">
          {title}
        </h1>

        {/* Content */}
        <div className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
          {content}
        </div>
      </div>
    </div>
  );
};

export default DetailedPost;
