import useSWR from "swr";
import Layout from "@/components/Layout";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider, GlobalStyles } from "@mantine/core";
import GlobalStyle from "../styles";
import "../components/teststyles.css";
import FavoriteButton from "@/components/FavoriteButton.jsx";
import useLocalStorageState from "use-local-storage-state";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
});

const API_URL = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  // toggle favorite button
  function handleToggleFavorite(slug) {
    setArtPiecesInfo((prevArtPiecesInfo) => {
      const existingPieceIndex = prevArtPiecesInfo.findIndex(
        (piece) => piece.slug === slug
      );

      if (existingPieceIndex !== -1) {
        // Art piece found, update its isFavorite property
        return prevArtPiecesInfo.map((piece, index) =>
          index === existingPieceIndex
            ? { ...piece, isFavorite: !piece.isFavorite }
            : piece
        );
      } else {
        // Art piece not found, add a new one
        return [...prevArtPiecesInfo, { slug, isFavorite: true }];
      }
    });
  }

  return (
    <Layout>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <GlobalStyle />
        <Component
          {...pageProps}
          data={data}
          onToggleFavorite={handleToggleFavorite}
        />
      </MantineProvider>
    </Layout>
  );
}
