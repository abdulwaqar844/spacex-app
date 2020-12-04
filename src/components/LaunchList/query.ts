import gql from 'graphql-tag';
  
 const QUERY_LAUNCH_LIST = gql`
  query LaunchList {
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`;
export default QUERY_LAUNCH_LIST