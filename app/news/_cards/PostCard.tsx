import { PostDetails } from "@/Types/index";

const PostCard = ({ post }: { post: PostDetails }) => (
  <div className="flex items-center rounded-xl px-6 max-w-xl">
    <img
      src={post.imageUrl}
      alt={post.title}
      className="w-48 h-48 rounded-lg object-cover mr-6"
    />
    <div>
      <div className="flex items-center mb-5">
        <span className="bg-pink-400 text-white rounded px-3 py-1 font-medium text-lg mr-2">
          {post.author}
        </span>
        <span className="text-gray-400 text-xs font-medium">
          · {post.readTime}
        </span>
      </div>
      <div className="font-bold text-white text-lg leading-snug">
        {post.title}
      </div>
    </div>
  </div>
);

export default PostCard;
