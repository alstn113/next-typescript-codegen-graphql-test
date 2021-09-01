import Image from "next/image";
import Link from "next/link";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../lib/withApollo";
import { useCharactersQuery } from "../generated";

function Home() {
  const { data, loading, error } = useCharactersQuery();
  if (loading) return <div>loading...</div>;
  if (error) return <div>Error :(</div>;
  return (
    <div>
      {data?.characters?.results?.map((character) => (
        <div key={character?.id}>
          <Image src={character?.image} alt={character?.name} width="200px" height="200px" />
          <Link href="/characters/[id]" as={`/characters/${character?.id}`}>
            {character?.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default withApollo(Home, { getDataFromTree });
