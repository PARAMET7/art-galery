// import { ArtPiecePreview } from "@/components/ArtPiecePreview";
import { ArtPiecePreview, CardWithStats } from "./ArtPiecePreview";
import classes from "./ArtPiecePreview.module.css";



export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {

  return (
    <ul className={classes.ul}>
      {pieces?.map((artPiece) => {
        // return (
          <div key={artPiece.slug} className={classes.div}>
            <ArtPiecePreview
              artist={artPiece.artist}
              title={artPiece.name}
              image={artPiece.imageSource}
              slug={artPiece.slug}
              isFavorite={
                artPiecesInfo?.find((artPiece) => artPiece.slug === date.slug)
                  ?.isFavorite
              }
              onToggleFavorite={() => onToggleFavorite(piece.slug)}
            />
          </div>
        // );
      })}
    </ul>
  );
}
