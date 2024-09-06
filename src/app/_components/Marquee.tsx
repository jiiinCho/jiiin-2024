import styles from "./Marquee.module.css";

export const Marquee = ({ text, repeat }: { text: string; repeat: number }) => {
  return (
    <div className="uppercase bg-primary-lightest text-xl text-primary font-medium">
      <ul className={styles.root}>
        <li>{text}</li>
        {Array(repeat)
          .fill(text)
          .map((textItem, i) => (
            <li key={i} aria-hidden={true}>
              {textItem}
            </li>
          ))}
      </ul>
    </div>
  );
};
