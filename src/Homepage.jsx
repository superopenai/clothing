import React from 'react'
import './HomePage.scss'
const HomePage = () => {
  return (
      <div className={'homepage'}>
          <div className={'directory-menu'}>
              <div className={'menu-item'}>
                  <div className={'content'}>
                      <h1 className={'title'}>Hat</h1>
                      <span className={'sub-title'}>shop now</span>
                  </div>
              </div>
              <div className={'menu-item'}>
                  <div className={'content'}>
                      <h1 className={'title'}>jackets</h1>
                      <span className={'sub-title'}>shop now</span>
                  </div>
              </div>
              <div className={'menu-item'}>
                  <div className={'content'}>
                      <h1 className={'title'}>snkears</h1>
                      <span className={'sub-title'}>shop now</span>
                  </div>
              </div>
              <div className={'menu-item'}>
                  <div className={'content'}>
                      <h1 className={'title'}>female</h1>
                      <span className={'sub-title'}>shop now</span>
                  </div>
              </div>
              <div className={'menu-item'}>
                  <div className={'content'}>
                      <h1 className={'title'}>male</h1>
                      <span className={'sub-title'}>shop now</span>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default HomePage