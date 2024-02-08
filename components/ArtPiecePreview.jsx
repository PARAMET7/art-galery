import { Card, Image, Text, Group, RingProgress } from "@mantine/core";
import classes from "./ArtPiecePreview.module.css";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton.jsx";

export function ArtPiecePreview({
  image,
  title = "",
  artist,
  slug,
  isFavorite,
}) {
  return (
    <Link href={`/art-pieces/${slug}`}>
      <Card withBorder padding="lg" className={classes.card}>
        <Card.Section>
          <Image src={image} alt={title} height={400} />
        </Card.Section>

        <Group justify="space-between" mt="xl">
          <Text fz="sm" fw={700} className={classes.title}>
            {title}
            <FavoriteButton isFavorite={isFavorite} />
          </Text>
          <Group gap={5}>
            <Text fz="sm" fw={700}>
              {artist}
            </Text>
          </Group>
        </Group>
      </Card>
    </Link>
  );
}
