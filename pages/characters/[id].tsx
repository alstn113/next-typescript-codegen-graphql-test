import { getDataFromTree } from "@apollo/client/react/ssr";
import { get } from "lodash";
import withApollo from "../../lib/withApollo";
import { useCharacterQuery } from "../../generated";

function SinglePageCharacter({ query }) {
  const id = get(query, "id");
  const { data, loading, error } = useCharacterQuery({ variables: { id } });
  if (loading) return <div>loading...</div>;
  if (error) return <div>Error :(</div>;
  return <div>{JSON.stringify(data)}</div>;
}

export default withApollo(SinglePageCharacter, { getDataFromTree });
