import styles from "./page-number.module.scss";
import classNames from "classnames";

export const PageNumber = ({
  n,
  isSelected,
  onClick,
}: {
  n: number;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.pageNumber, {
        [styles.isSelected]: isSelected,
      })}
    >
      {n < 10 ? "0" + n.toString() : n}
    </div>
  );
};
