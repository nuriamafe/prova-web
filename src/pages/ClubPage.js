import { clubsInfo } from "../assets/data";
import { useParams } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";
import { useState } from "react";
import { Flex, Typography, Input, Image } from "antd";
const { Title } = Typography;

function ClubPage() {
  const { clubId } = useParams();
  const [players, setPlayers] = useState(clubsInfo[clubId].players);
  const [playersData, setPlayersData] = useState(clubsInfo[clubId].players);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchPlayers(e.target.value);
  };

  const searchPlayers = (str) => {
    let filteredList;
    filteredList = playersData.filter((club) => {
      return club.name.toLowerCase().includes(str);
    });

    setPlayers(filteredList);
  };

  return (
    <Flex vertical align="center">
      <Input
        className="SearchBar"
        placeholder="Search a player"
        onChange={handleSearch}
        size="large"
        allowClear
      />
      <Title className="ClubName">{clubsInfo[clubId].name}</Title>
      {clubsInfo[clubId].teamPhoto !== "" && (
        <div className="TeamPhoto">
          <Image src={clubsInfo[clubId].teamPhoto} />
        </div>
      )}
      <Flex className="CardContainer" gap="small">
        {players &&
          players.map((player) => <PlayerCard key={player.name} {...player} />)}
      </Flex>
    </Flex>
  );
}

export default ClubPage;
