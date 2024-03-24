import { useState } from 'react';
import { IoIosSearch as SearchIcon } from 'react-icons/io';

const SearchInput = ({ onSearch }) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
    onSearch(value);
  };

  return (
    <div className='relative'>
      <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 text-light text-md' />
      <input
        type='text'
        value={userInput}
        onChange={handleChange}
        placeholder='Search Coin'
        className='bg-secondary text-light font-semibold pl-11 pr-4 py-2 rounded-md placeholder:text-light'
      />
    </div>
  );
};

export default SearchInput;
