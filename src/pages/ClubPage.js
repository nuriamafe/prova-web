import { clubsInfo } from "../assets/data";
import { useParams } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";
import { useState } from "react";
import { Flex, Typography } from "antd";
const { Title } = Typography;

function ClubPage() {
  const { clubId } = useParams();
  const [playersData, setPlayersData] = useState(clubsInfo[clubId].players);
  return (
    <Flex vertical>
      <Title className="ClubName">{clubsInfo[clubId].name}</Title>
      <Flex gap="small">
        {playersData &&
          playersData.map((player) => (
            <PlayerCard key={player.name} {...player} />
          ))}
      </Flex>
    </Flex>
  );
}

export default ClubPage;
