"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Tag } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Spinner from "./Spinner";

const schema = z.object({
  title: z.string().min(3).max(20),
  content: z.string().min(3).max(500),
  tagId: z.string(),
});

type formData = z.infer<typeof schema>;

const getTags = async (): Promise<Tag[]> => {
  const res = await fetch(`${process.env.API_URL}/api/tags`, {
    cache: "no-store",
  });
  return res.json();
};

const CreateForm = async () => {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });
  const tags = await getTags();

  const onSubmit = async (data: formData) => {
    await axios.post(`${process.env.API_URL}/api/posts`, data);
    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-3xl text-left w-96">Add new post</h1>
      <form
        className="flex flex-col gap-2 w-full items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("title")}
          type="text"
          placeholder="Title"
          className="input input-bordered w-96"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        <textarea
          {...register("content")}
          className="textarea textarea-bordered w-96 h-40 "
          placeholder="Content"
        ></textarea>
        {errors.content && (
          <p className="text-red-500">{errors.content.message}</p>
        )}

        <select
          {...register("tagId")}
          className="select select-bordered w-96"
          defaultValue={""}
        >
          <option>tags</option>
          {tags?.map((tag) => (
            <option value={tag.id} key={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
        {isSubmitting ? (
          <Spinner />
        ) : (
          <button className="btn btn-neutral mt-2 w-96">Create</button>
        )}
      </form>
    </div>
  );
};
export default CreateForm;
