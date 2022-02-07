import { months } from "@components/constants/constants";
import { Eye } from "@components/icons/eye";
import styles from "@components/posts/article.module.scss";
import Link from "next/link";
import Image from "next/image";

function getMonth(month: number) {
  return months[month];
}

export enum Subject {
  Personal = "Personal",
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
      <Link key={id} passHref href={`/posts/${id}`}>
        <div className={styles.imageContainer}>
          <Image
            alt={`${title}`}
            className={styles.articleImage}
            src={imageSrc}
          />
          <div className={styles.overlay}>
            <Eye height="50px" width="50px" />
          </div>
        </div>
      </Link>
    </>
  );
};
