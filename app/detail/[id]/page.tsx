import BackButton from "@/components/BackButton";
import Badge from "@/components/Badge";
import DeleteButton from "@/components/DeleteButton";
import Views from "@/components/Views";
import { Comment, Tag, User } from "@prisma/client";
import { Pencil } from "lucide-react";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

interface Post {
  id: string;
  title: string;
  content: string;
  tag: Tag;
  views: number;
  likes: number;
  comment: Comment[];
  User: User;
}

const getPost = async ({ params }: Props): Promise<Post> => {
  const res = await fetch(`${process.env.API_URL}/api/posts/${params.id}`, {
    cache: "no-store",
  });
  return res.json();
};

const DetailPage = async ({ params }: Props) => {
  const post = await getPost({ params });
  return (
    <div className="flex flex-col gap-4 max-w-lg">
      <BackButton href="/" />
      <div className="flex justify-between gap-1 items-baseline max-w-sm">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        {post.tag && <Badge tag={post.tag.name} />}
      </div>
      <div className="flex justify-start gap-4 items-end max-w-sm">
        <div className="flex items-center gap-4">
          <Link href={`/edit/${post.id}`} className="btn btn-warning">
            <Pencil /> Edit
          </Link>
          <DeleteButton params={params} />
        </div>
        <Views views={post.views} />
      </div>
      <p className="max-w-md">{post.content}</p>
    </div>
  );
};
export default DetailPage;
