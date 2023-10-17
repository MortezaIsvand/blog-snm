"use client";

import { useRouter } from "next/navigation";

interface Props {
  page: number;
  searchParams: {
    page: string;
  };
}

const Pagination = ({ page, searchParams }: Props) => {
  const router = useRouter();
  return (
    <div className="join flex justify-center mb-12">
      <button
        onClick={() => router.push(`/?page=${(page = 1)}`)}
        className={`join-item btn ${
          searchParams.page === "1" ||
          (searchParams.page === undefined && "btn-active")
        }`}
      >
        1
      </button>
      <button
        onClick={() => router.push(`/?page=${(page = 2)}`)}
        className={`join-item btn ${searchParams.page === "2" && "btn-active"}`}
      >
        2
      </button>
    </div>
  );
};
export default Pagination;
