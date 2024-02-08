import ArtPieces from "@/components/ArtPieces";
import FavoriteButton from "@/components/FavoriteButton";
// import spotlightPage from "@/components/SpotLight";

export default function HomePage({ pieces, artPiecesInfo, onToggleFavorite }) {
  const spotlightPiece =
    pieces[Math.floor(Math.random() * (pieces.length - 1))];
  return (
    <div>
      <h1>Art Gallery</h1>

      <h2>Spot Light of the Day:</h2>
      <spotlightPage pieces={pieces} />

      <h3>Other garbage:</h3>

      <div>
        <ArtPieces pieces={pieces} onToggleFavorite={onToggleFavorite}/>


      </div>
    </div>
  );
}
