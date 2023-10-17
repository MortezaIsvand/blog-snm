import BackButton from "@/components/BackButton";
import CreateForm from "@/components/CreateForm";
import { Tag } from "@prisma/client";

const getTags = async (): Promise<Tag[]> => {
  const res = await fetch(`${process.env.API_URL}/api/tags`, {
    cache: "no-store",
  });
  return res.json();
};

const CreatePage = async () => {
  const tags = await getTags();
  return (
    <div className="flex flex-col gap-4">
      <BackButton href="/" />
      <CreateForm tags={tags} />
    </div>
  );
};
export default CreatePage;
