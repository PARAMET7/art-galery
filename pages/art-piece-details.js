import Image from "next/image";

export default function artPieceDetail({ pieces }) {
  const artPieceDetails = pieces[ArtPieceDetails];

  return (
    <>
      <h1>More About This Piece</h1>

      <div className="art-piece">
        <p>{artPieceDetails}</p>
        <Image
          src={artPieceDetails}
          width={500}
          height={500}
          alt="Image of the art piece"
        />
      </div>
    </>
  );
}
