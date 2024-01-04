
import Navigation from "./../../_components/_navigation/navbar"

export default async function Scrobbles() {
  const albums = await fetch("/api/albums");

  return(
    <>
      <Navigation/>
      <h1>last.fm</h1>
    </>
  );
}
  