import React from 'react';
import "./Cards.scss";

function Cards() {
  return (
    <div className='col-6 container mt-5'>
      <ul className='d-flex flex-wrap'>
        <div className="card mb-5 position-relative ms-4 me-4" style={{width: '18rem'}}>
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLeDZOOOe39EylZoDSJteMkbX8lqS4JT-SvEZ8W2M6s1DRBZMd" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Top Gun: Maverick</h5>
            <span className='price'>
              400 $
            </span>
          </div>
          <button className='cards__btn'>
            <span>
              +
            </span>
          </button>
        </div>
        <div className="card mb-5 position-relative ms-4 me-4" style={{width: '18rem'}}>
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Interstellar</h5>
            <span className='price'>
              100 $
            </span>
          </div>
          <button className='cards__btn'>
            <span>
              +
            </span>
          </button>
        </div>
        <div className="card mb-5 position-relative ms-4 me-4" style={{width: '18rem'}}>
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0D3MtvOmpQmVKcXErPlpIG8wlBLc0g8bBP5V8SUPXp3ezdfWi" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Three Steps Above Heaven</h5>
            <span className='price'>
              200 $
            </span>
          </div>
          <button className='cards__btn'>
            <span>
              +
            </span>
          </button>
        </div>
        <div className="card mb-5 position-relative ms-4 me-4" style={{width: '18rem'}}>
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjS9fdNfe1iYIwqQA7mbedrljB8e9dobO8KjxQUKZ6VJiVBzqp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Ella and the Little Sorcerer</h5>
            <span className='price'>
              50 $
            </span>
          </div>
          <button className='cards__btn'>
            <span>
              +
            </span>
          </button>
        </div>
        <div className="card mb-5 position-relative ms-4 me-4" style={{width: '18rem'}}>
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDfDlYaBnkA7f6GPTgM7U1tomWGCUtEVNkUWd12O8JMwOhvDWB" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Haute couture</h5>
            <span className='price'>
              400 $
            </span>
          </div>
          <button className='cards__btn'>
            <span>
              +
            </span>
          </button>
        </div>
        <div className="card mb-5 position-relative ms-4 me-4" style={{width: '18rem'}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAgfCXYxiPFBk_cdJX-Bk3PE9fH_xtdPQLUxLp0TZnpVv9GIy" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Drive My Car</h5>
            <span className='price'>
              100 $
            </span>
          </div>
          <button className='cards__btn'>
            <span>
              +
            </span>
          </button>
        </div>
        <div className="card mb-5 position-relative ms-4 me-4" style={{width: '18rem'}}>
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDJs2IMlHTGc25HKnb6HmKLvVxq_teJ05qFksqA4CDs2FUWl_L" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">C'mon C'mon</h5>
            <span className='price'>
              200 $
            </span>
          </div>
          <button className='cards__btn'>
            <span>
              +
            </span>
          </button>
        </div>
        <div className="card mb-5 position-relative ms-4 me-4" style={{width: '18rem'}}>
          <img src="https://m.media-amazon.com/images/M/MV5BZDkxMDBiYWQtMDZhMC00ODhhLWE5NTItZDQzZmQ2NDZkNmM5XkEyXkFqcGdeQXVyNDM1ODc2NzE@._V1_FMjpg_UX1000_.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Offline</h5>
            <span className='price'>
              50 $
            </span>
          </div>
          <button className='cards__btn'>
            <span>
              +
            </span>
          </button>
        </div>
      </ul>
    </div>
  )
}

export default Cards
