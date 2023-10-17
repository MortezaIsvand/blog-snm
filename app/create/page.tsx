import BackButton from "@/components/BackButton";
import CreateForm from "@/components/CreateForm";

const CreatePage = async () => {
  return (
    <div className="flex flex-col gap-4">
      <BackButton href="/" />
      <CreateForm />
    </div>
  );
};
export default CreatePage;
