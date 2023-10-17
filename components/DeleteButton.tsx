"use client";

import axios from "axios";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const DeleteButton = ({ params }: Props) => {
  const router = useRouter();
  const handleClick = async () => {
    const res = await axios.delete(`/api/posts/${params.id}`);
    console.log(res.data);
    router.push("/");
    router.refresh();
  };
  return (
    <button onClick={() => handleClick()} className="btn btn-error">
      <Trash2 />
      Delete
    </button>
  );
};
export default DeleteButton;
