import { months } from "@components/constants/constants";
import { Eye } from "@components/icons/eye";
import styles from "@components/posts/article.module.scss";
import Link from "next/link";

function getMonth(month: number) {
  return months[month];
}

export enum Subject {
  Personal = "Travel",
}

function getDate(date: string) {
  const [month, day, year] = date.split(".");

  return `${day} ${getMonth(Number(month))} ${year}`;
}

export const Article = ({
  id,
  date,
  subject,
  title,
  imageSrc,
}: {
  date: string;
  id: string;
  subject: Subject;
  title: string;
  imageSrc: string;
}) => {
  const dateValue = getDate(date);

  return (
    <>
      <div className={styles.subtitle}>
        {dateValue} <div className={styles.dot} /> {subject}
      </div>
      <div className={styles.title}>{title}</div>
      <Link key={id} href={`/posts/${id}`}>
        <div className={styles.imageContainer}>
          <img className={styles.articleImage} src={imageSrc} />
          <div className={styles.overlay}>
            <Eye height="100px" width="100px" />
          </div>
        </div>
      </Link>
    </>
  );
};
