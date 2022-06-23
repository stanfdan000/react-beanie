import './App.css';
import BeanieBaby from './BeanieBaby';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'>
      {
        beanieBabies.map((Bean, i) =>
          <BeanieBaby key={Bean + i} beanieBaby={Bean}/> 
        )
      }
      {/* render out the beanie babies as a list */}
    </div>);
}

