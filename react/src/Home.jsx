import React from 'react'
import SearchBox from './words/SearchBox'

export default function Home() {
  return (
    <div className='card main__card border border-dark border-3 bg-white my-5 rounded-0 shadow'>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <SearchBox />
            {/* word details  */}
          </div>
        </div>
      </div>

      <div className="card-footer bg-white">

      </div>
    </div>
  )
}
