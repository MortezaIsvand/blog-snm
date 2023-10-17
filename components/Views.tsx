import { Eye } from "lucide-react";

interface Props {
  views: number;
}

const Views = ({ views }: Props) => {
  return (
    <div className="flex gap-1 items-center">
      <Eye size={23} />
      <span className="font-bold text-sm">{views}</span>
    </div>
  );
};
export default Views;
