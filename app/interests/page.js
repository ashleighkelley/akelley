import Navigation from "./../_components/_navigation/navbar"
import Dogs from "./../_components/_carousels/dogs"
import Vinyl from "../_components/_tabels/vinyl"
import Scrobbles from "../_components/_carousels/music"

export default async function Interests() {

  const getAlbums = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}interests/api/scrobbles`);
  const getRecords = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}interests/api/vinyl`);

  const [albumsResponse, recordsResponse] = await Promise.all([getAlbums.json(), getRecords.json()])

  return(
    <>
      <Navigation/>
      <div className="text-blue-grey mx-10 my-5 w-2/3">
        <div className="pt-5">
          <p>Ashleigh has a profound passion for music, encompassing a diverse range of interests within the realm. Since her teenage years she has dabbled in electric and acoustic guitar, appreciating even the technical aspects of pickup installation and hand-wiring of custom guitar pedals. Additionally, she enjoys attending live shows and collecting memorabilia such as tour posters and vinyl records. During her college years, Ashleigh further immersed herself in the musical world by taking on the role of DJ and music director of the student-run radio station, sharing her eclectic taste and fostering a sense of community through the airwaves.</p>
        </div>
        <Scrobbles data={albumsResponse.data.topalbums} />
        <Vinyl data={recordsResponse.data.releases}/>

        <div className="pt-5">
          <p>Ashleigh has two rescue dogs - Cooper (adopted 2014) and Luna (adopted 2022) and enjoys taking them on walks, hikes, and trips to the beach.</p>
        </div>
        <Dogs/>
      </div>
    </>
  );
  }
  