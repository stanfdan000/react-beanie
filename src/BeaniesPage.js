import { useEffect, useState, } from 'react';
import './App.css';
import { getBeanieBabies } from './services/fetch-utils';
import BeaniesList from './BeaniesList';

function App() {
  const [search, setSearch] = useState(''); 
  const [query, setQuery] = useState('');
  const [beanieBabies, setBeanieBabies] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 40;
  
  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const beanies = await getBeanieBabies(from, to, search);

      setBeanieBabies(beanies);
    }

    fetch();
  }, [page, search]); // what can you do with this array to trigger a fetch every time the page changes?

  function handleSearch(e){
    e.preventDefault();
    setSearch(query);
  }
    


  return (
    <>
      <h2>Current Page {page}</h2>
      <form on onSubmit={handleSearch}>
        <h3>search</h3>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button type='submit'>search</button>
      </form>
      <div className='buttons'>
        {/* on click, this button should decrement the page in state  */}
        {/* also, disable this button when you are on the first page */}
        <button onClick={() => setPage(page - 1)}
          disabled={page === 1}>Previous Page</button>
        {/* on click, this button should increment the page in state  */}
        <button onClick={() => setPage(page + 1)}
          disabled={beanieBabies.length < perPage}>Next Page</button>
      </div>
      {/* pass the beanie babies into the BeaniesList component */}
      
      <BeaniesList beanieBabies={beanieBabies} />
    </>
  );
}

export default App;
