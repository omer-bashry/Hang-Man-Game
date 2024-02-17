const head = (
  <div
    style={{
      width: "50px",
      height: "50px",
      border: "10px solid black",
      borderRadius: "50%",
      position: "absolute",
      top: "50px",
      right: "-20px",
    }}
  />
);

const body = (
  <div
    style={{
      width: "10px",
      height: "150px",
      background: "black",
      position: "absolute",
      top: "110px",
      right: "10px",
    }}
  />
);

const rightHand = (
  <div
    style={{
      width: "10px",
      height: "80px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: "-15px",
      rotate: "40deg",
    }}
  />
);

const leftHand = (
  <div
    style={{
      width: "10px",
      height: "80px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: "36px",
      rotate: "-40deg",
    }}
  />
);

const leftLeg = (
  <div
    style={{
      width: "10px",
      height: "80px",
      background: "black",
      position: "absolute",
      top: "247px",
      right: "36px",
      rotate: "40deg",
    }}
  />
);

const rightLeg = (
  <div
    style={{
      width: "10px",
      height: "80px",
      background: "black",
      position: "absolute",
      top: "247px",
      right: "-15px",
      rotate: "-40deg",
    }}
  />
);

const bodyBarts = [head, body, rightHand, leftHand, rightLeg, leftLeg];

type HngmanDrownProps = {
  numberOfGuesses: number;
};

export default function HngmanDrown({ numberOfGuesses }: HngmanDrownProps) {
  return (
    <div style={{ position: "relative" }}>
      {bodyBarts.slice(0, numberOfGuesses)}
      <div
        style={{
          width: "120px",
          height: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          width: "10px",
          height: "50px",
          background: "black",
          position: "absolute",
          right: "10px",
        }}
      />
      <div
        style={{
          width: "10px",
          height: "400px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          width: "250px",
          height: "10px",
          background: "black",
        }}
      />
    </div>
  );
}
