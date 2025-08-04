import { PostDetails } from "@/Types/index";

interface PostCardProps {
  post: PostDetails;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start rounded-xl bg-white/5 sm:bg-transparent sm:px-6 py-4 max-w-xl w-full mx-auto gap-4">
      {/* Image */}
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full sm:w-48 h-48 object-cover rounded-lg"
      />

      {/* Text */}
      <div className="text-center sm:text-left">
        {/* Author + Read Time */}
        <div className="flex justify-center sm:justify-start items-center mb-3 sm:mb-5 gap-2">
          <span className="bg-pink-400 text-white rounded px-3 py-1 font-medium text-sm sm:text-base">
            {post.author}
          </span>
          <span className="text-gray-400 text-xs sm:text-sm font-medium">
            · {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-white text-base sm:text-lg leading-snug">
          {post.title}
        </h3>
      </div>
    </div>
  );
};

export default PostCard;
