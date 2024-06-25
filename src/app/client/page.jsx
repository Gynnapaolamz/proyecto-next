"use client";
import {gql} from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`
  query {
    characters(page: 2, filter: { name: "rick" }) {
      results {
        id
        name
        image
      }
    }
  }
`;
function ClientPage() {
  const {data} = useSuspenseQuery(query);
  console.log(data);
  return <div>ClientPage</div>;
}

export default ClientPage;
