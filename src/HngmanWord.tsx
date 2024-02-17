type hangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};
export default function HngmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: hangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        fontFamily: "monospace",
        textTransform: "uppercase",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: "10px solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
