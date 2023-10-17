"use client";

import { useRouter } from "next/navigation";

const SearchInput = () => {
  const router = useRouter();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const queryParams = new URLSearchParams();
    if (event.target.value) queryParams.set("search", event.target.value);
    router.push(`/${"?" + queryParams.toString()}`);
  };
  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 max-sm:w-40 md:w-auto"
        onChange={onChange}
      />
    </div>
  );
};
export default SearchInput;
