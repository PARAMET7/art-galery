// import { ArtPiecePreview } from "@/components/ArtPiecePreview";
import { ArtPiecePreview, CardWithStats } from "./ArtPiecePreview";
import classes from "./ArtPiecePreview.module.css";

export default function ArtPieces({ data }) {
  return (
    <ul className={classes.ul}>
      {data.map((artPiece) => {
        return (
          <div key={artPiece.slug} className={classes.div}>
            <ArtPiecePreview
              artist={artPiece.artist}
              title={artPiece.name}
              image={artPiece.imageSource}
              slug={artPiece.slug}
            />
          </div>
        );
      })}
    </ul>
  );
}
