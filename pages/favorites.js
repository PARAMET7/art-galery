import Image from "next/image";
import isFavorite from "@/components/FavoriteButton";

export default function favorite() {
  return (
    <>
      <h1>Your Favourite Pieces</h1>

      <button isFavorite={isFavorite} />
    </>
  );
}
