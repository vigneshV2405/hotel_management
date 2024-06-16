import React, { useEffect, useState } from 'react';
import './search.css';
import Searchinpt from './searchinpt';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { back_url } from '../../../constants/links';

function Search() {
  const [ text , setText ] = useState('');
  const [ results , setResults ] = useState({
    message : 'none',
    searches : []
  });
  const navigate = useNavigate();

  useEffect(()=>{
    var t = setTimeout(()=>{
      if(text.length){
        fetch(`${back_url}searchbyname/${text}`).then((res)=>{
        res.json().then((resp)=>{
          setResults({message:(resp.filtered.length===0?'not found':'found'),searches:[...resp.filtered]})
        })
      })
      }
      if(text.length===0){
        setResults({message:'none',searches:[]})
      }
    },500)
    return ()=>{
      clearTimeout(t)
    }
  },[text])

  function Result({hotel}){
    return(
      <Link to={`/hotel/${hotel._id}`} className='search-result' >
        <span>{hotel.hotelname}</span>
      </Link>
    )
  }
  function Nomatch(){
    return(
      <div className='' >
        <span>no match found</span>
      </div>
    )
  }
  function Entersmthng(){
    return(
      <div>
        <span>type in for results</span>
      </div>
    )
  }

  return (
    <div className='main-s-container' >
      <div className='search-container' >
        <Searchinpt text={text} setText={setText}/>
      </div>
      <div className='results-container' >
        <div className='results-subcontainer' >
          {
            text.length===0?<Entersmthng/>:
            results.message==='not found'?<Nomatch/>:
            results.searches.map((h)=>{
              return(
                <Result hotel={h} key={h._id}  />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Search