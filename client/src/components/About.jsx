import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const About = () => {

    const {id} = useParams();
    const [aboutData, setAboutData] = useState({});
    const imageSize = 'landscape_incredible'

    const navigate = useNavigate();
    const goSearch = () => {
        navigate(-1);
    }

    useEffect(()=>{
        const fetchData = async() =>{
            const response =  await axios.post('http://localhost:5000/charInfo', {id})
            setAboutData(response.data.data)
        }
        fetchData()
    }, [id])

  return (
    <div>
        {aboutData.results && aboutData.results.map((data) =>{
            
            return (
                <div className='w-full h-full text-white'>
                    <div className='flex justify-center' >
                        <img src= {`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`} alt={data.name} />
                    </div>
                    <h1 className='text-center text-[8vmin] py-3 font-bold' > {data.name}</h1>
                    <p>{data.description}</p>
                    <h1 className='text-[3.75vmin] font-bold p-3 text-center under' >Character's Comics</h1>
                    <ul className='p-3 flex flex-wrap justify-center'>
                        {
                            data.comics.items.map((comic)=>{
                                return (
                                    <div>
                                        <li className='text-center py-2'>
                                            <p className='text-[2.25vmin]' key={comic.id} >{comic.name}</p>
                                        </li>
                                    </div>
                                )
                            })
                        }
                    </ul>

                    <h1 className='text-[3.75vmin] font-bold p-3 text-center under' >Character's Series</h1>
                    <ul className='p-3 flex flex-wrap justify-center'>
                        {
                            data.series.items.map((serie)=>{
                                return (
                                    <div>
                                        <li className='text-center py-2 '>
                                            <p className='text-[2.25vmin]' key={serie.id} >{serie.name}</p>
                                        </li>
                                    </div>
                                )
                            })
                        }
                    </ul>

                    <div>
                        <button onClick={goSearch} className='bg-blue-500 p-1.5 rounded-md' >Buscar</button>
                    </div>

                </div>                
            )
        })}
    </div>
  )
}

export default About