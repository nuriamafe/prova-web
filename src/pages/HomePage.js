import { clubsInfo } from "../assets/data";
import React, { useState } from "react";
import ClubCard from "../components/ClubCard";
import { Flex } from "antd";

function HomePage() {
  const [clubsData, setClubsData] = useState(clubsInfo);
  return (
    <>
      <Flex gap="small">
        {clubsData &&
          clubsData.map((club) => <ClubCard key={club.id} club={club} />)}
      </Flex>
    </>
  );
}

export default HomePage;
