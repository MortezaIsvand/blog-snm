import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  href: string;
}

const BackButton = ({ href }: Props) => {
  return (
    <Link href={href}>
      <button className="btn btn-neutral w-fit">
        <ChevronLeft />
        <h2>Back</h2>
      </button>
    </Link>
  );
};
export default BackButton;
