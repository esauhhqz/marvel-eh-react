import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const AboutCharSeries = () => {
    const {id} = useParams();
    const {name} = useParams();
    const [aboutData, setAboutData] = useState({});
    const imageSize = 'standard_fantastic'

    const navigate = useNavigate();
    const goSearch = () => {
        navigate(-1);
    }

    useEffect(()=>{
        const fetchData = async() =>{
            const response =  await axios.post('http://localhost:5000/charSeriesInfo', {id})
            setAboutData(response.data.data)
        }
        fetchData()
    }, [id])
  return (
      <div>
        <div className='w-full h-full text-white'>
        <h1 className='text-center text-[8vmin] py-3 font-bold' > {name}</h1>
        <h1 className='text-[3.75vmin] font-bold p-3 text-center under' >Series</h1>
        <div  >
            <table className=''>
            <thead>
                <tr>              
                <th>Image</th>
                <th>Description</th>
                </tr>
            </thead>
            <tbody>
        {aboutData.results && aboutData.results.map((data) =>{
            
            return (
                
                        <tr >
                        <td >
                            <div className='flex justify-center' >
                                <img src= {`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`} alt={data.name} />
                            </div>
                        </td>
                        <td>
                            <p className='font-bold under'>{data.title}</p>
                            <p className=''>{data.description}</p>
                        </td>
                        
                        </tr>                    
                )
            })}
            </tbody>
            
            </table>

        </div>                
            
            </div>                
         <div>
            <button onClick={goSearch} className='bg-blue-500 p-1.5 rounded-md' >Buscar</button>
        </div>
    </div>
  )
}

export default AboutCharSeries