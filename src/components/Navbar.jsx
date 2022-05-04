import React from 'react';


class Navbar extends React.Component {
  state = {
    term:'',
};

onFormSubmite = (event) =>{
  event.preventDefault();
  this.props.onFormSubmite(this.state.term)
};
onInputChange = (event) => {
  this.setState({ term: event.target.value });
};
  
render(){
  return (
    <>
    
    <nav>
    <form onSubmit={this.onFormSubmite}>
        <div className='md:flex sm:flex flex-wrap  md:px-10  justify-between '>
          <span>
            <img src='/you.svg' alt='logo' className="w-28" />
          </span>
          <div className=' md:flex sm:flex flex-wrap sm:my-3  md:my-4 '>
          
              <input type='search'  placeholder='Search' className='lg:w-[530px] md:w-88 sm:w-60 text-base border' value={this.state.term} onChange={this.onInputChange}/>
           
                  <span class=" cursor-pointer bg-gray-100 border input-group-text flex items-center sm:px-4 px-6 text-base font-normal text-gray-700 text-center whitespace-nowrap " id="basic-addon2">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                  </span>
               

                <ul className='md:flex sm:flex xs:flex'>
                  <li>
                    <span>
                      <img src='/48.png' alt='micr' width={20} className="lg:mt-3 cursor-pointer md:mt-3 sm:mt-4 bg-slate-100 rounded-xl  mx-7 " />
                      
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src='/notification.png' alt='micr' width={20} className="lg:mt-3 cursor-pointer bg-slate-100 mx-3 sm:mt-4 md:mt-3 rounded-xl" />
                
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src='/grid.svg' alt='micr' width={20} className="lg:mt-3 cursor-pointer  bg-slate-100 sm:mt-4 md:mt-3  mx-4 " />
                    </span>
                  </li>
                  <li>
                    <span>
                      <button type='submit'>
                        <img src='/men.png' alt='logo' className='w-7 sm:mt-3 md:mt-2 lg:mt-2 mx-6 cursor-pointer'/>
                      </button>
                    </span>
                  </li>
                </ul>     
                  
          </div>
          
          
                  
        </div>
      </form>
      
    </nav>
    
    </>
    
  )
}
}
export default Navbar;
