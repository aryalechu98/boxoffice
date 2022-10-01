import React, { memo } from 'react';
import { StyledShowCard } from '../show/ShowCard.Styled';
import { Star } from '../style';



const ShowCard = ({ id, image, name, summary ,onStarClick,isStarred}) => {
  // console.log('show card render')
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';

  return (
    <StyledShowCard>
      <div className='img-wrapper'>
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div className='btns'>
        <a href={`/show/${id}`}>Read more</a>
        <button type="button" onClick={onStarClick} >
          <Star active={isStarred}/>
        </button>
      </div>
    </StyledShowCard>
  );
};

export default memo(ShowCard);
