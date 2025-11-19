import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setMessage } from '../redux/slices/wordDetailsSlice'
import { useDebounce } from 'use-debounce'
import { axiosRequest } from '../helpers/config'
import SearchResults from './SearchResults'

export default function SearchBox() {
    const [words, setWords] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const { message } = useSelector(state => state.word)
    const dispatch = useDispatch()
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    //find words by search terms
    useEffect(()=>{
         const findWordByTerm = async () => {
             clearState()
            try{
                const response = await axiosRequest.get(`words/${debouncedSearchTerm[0]}/find`)
                if (response.data.data.length > 0) {
                    setWords(response.data.data)
                } else {
                    dispatch(setMessage('No results found!'))
                }
            }catch(error){
                console.log(error);
            }
         }

         if(debouncedSearchTerm[0]){
            findWordByTerm();
         }else{
            clearState()
         }

    },[debouncedSearchTerm[0]])

    //clear the state variables
    const clearState = () => {
        setWords([])
        dispatch(setMessage(''))
    }

    return (
        <div className='row my-4'>
         <div className="col-md-12">
            <div className="d-flex justify-content-between">
                <div className="mb-3 w-50">
                    <input type="text"
                     name="searchTerm"
                     className='form-control p-2 border border-dark border-3 rounded-0'
                     value={searchTerm}
                     onChange={(e)=>setSearchTerm(e.target.value)}
                     placeholder="let's find your word"
                     disabled={false}
                     />
                     {
                        message ? 
                        <div className='mt-2 text-center'>
                            <span className='fw-bold'>
                                {message}
                            </span>
                        </div>
                        :

                        <SearchResults
                        words={words}
                        setSearchTerm={setSearchTerm}
                        clearState={clearState}
                         />
                     }
                </div>
                {/* right menu  */}
            </div>
         </div>
        </div>
    )
}
