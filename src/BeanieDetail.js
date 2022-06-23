import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleBeanie } from './services/fetch-utils';
import './App.css';

export default function BeanieDetail() {
  const [beanieBaby, setBeanieBaby] = useState({});
  const params = useParams();
  // you'll need to track the current beanieBaby in state
  // you'll need to get the route param using the appropriate react router hook

  useEffect(() => {
    async function onload() {
      const data = await getSingleBeanie(params.id);
      setBeanieBaby(data);
    }
    onload();
    // you'll need to define a fetch function here (then call it below) that gets this page's beanie baby and injects it into state using the correct state handler
    
  }, [params.id]); // note that you'll want the id from the url in the dependency array because you want the useEffect callback to get called every time the url changes 

 
    // here's a challenge. How can you link on click to the beanie baby's correct entry in the official beanie baby fan site?
  

  return (
    <>
      <Link to='/'>home</Link>
      <div className='bean-holder'>
        <img className='detailImage' src={beanieBaby.image} alt={beanieBaby.title} />
        <div className='BeanCard'>
          <h2 className='title'>{beanieBaby.title}</h2>
          <p className='zodiac'>zodiac{beanieBaby.astroSign}</p>
          <p className='born'>Born: {beanieBaby.birthday}</p>
          <p className='release-date'>Release date: {beanieBaby.releaseDate}</p>
          <p className='style-number'>Styling Number: {beanieBaby.styleNumber}</p>
        </div>
      </div>
    </>
    
  );   
}
