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
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  

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

  function addComment(slug, newComment) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) => {
          if (pieceInfo.slug === slug) {
            return pieceInfo.comments
              ? { ...pieceInfo, comments: [...pieceInfo.comments, newComment] }
              : { ...pieceInfo, comments: [newComment] };
          } else {
            return pieceInfo;
          }
        })
      );
    } else {
      setArtPiecesInfo([
        ...artPiecesInfo,
        { slug, isFavorite: false, comments: [newComment] },
      ]);
    }
  }

console.log(artPiecesInfo);
  return (
    <Layout>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <GlobalStyle />
        <Component
          {...pageProps}
          pieces={isLoading || error ? [] : data}
          onToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
          addComment={addComment}

        />
      </MantineProvider>
    </Layout>
  );
}
