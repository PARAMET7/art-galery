import ArtPieces from "@/components/ArtPieces";

export default function favorite({isFavorite, onToggleFavorite}) {
  return (
    <>
      <h1>Your Favourite Pieces</h1>
    <ArtPieces
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
