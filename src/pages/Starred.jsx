import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainPageLayout from '../components/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useShows } from '../misc/custom-hooks';
import { searchActions } from '../store/search';
import { showActions } from '../store/show';

const Starred = () => {
  
 const [starred]=useShows()
 const dispatch=useDispatch()
 const result=useSelector(state=>state.searchInput.result)

 const isLoading=useSelector(state=>state.show.isLoading)
 const error=useSelector(state=>state.show.error)
 
 useEffect(()=>{
    if(starred && starred.length > 0){
      const promises = starred.map(showId=> apiGet(`/shows/${showId}`))
      Promise.all(promises)
        .then(apiData=>apiData.map(show=>({show})))
        .then(results=>{
        dispatch(searchActions.onSetResult(results))
        dispatch(showActions.setIsloading())

      }).catch(err=>{
        dispatch(showActions.setError(err.message))
        dispatch(showActions.setIsloading())

      })
    } else {
      dispatch(showActions.setIsloading())
    }
 },[starred,dispatch])
  return (
    <MainPageLayout>
      { isLoading && <div>Shows are still Loading</div>} {error && <div>Error Occured : {error}</div>}{!isLoading && !result && <div>No shows were added</div>}
      {!isLoading && !error && result && <ShowGrid/>}
      </MainPageLayout>
  )
}

export default Starred