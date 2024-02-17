import { useCallback, useEffect, useState } from "react";
import word from "./wordList.json";
import HngmanWord from "./HngmanWord";
import HngmanDrown from "./HngmanDrown";
import Keypord from "./Keypord";
function App() {
  // states
  const [wordToGuess] = useState(() => {
    return word[Math.floor(Math.random() * word.length)];
  });
  const [guessedLetters, setGuesstLetters] = useState<string[]>([]);
  // console.log(wordToGuess);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  console.log(wordToGuess);
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuesstLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );
  useEffect(() => {
    const handeler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]/)) return;
      if (isWinner || isLoser) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handeler);

    return () => {
      document.removeEventListener("keypress", handeler);
    };
  }, [guessedLetters]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rm",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "2rm",
          textAlign: "center",
          background: isWinner ? "green" : "red",
          color: "white",
          padding: isWinner || isLoser ? "15px 10px" : 0,
          marginBottom: "10px",
          borderRadius: "10px",
          transition: ".3s",
        }}
      >
        {isWinner && "Winner!! - Refresh To Try Again "}
        {isLoser && "Nice Try!! - Refresh To Try Again "}
      </div>
      <HngmanDrown numberOfGuesses={incorrectLetters.length} />
      <HngmanWord
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keypord
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inActiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
