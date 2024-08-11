import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const SearchComic = () => {
    const {offset} = useParams();
    const {name} = useParams();
    const [aboutData, setAboutData] = useState({});
    const imageSize = 'standard_medium'

    const navigate = useNavigate();
    const goSearch = () => {

        navigate(`/searchComic/20/`);
    }

    useEffect(()=>{
        const fetchData = async() =>{
            const response =  await axios.post('http://localhost:5000/comics', {offset})
            setAboutData(response.data.data)
        }
        fetchData()
    }, [offset])

    if (aboutData.length == 0) return <div>Loading...</div>;

  return (
      <div>
        <div className='w-full h-full text-white'>
            <h1 className='text-center text-[8vmin] py-3 font-bold' > {name}</h1>
            <h1 className='text-[3.75vmin] font-bold p-3 text-center under' >All Comics</h1>
            <div  >
                <div >
                    <div id="page-no-dropdown">
                    <select
                        name="page-number" >
                        {Array.from(Array(aboutData.total) / 20)
                            .map((e, i) => i + 1)
                            .map((val) => {
                            return <option key={val}>{val}</option>;
                            })}
                        </select>
                    </div>

                    <div  >
                        <table className=''>
                            <thead>
                                <tr>              
                                <th>Id</th>
                                <th>Image</th>
                                <th>title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {aboutData.results && aboutData.results.map((data) =>{
                            
                                    return (
                                        
                                                <tr >
                                                <td>
                                                <p className='font-bold '>{data.id}</p>
                                                </td>
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

                        <div id="btn-container">
                            <button className='bg-red-700 rounded-md' >Prev</button>
                            <button className='bg-red-700 rounded-md' >Next</button>
                        </div>
                    </div>

                </div>                
                
            </div>                
            
            <div>
                <button onClick={goSearch} className='bg-blue-500 p-1.5 rounded-md' >Buscar</button>
            </div>
        </div>
    </div>
  )
}

export default SearchComic