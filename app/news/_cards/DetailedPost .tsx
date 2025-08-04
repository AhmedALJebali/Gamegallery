import { PostDetails } from "@/Types/index";
import Image from "next/image";

const DetailedPost = ({ post }: { post: PostDetails }) => {
  const { imageUrl, author, readTime, title, content } = post;
  return (
    <div className="w-full rounded-xl overflow-hidden">
      <div className="relative w-full min-h-60 sm:min-h-96 rounded-none">
        <Image src={imageUrl} alt="header" fill className="object-cover" />
      </div>

      <div className="py-4">
        <div className="flex items-center gap-3 pb-3 flex-wrap text-xs sm:text-sm">
          <span className="bg-blue-700 text-white rounded px-3 py-2 font-medium">
            {author}
          </span>
          <span className="text-gray-300 font-medium">. {readTime}</span>
        </div>

        <div className="font-bold text-white text-base sm:text-xl leading-snug mb-2">
          {title}
        </div>

        <div className="text-gray-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
          {content}
        </div>
      </div>
    </div>
  );
};
export default DetailedPost;
