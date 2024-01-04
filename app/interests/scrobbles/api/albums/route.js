import { env } from "@/next.config";

export async function GET() {
    try {
      const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=shleeeeigh&api_key=${process.env.LASTFM_API_KEY}&format=json`);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };