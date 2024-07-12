
import { gql, request } from 'graphql-request';


const MASTER_URL = process.env.NEXT_PUBLIC_HYGRAPH_API_URL || 'https://api-ap-south-1.hygraph.com/v2/clx7i2olo04av07wa755q2qyo/master';




const GET_CATEGORIES_QUERY = gql`
 query Category {
  categories {
    bgcolor {
      hex
    }
    id
    name
    icon {
      url
    }
  }
}`;

// Function to fetch categories
const getCategories = async () => {
  try {
    const  result = await request(MASTER_URL, GET_CATEGORIES_QUERY);
    console.log(result)
    return result;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export { getCategories };
