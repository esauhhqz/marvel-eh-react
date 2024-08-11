import React, { useState } from 'react'
import axios from 'axios'
import View from './View';

const Search = () => {

  const [character, setCharacter] = useState('');
  const [characterData, setCharacterData] = useState({});
  const handleSubmit = async(e) => {
    e.preventDefault();

    const sendData = await axios.post('http://localhost:5000', {character})
    setCharacterData(sendData.data)

    console.log(characterData)

  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div className='w-full h-full text-center p-5 cursor-pointer'>
            <h1 className='p-5 text-[7.5vmin] font-bold'>PERSONAJES DE MARVEL</h1>  
            <input className='border border-black rounded-md' onChange={e=>setCharacter(e.target.value)} type='text' />
            <button className='rounded-md bg-blue-500'>Buscar</button>
            <View characterInformation = {characterData.data} ></View>
          </div>          

          <div className='w-full h-full text-center'> 
          </div> 
            
        </form>
        
    </div>
  )
}

export default Search