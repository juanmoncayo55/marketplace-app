import {gql} from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct($input: ProductInput, $files: [Upload!]){
    createProduct(input: $input, files: $files)
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($id: ID!, $input: ProductInput, $files: [Upload], $existsImage: [ImageGalleryInput]){
    updateProduct(id: $id, input: $input, files: $files, existsImage: $existsImage){
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

export const REMOVE_PRODUCT = gql`
  mutation deleteProduct($id: ID!){
    deleteProduct(id: $id)
  }
`

export const REMOVE_STORE = gql`
  mutation removeStore{
    removeStore
  }
`