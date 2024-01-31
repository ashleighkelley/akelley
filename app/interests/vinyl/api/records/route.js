import { NextResponse } from "next/server";

export async function GET() {

    try {

      const res = await fetch(`https://api.discogs.com/users/kelleya92/collection/folders/0/releases&format=json`);
      const data = await res.json();
      
      return NextResponse.json({ data: data },{status:201});

    } catch (err) {
      return NextResponse.json({ error: 'Internal Server Error' },{status:500});
    }

  };