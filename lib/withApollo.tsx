import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { useRouter } from "next/router";
import nextWithApollo from "next-with-apollo";

export const withApollo = nextWithApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      ssrMode: typeof window === undefined, //nodejs는 window object가 없음
      link: new HttpLink({
        uri: "https://rickandmortyapi.com/graphql",
      }),
      headers: {
        ...(headers as Record<string, string>), //쿠키같은 거 저장
      },
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...router} />
        </ApolloProvider>
      );
    },
  }
);

export default withApollo;
