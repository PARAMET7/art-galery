import Image from "next/image";
import Spotlight from "@/components/Spotlight";

export default function spotlightPage({ data }) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let randomNumber = getRandomInt(data.length);

  const randomArtPiece = data[randomNumber];

  return (
    <>
      <h1>Spot Light Diahrrea DASSXLEKSYA Art</h1>

      <Spotlight randomArtPiece={randomArtPiece} />
    </>
  );
}
