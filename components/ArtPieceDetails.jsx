import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ArtPieceDetails({ data }) {
  return (
    <div>
      {data.map((data) => (
        <li key={data.slug}>
          <Link href={`/${data.slug}`}>{data.name}</Link>
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
