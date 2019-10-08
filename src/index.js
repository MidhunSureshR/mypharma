import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section land-pic">
            
                        <h1 className="display-1 font-weight-bolder catch-text slide-in-top">Pharmacy. Amplified</h1>
          </div>

           <div className="section">
              <div className="a">
                <h1 className="display-1 font-weight-bolder catch-text padded">Reliable</h1>
                <h1 className="display-1 font-weight-bolder catch-text padded">Fast Delivery</h1>
                <h1 className="display-1 font-weight-bolder catch-text padded">Discounts</h1>
              </div>
          </div> 

        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Fullpage />, document.getElementById('react-root'));
// class Logo extends React.Component {
   
//     render() {
      
//         return (
//          <nav class="nav-bar">
//            <a href="#" class="nav-time"> Home  </a> | 
//            <a href="#" class="nav-time"> Login  </a> | 
//            <a href="#" class="nav-time"> Sign-up  </a> |  
//            <a href="#" class="nav-time"> About  </a> | 
//            <a href="#" class="nav-time"> Github  </a> | 
//          </nav>
//         );
//       }
    
    
//   }

  //ReactDOM.render(<Logo/>, document.getElementById("navbar"));