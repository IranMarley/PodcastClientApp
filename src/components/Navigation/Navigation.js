import React from 'react';

const Navigation = () => {
    return (
        <div className="navigation">
        <nav role="navigation" className="navigation__item-container">
            <button className="hamburger navigation__toggle">
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </button>
            <ul className="navigation__items">
                <li className="navigation__item">
                    {/* <a className="navigation__item-link navigation__item-link--active">Web Design Podcasts</a> */}
                </li>
            </ul>
        </nav>
    </div>
    )
}

export { Navigation }