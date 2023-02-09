import { gql } from "@faststore/graphql-utils";
import { useQuery } from "../graphql/useQuery";


const categoryTree = gql`query ($treeLevel: int) {
    categories(treeLevel: $treeLevel){
      id,
      name,
      children {
        id, 
        name, 
      }
    }
  }`

const [id: number, name: string] = useQuery(categoryTree)