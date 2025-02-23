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
`;

export const GET_ALL_PRODUCTS = gql`
  query getAllProducts{
    getAllProducts{
      id
      title
      precie
      discount
      follow
      description
      condition
      priceType
      category{
        id
        name
      }
      location
      aditionalDetail{
        detail
      }
      imageGallery{
        url
      }
      store{
        id
        name
      }
    }
  }
`;

export const GET_STORE = gql`
  query getStore{
    getStore{
      id
      name
    }
  }
`;

export const GET_STORES = gql`
  query getStores{
    getStores{
      name
      urlweb
      description
      type
      address
      city
      state
      country
      courierName
      user
      tagline{
        name
      }
    }
  }
`;