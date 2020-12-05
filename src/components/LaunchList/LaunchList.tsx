import * as React from 'react';
import { LaunchListQuery } from '../../generated/graphql';
import './style.css';
export interface OwnProps {
  handleIdChange: (newId: number) => void;
}
interface Props extends OwnProps {
  data: LaunchListQuery;
}
const className = 'LaunchList';
const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => (
  <div className={className}>
    <h3>Launches</h3>

    <ol>
      {

      data.launches?.map(
        (launch, i) =>{
            return(<div>
                 <li
              key={i}
              
              onClick={() => handleIdChange(launch?.flight_number!)}              >
              {launch?.mission_name} ({launch?.launch_year})
            </li>
            <hr/>
            </div>
           
            )
           
          }
        )
      }
    </ol>
  
  </div>
);

export default LaunchList;
