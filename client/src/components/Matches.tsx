import MatchesForm from "@/components/MatchesForm";
import axios from "axios";
import { useEffect, useState } from "react";
import HeaderLink from "./layout/HeaderLink";
import Header from "./layout/Header";

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
  const [matchesData, setMatchesData1] = useState<MatchesDataProps[]>([]);
  const [selectedView, setSelectedView] = useState("matches");

  const handleClick = (selectedView: string) => {
    setSelectedView(selectedView);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/matches/matchesData", {
          withCredentials: true,
        });

        data.sort((a: MatchesDataProps, b: MatchesDataProps) =>
          a.group.localeCompare(b.group),
        );

        setMatchesData1(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <Header>
        <HeaderLink
          links={["matches", "players", "champions"]}
          labels={["Mecze", "Zawodnicy", "Mistrzowie"]}
          selectedView={selectedView}
          handleClick={handleClick}
        />
      </Header>
      <div className='container mt-8'>
        <h1>Wypełnij formularz do 13.06 do godziny 11:00</h1>
        <MatchesForm matchesData={matchesData} />
      </div>
    </>
  );
}
