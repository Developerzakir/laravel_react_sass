import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

  const persistWordDetails = (word) => {
        dispatch(setWordDetails(word))
        clearState()

        if(setSearchTerm) {
            setSearchTerm('')
        }
  }

export default function SearchResults({words,clearState,setSearchTerm}) {
  return (
    <ul className='list-group my-3'>
        {
            words?.map(word=>(
                <li 
                className='list-group-item border border-primary border-2 rounded-0 mb-2'
                key={word.id}>
                    <div className='d-flex justify-content-between'
                    onClick={()=>persistWordDetails(word)}
                    style={{cursor:'pointer'}}>
                        <span className='fw-bold'>
                            {word.name}
                        </span>
                        <span className="fw-bold">
                            <i className="bi bi-arrow-right"></i>
                        </span>
                    </div>
                </li>
            ))
        }
    </ul>
  )
}
