import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error,data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);

  if(loading) {
    return "loading..."
  } 
  if(data && data.movies) {
    return data.movies.map((movie) => <h1>{movie.id}</h1>)
  }
};
export default Home;
