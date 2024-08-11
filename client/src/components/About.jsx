import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const About = () => {

    const {id} = useParams();
    const [aboutData, setAboutData] = useState({});
    const imageSize = 'landscape_incredible'

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
                <div>
                    <div >
                        <img src= {`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`} alt={data.name} />
                    </div>
                    <h1 className='text-center text-[8vmin] py-3 font-bold' > {data.name}</h1>
                    <p>{data.description}</p>
                    <h1 className='font-bold' >Historietas de {data.name}</h1>
                    <ul className=''>
                        {
                            data.comics.items.map((comic)=>{
                                return (
                                    <div>
                                        <li className=''>
                                            <p className='text-[2.25vmin]' key={comic.id} >{comic.name}</p>
                                        </li>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>                
            )
        })}
    </div>
  )
}

export default About