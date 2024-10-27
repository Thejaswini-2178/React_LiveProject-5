import React, { Component } from 'react'

export class Preloader extends Component {
    render() {
        return (
            <div classname="preloader">
              <div classname="loader">
                <div classname="loader-outter">
                  <div classname="loader-inner">
                    <div classname="indicator"> 
                      <svg width="16px" height="12px">
                        <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6" />
                        <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div></div>
        )
    }
}

export default Preloader