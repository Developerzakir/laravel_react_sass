import React from 'react'
import { Link } from 'react-router'

export default function MenuItems() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
          <Link to="/" className="btn btn-white border border-dark 
                border-2 rounded-0 shadow-sm d-flex flex-column align-items-center">
              <span className="fw-bold">Home</span>
              <i className="bi bi-house-door"></i>
          </Link>

          <Link to="/register" className="btn btn-white border border-dark 
                        border-2 rounded-0 shadow-sm d-flex flex-column align-items-center ms-1">
              <span className="fw-bold">Register</span>
              <i className="bi bi-person-add"></i>
          </Link>

          <Link to="/login" className="btn btn-white border border-dark 
                        border-2 rounded-0 shadow-sm d-flex flex-column align-items-center ms-1">
              <span className="fw-bold">Login</span>
              <i className="bi bi-person-fill-up"></i>
          </Link>
           <Link to="/browse/words" className="btn btn-white border border-dark 
                border-2 rounded-0 shadow-sm d-flex flex-column align-items-center ms-1">
                    <span className="fw-bold">Browse</span>
                    <i className="bi bi-binoculars-fill"></i>
            </Link>

             <button className="btn btn-white border border-dark 
                border-2 rounded-0 shadow-sm d-flex flex-column align-items-center ms-1"
                onClick={() => console.log('rand word')}
                 disabled={false}
            >
                    <span className="fw-bold">Random</span>
                    <i className="bi bi-shuffle"></i>
            </button>
    </div>
  )
}
