import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    <Link to={`/beanie-baby/${beanieBaby.id}`}>
      <div className='beanie-div'>
        <img className='beanie-img' src={beanieBaby.image} alt={beanieBaby.title}/>
        <div className='beanies'>
          <h3>{beanieBaby.title}</h3>
          <p>{beanieBaby.astroSign}</p>
          <p>{beanieBaby.releaseDate}</p>
        </div>
      </div>
    </Link>

  );

}