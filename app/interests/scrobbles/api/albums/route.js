import { NextResponse } from "next/server";

export async function GET() {

    try {

      const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&period=3month&user=shleeeeigh&api_key=${process.env.LASTFM_API_KEY}&format=json`);
      const data = await res.json();
      
      return NextResponse.json({ data: data },{status:201});

    } catch (err) {
      return NextResponse.json({ error: 'Internal Server Error' },{status:500});
    }

  };