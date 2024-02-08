import useSWR from "swr";
import Layout from "@/components/Layout";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider, GlobalStyles } from "@mantine/core";
import GlobalStyle from "../styles";
import "../components/teststyles.css";
import FavoriteButton from "@/components/FavoriteButton.jsx";
import useLocalStorageState from "use-local-storage-state";
import { useImmerLocalStorageState } from "@/resources/lib/hook/useImmerLocalStorageState";


const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
});

const API_URL = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(API_URL, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  // toggle favorite button
  // function handleToggleFavorite(slug) {
  //   setArtPiecesInfo((prevArtPiecesInfo) => {
  //     const existingPieceIndex = prevArtPiecesInfo.findIndex(
  //       (piece) => piece.slug === slug
  //     );

  //     if (existingPieceIndex !== -1) {
  //       // Art piece found, update its isFavorite property
  //       return prevArtPiecesInfo.map((piece, index) =>
  //         index === existingPieceIndex
  //           ? { ...piece, isFavorite: !piece.isFavorite }
  //           : piece
  //       );
  //     } else {
  //       // Art piece not found, add a new one
  //       return [...prevArtPiecesInfo, { slug, isFavorite: true }];
  //     }
  //   });
  // }
  // console.log("========>",handleToggleFavorite);

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  return (
    <Layout>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <GlobalStyle />
        <Component
          {...pageProps}
          pieces={isLoading || error ? [] : data}
          onToggleFavorite={handleToggleFavorite}

        />
      </MantineProvider>
    </Layout>
  );
}
