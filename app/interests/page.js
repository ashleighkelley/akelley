
import Navigation from "./../_components/_navigation/navbar"
import Dogs from "./../_components/_carousels/dogs"
import MusicTable from "./../_components/_tabels/music"
import Head from 'next/head'

export default async function Interests() {

  const getAlbums = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}interests/scrobbles/api/albums`);
  const albumsResponse = await getAlbums.json();
  //console.log(albumsResponse.data.topalbums.album[0].image);

  return(
    <>
      <Navigation/>
      <div className="text-blue-grey mx-10 my-5 items-center">
        <Head>
          <title>Interests</title>
        </Head>

        <div className="">
          <p>Ashleigh has a profound passion for music, encompassing a diverse range of interests within the realm. Since her teenage years she has dabbled in electric and acoustic guitar, appreciating even the technical aspects of pickup installation and hand-wiring of custom guitar pedals. Additionally, she enjoys attending live shows and collecting memorabilia such as tour posters and vinyl records. During her college years, Ashleigh further immersed herself in the musical world by taking on the role of DJ and music director of the student-run radio station, sharing her eclectic taste and fostering a sense of community through the airwaves.</p>
        </div>
        <MusicTable data={albumsResponse.data.topalbums} />


        <div className="pt-5">
          <p>Ashleigh has two rescue dogs - Cooper (adopted 2014) and Luna (adopted 2022) and loves taking them on walks, hikes, and trips to the beach.</p>
        </div>
        <Dogs/>
      </div>
    </>
  );
  }
  