import { Games } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatformIconLits from "./PlatformIconLits";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>

        <PlatformIconLits
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconLits>
      </CardBody>
    </Card>
  );
};

export default GameCard;
