import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton.jsx";

export default function Spotlight({ randomArtPiece, image, name,onToggleFavorite, isFavorite }) {
  return (
    <div className="art-piece">
      <p>{randomArtPiece.artist}</p>
      <Image
        src={randomArtPiece.imageSource}
        width={500}
        height={500}
        alt="Image of the art piece"
      />
      <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />

    </div>
  );
}
