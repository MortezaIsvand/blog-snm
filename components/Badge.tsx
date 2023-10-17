interface Props {
  tag: string;
}

const Badge = ({ tag }: Props) => {
  const color =
    tag === "TypeScript"
      ? "bg-blue-500"
      : tag === "Node.js"
      ? "bg-green-500"
      : tag === "MongoDB"
      ? "bg-[#00ED64]"
      : tag === "Prisma"
      ? "bg-white"
      : tag === "TailwindCSS"
      ? "bg-[#38BDF8]"
      : tag === "Next.js"
      ? "bg-blue-200"
      : "bg-[#149ECA]";

  return (
    <div className={`px-2 rounded-lg text-sm text-black ${color}`}>{tag}</div>
  );
};
export default Badge;
