import React from 'react'
import { useSelector } from 'react-redux'
import ShowCard from './ShowCard'
import IMAGE_NOT_FIND from '../../images/not-found.png'
import { FlexGrid } from '../style'
import { useShows } from '../../misc/custom-hooks'


const ShowGrid = () => {
  const result=useSelector(state=>state.searchInput.result)
  // console.log(result)
 const [starredShow,dispatchStarred]=useShows()

  return (
    <FlexGrid>
      {result.map(({ show }) =>{
        const isStarred=starredShow.includes(show.id)
        const onStarClick = () =>{
          if(isStarred){
            dispatchStarred({type:'REMOVE',showId: show.id})
          } else {
            dispatchStarred({type:'ADD', showId: show.id})
          }
        }
        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FIND}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        )
      }
        
      )}
    </FlexGrid>
  );
}

export default ShowGrid