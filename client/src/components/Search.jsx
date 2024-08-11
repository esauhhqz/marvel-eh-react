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
          <div className='w-full h-full text-center p-5 cursor-pointer text-white'>
            <h1 className='p-5 text-[7.5vmin] font-bold'>Marvel's Heros</h1>  
            <p>Type a Marvel's character name</p>
            <input className='border border-white rounded-md' onChange={e=>setCharacter(e.target.value)} type='text' required />
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