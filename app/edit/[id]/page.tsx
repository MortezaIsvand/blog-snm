import BackButton from "@/components/BackButton";
import EditForm from "@/components/EditForm";
import { Tag } from "@prisma/client";

interface Props {
  params: {
    id: string;
  };
}

const getInitialValues = async ({ params }: Props) => {
  const res = await fetch(`${process.env.API_URL}/api/posts/${params.id}`, {
    cache: "no-store",
  });
  return res.json();
};

const getTags = async (): Promise<Tag[]> => {
  const res = await fetch(`${process.env.API_URL}/api/tags`, {
    cache: "no-store",
  });
  return res.json();
};

const EditPage = async ({ params }: Props) => {
  const initialValues = await getInitialValues({ params });
  const tags = await getTags();
  return (
    <div>
      <BackButton href={`/detail/${params.id}`} />
      <EditForm tags={tags} initialValues={initialValues} params={params} />
    </div>
  );
};
export default EditPage;
