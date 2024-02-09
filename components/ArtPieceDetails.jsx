import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import CommentForm from "../CommentForm/index.js";

export default function ArtPieceDetails({ pieces, addComment, }) {
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
          <CommentForm addComment={addComment} />
        </li>
      ))}
    </div>
  );
}
