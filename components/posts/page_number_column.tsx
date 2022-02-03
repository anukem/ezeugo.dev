import { PageNumber } from "@components/posts/page-number";

export default function PageNumberColumn({
  className,
  selectedPost,
  postCount,
  onClick,
}: {
  className: string;
  selectedPost: number;
  postCount: number;
  onClick: (i: number) => void;
}) {
  const pageNumbers = [];
  for (const i of [...Array(postCount).keys()]) {
    pageNumbers.push(
      <PageNumber
        onClick={() => onClick(i)}
        key={i + 1 + "_page"}
        n={i + 1}
        isSelected={selectedPost === i}
      />
    );
  }

  return <div className={className}>{pageNumbers}</div>;
}
