import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import { Tag } from "@prisma/client";

interface Props {
  id: string;
  title: string;
  content: string;
  tag: Tag;
}

interface getSearchParams {
  searchParams: {
    page: string;
    search: string;
  };
}

const getPosts = async ({
  searchParams,
}: getSearchParams): Promise<Props[]> => {
  const queryParams = new URLSearchParams(searchParams);
  const res = await fetch(
    `${process.env.API_URL}/api/posts${"?" + queryParams.toString()}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};

const HomePage = async ({ searchParams }: getSearchParams) => {
  const page = parseInt(searchParams.page) || 1;
  const posts = await getPosts({ searchParams });
  return (
    <section className="flex flex-col gap-10">
      <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
      <Pagination page={page} searchParams={searchParams} />
    </section>
  );
};
export default HomePage;
