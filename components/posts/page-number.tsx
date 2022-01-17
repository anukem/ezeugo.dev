import styles from "./page-number.module.scss";
import classNames from "classnames";

export const PageNumber = ({
  n,
  isSelected,
}: {
  n: number;
  isSelected: boolean;
}) => {
  return (
    <div
      className={classNames(styles.pageNumber, {
        [styles.isSelected]: isSelected,
      })}
    >
      {n < 10 ? "0" + n.toString() : n}
    </div>
  );
};
