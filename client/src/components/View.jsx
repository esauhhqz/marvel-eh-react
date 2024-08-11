import React from 'react'
import { useNavigate } from 'react-router-dom'

const View = ({characterInformation}) => {
  const imageSize = 'standard_medium'
  const navigate = useNavigate();

  if (characterInformation && characterInformation.results && characterInformation.results.length === 0){
    return (
      <div className='w-full h-[100vh] flex justify-center align-middle items-center' >
        <h1 className='text-[7vmin]'> Personaje no encontrado</h1>
      </div>
    )
  }

  return (
    <div className='w-full h-full p-10 md:p-5 justify-center  items-center align-middle'>
        <div  >
          <table className=''>
            <thead>
              <tr>              
                <th>Image</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
              {characterInformation && characterInformation.results.map((data) => {
                  
                  return (
                    
                        <tbody>
                          <tr >
                            <td >
                              <img className='p-2 ' key={data.id}  src= {`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`} alt={characterInformation.name} />
                            </td>
                            <td>
                              <p className='font-bold under'>{data.name}</p>
                            </td>
                            <td>
                              <button  className='bg-red-700 p-1.5 rounded-md' onClick={() => navigate(`/${data.id}`)} >Description</button>
                            </td>
                            <td>

                              <button  className='bg-blue-800 p-1.5 rounded-md' onClick={() => navigate(`/${data.id}/comics/${data.name}`)} >Comics</button>
                            </td>
                            <td>
                              <button  className='bg-green-800 p-1.5 rounded-md' onClick={() => navigate(`/${data.id}/series/${data.name}`)}>Series</button>
                              
                            </td>
                          </tr>
                        </tbody>
                        
                        
                      )
                    })}
          </table>

        </div>
    </div>
  )
}

export default View