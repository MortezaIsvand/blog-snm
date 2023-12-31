import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Props {
  href: string;
}

const BackButton = ({ href }: Props) => {
  return (
    <Link href={href}>
      <button className="btn btn-neutral w-fit">
        <ChevronRight />
        <h2>بازگشت</h2>
      </button>
    </Link>
  );
};
export default BackButton;
