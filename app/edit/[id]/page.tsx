import BackButton from "@/components/BackButton";
import EditForm from "@/components/EditForm";

interface Props {
  params: {
    id: string;
  };
}

const getTags = async () => {
  const res = await fetch(`${process.env.API_URL}/api/tags`, {
    cache: "no-store",
  });
  if (res.ok) return res.json();
  throw new Error("Request faild");
};

const getInitialValues = async ({ params }: Props) => {
  const res = await fetch(`${process.env.API_URL}/api/posts/${params.id}`, {
    cache: "no-store",
  });
  if (res.ok) return res.json();
  throw new Error("Request faild");
};

const EditPage = async ({ params }: Props) => {
  const tags = await getTags();
  const initialValues = await getInitialValues({ params });
  return (
    <div>
      <BackButton href={`/detail/${params.id}`} />
      <EditForm tags={tags} initialValues={initialValues} params={params} />
    </div>
  );
};
export default EditPage;
