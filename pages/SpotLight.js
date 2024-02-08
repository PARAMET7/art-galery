import Image from "next/image";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces }) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let randomNumber = getRandomInt(pieces.length);

  const randomArtPiece = pieces[randomNumber];

  return (
    <>
      <h1>Spot Light Diahrrea DASSXLEKSYA Art</h1>

      <Spotlight randomArtPiece={randomArtPiece} />
    </>
  );
}
