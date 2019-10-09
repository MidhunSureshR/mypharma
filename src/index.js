import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';


class SignupForm extends React.Component{
  render(){
    return(

     <React.Fragment>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"/>


<div class="container">
<br/>  <p class="text-center">Signup with MYPHARMA today.</p>
<hr/>





<div class="card" id="box-reg">
<article class="card-body mx-auto" style={{maxWidth: '400px'}}>
	<h4 class="card-title mt-3 text-center">Create Account</h4>
	<p class="text-center">Get started with your free account</p>
	
	<form>
	<div class="form-group input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
        <input name="" class="form-control" placeholder="Full name" type="text"/>
    </div> 
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		 </div>
        <input name="" class="form-control" placeholder="Email address" type="email"/>
    </div> 

    <div class="form-group input-group">

    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-phone"></i></span>
        <span class="input-group-text">+91</span>
		  </div>

    	<input name="" class="form-control" placeholder="Phone number" type="text"/>

    </div> 
    
    <div class="form-group input-group">

    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-building"></i> </span>
		  </div>

      <input type="text" class="form-control" id="inputAddress2" placeholder="Address Line 1"/>
      

	</div> 

  <div class="form-group input-group">
    <input type="text" class="form-control" id="inputAddress2" placeholder="Address Line 2"/>
  </div>

    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input class="form-control" placeholder="Create password" type="password"/>
    </div> 
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input class="form-control" placeholder="Repeat password" type="password"/>
    </div>                                    
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block"> Create Account  </button>
    </div>    
    <p class="text-center">Have an account? <a href="#">Log In</a> </p>                                                                 
</form>
</article>
</div> 

</div> 


<br/><br/>

</React.Fragment>
    );
      
    }
  }


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
              <div className="reg-page">
                    {/** Registration component will appear here */}
                    <SignupForm/>
              </div>
          </div> 

        </ReactFullpage.Wrapper>
      );
    }}
  />
);



ReactDOM.render(<Fullpage />, document.getElementById('react-root'));

