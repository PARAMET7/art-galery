import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ArtPieceDetails({ pieces }) {
  return (
    <div>
      {pieces.map((pieces) => (
        <li key={pieces.slug}>
          <Link href={`/${pieces.slug}`}>{pieces.name}</Link>
          <div className="art-piece">
            <p>{randomArtPiece.artist}</p>
            <Image
              src={randomArtPiece.imageSource}
              width={500}
              height={500}
              alt="Image of the art piece"
            />
          </div>
        </li>
      ))}
    </div>
  );
}
