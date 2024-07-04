
import { gql, request } from 'graphql-request';

// Use environment variable for the API URL
const MASTER_URL = process.env.NEXT_PUBLIC_HYGRAPH_API_URL || 'https://api-ap-south-1.hygraph.com/v2/clx7i2olo04av07wa755q2qyo/master';



// Define the query
const GET_CATEGORIES_QUERY = gql`
  query GetCategories {
    categories {
      id
      name
      bgcolor {
        hex
      }
      icon {
        url
      }
    }
  }
`;

// Function to fetch categories
const getCategories = async () => {
  try {
    const  result = await request(MASTER_URL, GET_CATEGORIES_QUERY);
    return result;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export { getCategories };
