import { clubsInfo } from "../assets/data";
import React, { useState } from "react";
import ClubCard from "../components/ClubCard";
import { Flex, Input } from "antd";

function HomePage() {
  const [clubs, setClubs] = useState(clubsInfo);
  const [clubsData, setClubsData] = useState(clubsInfo);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchClubs(e.target.value);
  };

  const searchClubs = (str) => {
    let filteredList;
    filteredList = clubsData.filter((club) => {
      return club.name.toLowerCase().includes(str);
    });

    setClubs(filteredList);
  };

  return (
    <>
      <Flex vertical align="center">
        <Input
          className="SearchBar"
          placeholder="Search a club"
          onChange={handleSearch}
          size="large"
          allowClear
        />
        <Flex className="CardContainer" gap="small">
          {clubs && clubs.map((club) => <ClubCard key={club.id} club={club} />)}
        </Flex>
      </Flex>
    </>
  );
}

export default HomePage;
