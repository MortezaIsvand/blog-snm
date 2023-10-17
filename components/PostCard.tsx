import Badge from "@/components/Badge";
import { Tag } from "@prisma/client";
import Link from "next/link";

export interface Post {
  post: {
    id: string;
    title: string;
    content: string;
    tag: Tag;
  };
}

const PostCard = ({ post }: Post) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">
            {post.title.length > 15
              ? post.title.slice(0, 15) + "..."
              : post.title}
          </h2>
          {post.tag && <Badge tag={post.tag.name} />}
        </div>
        <p>
          {post.content.length > 35
            ? post.content.slice(0, 35) + "..."
            : post.content}
        </p>
        <div className="card-actions justify-end">
          <Link
            href={`/detail/${post.id}`}
            className="btn btn-neutral normal-case"
          >
            Read more...
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
