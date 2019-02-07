import React from 'react';

function Icons() {
  return (
    <div className='icon-box'>
      <div className='icon-square'>
        <i className="icons far fa-money-bill-alt"></i>
        <h4>See your assets</h4>
      </div>
      <div className='icon-square'>
        <i className="icons fas fa-chart-line"></i>
        <h4>Set spending and saving goals</h4>
      </div>
      <div className='icon-square'>
        <i className="icons fas fa-skiing"></i>
        <h4>Plan Your Future</h4>
      </div>
      <div className='icon-square'>
        <i className="icons icons-green fas fa-check"></i>
        <h4>Enjoy Success!</h4>
      </div>
    </div>
  )
}

export default Icons;