"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Spinner from "./Spinner";

const schema = z.object({
  title: z.string().min(3).max(30),
  content: z.string().min(3).max(500),
  tagId: z.string(),
});

type formData = z.infer<typeof schema>;

interface Props {
  params: {
    id: string;
  };
  tags: {
    id: string;
    name: string;
  }[];
  initialValues: {
    id: string;
    title: string;
    content: string;
    tag: string;
  };
}

const EditForm = ({ initialValues, params, tags }: Props) => {
  const router = useRouter();
  const { title, content, tag } = initialValues;
  const sdf = { title, content, tag };
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm<formData>({
    resolver: zodResolver(schema),
    defaultValues: sdf,
  });
  const onSubmit = async (data: formData) => {
    await axios.patch(`/api/posts/${params.id}`, data);
    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-3xl text-right w-96">ویرایش پست</h1>
      <form
        className="flex flex-col gap-2 w-full items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("title")}
          type="text"
          placeholder="عنوان"
          className="input input-bordered w-96"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        <textarea
          {...register("content")}
          className="textarea textarea-bordered w-96 h-40 "
          placeholder="محتوا"
        ></textarea>
        {errors.content && (
          <p className="text-red-500">{errors.content.message}</p>
        )}

        <select
          {...register("tagId")}
          className="select select-bordered w-96"
          defaultValue={""}
        >
          <option>انتخاب تگ</option>
          {tags?.map((tag) => (
            <option value={tag.id} key={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
        {isSubmitting ? (
          <Spinner />
        ) : (
          <button className="btn btn-neutral mt-2 w-96">ویرایش</button>
        )}
      </form>
    </div>
  );
};
export default EditForm;
