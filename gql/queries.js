import {gql} from "@apollo/client";

export const GET_CATEGORIES = gql`
  query getCategories{
    getCategories{
      id
      name
    }
  }
`;

export const GET_PRODUCTS = gql`
  query getProducts($store: ID!){
    getProducts(store: $store){
      id
      title
      precie
      discount
      follow
      description
      condition
      priceType
      category
      location
      aditionalDetail{
        detail
      }
      imageGallery{
        url
      }
      store
    }
  }
`

export const GET_STORE = gql`
  query {
    getStore{
      id
      name
    }
  }
`;