import React from 'react';
import ActorCard from './ActorCard';
import { useSelector } from 'react-redux'

import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../style';

const ActorGrid = () => {
  const result=useSelector(state=>state.searchInput.result)
  
  return (
    <FlexGrid>
      {result.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
