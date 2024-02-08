import ArtPieces from "@/components/ArtPieces";

export default function favorite({pieces, isFavorite, onToggleFavorite, artPiecesInfo}) {
  const favoriteList = pieces.filter((artPiece) =>
    artPiecesInfo.find(
      (arepicesInfo) => arepicesInfo.slug === artPiece.slug && arepicesInfo.isFavorite
    )
  );
  return (
    <>
      <h1>Your Favourite Pieces</h1>
    <ArtPieces
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
      pieces={favoriteList}

      />
    </>
  );
}
