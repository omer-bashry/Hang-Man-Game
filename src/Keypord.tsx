import styles from "./keypord.module.css";
const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type keypordProps = {
  disabled?: boolean;
  activeLetters: string[];
  inActiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export default function Keypord({
  disabled = false,
  activeLetters,
  inActiveLetters,
  addGuessedLetter,
}: keypordProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
        marginTop: "30px",
      }}
    >
      {keys.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inActiveLetters.includes(key);
        return (
          <button
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInActive ? styles.inactive : ""
            } `}
            key={key}
            onClick={() => {
              addGuessedLetter(key);
            }}
            disabled={isActive || isInActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
