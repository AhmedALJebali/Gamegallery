import { PostDetails } from "@/Types/index";
import DetailedPost from "./_components/detailedPost ";
import PostCard from "./_components/postCard";
import HeroSection from "./_components/newsHero";
// Main Page Component
const HomePage = () => {
  const posts: PostDetails[] = [
    {
      imageUrl: "/Games/about.jpg",
      author: "Ahmed Adel",
      readTime: "4 min read",
      title: "Understanding TypeScript Interfaces",
      content:
        "TypeScript interfaces are powerful for defining object shapes...",
    },
    {
      imageUrl: "/Games/about.jpg",
      author: "Sara Mahmoud",
      readTime: "3 min read",
      title: "React and the Component Model",
      content: "React promotes the creation of reusable components...",
    },
  ];

  return (
    <main className="w-[80%] mx-auto px-4 py-8">
      <HeroSection />
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left: Detailed Post */}
        <div className="flex-1 flex flex-col gap-3">
          {posts.map((post, index) => (
            <DetailedPost key={index} post={post} />
          ))}
        </div>

        {/* Right: Grid of Post Cards */}
        <div className="flex flex-col gap-3">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}{" "}
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
