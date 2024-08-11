import React from 'react'
import { useNavigate } from 'react-router-dom'

const View = ({characterInformation}) => {
  const imageSize = 'standard_medium'
  const navigate = useNavigate();
  return (
    <div className='w-full h-full'>
        {characterInformation && characterInformation.results.map((data) => {
            
            return (
                <img key={data.id} onClick={() => navigate(`/${data.id}`)} src= {`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`} alt={characterInformation.name} />
            )
        })}
    </div>
  )
}

export default View