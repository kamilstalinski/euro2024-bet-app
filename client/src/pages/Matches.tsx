import axios from "axios";
import { useEffect, useState } from "react";

interface MatchesDataProps {
  _id: string;
  matchId: number;
  homeTeam: string;
  awayTeam: string;
  group: string;
  homeScore: number;
  awayScore: number;
  __v: number;
}

export default function Matches() {
  const [matchesData, setMatchesData] = useState<MatchesDataProps[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/matches/matchesData", {
          withCredentials: true,
        });
        setMatchesData(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(matchesData);
  }, [matchesData]);

  return <div>Wytypuj swoje wyniki!</div>;
}
