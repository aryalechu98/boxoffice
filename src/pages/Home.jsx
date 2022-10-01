import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActorGrid from '../components/actor/ActorGrid'
import CustomRadio from '../components/CustomRadio'
import MainPageLayout from '../components/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid'
import { apiGet } from '../misc/config'
import { searchActions } from '../store/search'
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled'


const renderResult = (result) =>{
  if(result && result.length === 0 ){
    return <div>No results</div>
  }
  if(result && result.length > 0){
    return result[0].show 
    ? <ShowGrid/>
    : <ActorGrid/>
    

  }
  // console.log(result)
  return null;
}
const Home = () => {
  const input=useSelector(state=>state.searchInput.input)
  const result=useSelector(state=>state.searchInput.result)
  const searchOption=useSelector(state=>state.searchInput.searchOption)

  const dispatch=useDispatch()
  const onChangeHandler =useCallback( (e) =>{
    dispatch(searchActions.onInputChange(e.target.value))
  },[dispatch])
  const onSearchHandler = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result=>dispatch(searchActions.onSetResult(result)))
    // console.log(result[0].show)
  }
  const keyDownHandler = (e) =>{
    if(e.keyCode === 13){
      onSearchHandler()
    }
    
  }
  
  const onRadioChangeHandler=useCallback((e) =>{
    dispatch(searchActions.onRadioChange(e.target.value))
    // onSearchHandler()
  },[dispatch]) 
  const isShowsSearch= searchOption === 'shows';

  
  return (
    <MainPageLayout>
      <SearchInput 
      placeholder='Search for something'
      type="text" onKeyDown={keyDownHandler} onChange={onChangeHandler} value={input}/>
      <RadioInputsWrapper>
        <div>
        <CustomRadio
            label='Shows'
            id='shows-search'
            value='shows'
            checked={isShowsSearch}
            onChange={onRadioChangeHandler}
          />
        </div>
        <div>

        <CustomRadio
            label='Actors'
            id='actors-search'
            value='people'
            checked={!isShowsSearch}
            onChange={onRadioChangeHandler}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
      <button onClick={onSearchHandler}>Search</button>
      </SearchButtonWrapper>
      {renderResult(result)}
    </MainPageLayout>
  )
}

export default Home