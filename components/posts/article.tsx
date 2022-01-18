import { months } from "@components/constants/constants";
import styles from "@components/posts/article.module.scss";

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
  date,
  subject,
  title,
  imageSrc,
}: {
  date: string;
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
      <img className={styles.articleImage} src={imageSrc} />
    </>
  );
};
