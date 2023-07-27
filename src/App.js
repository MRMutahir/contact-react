// import logo from './logo.svg';
import './App.css';
// import Form from './Form';
import Heading from './Heading';
import Main from './Main';
import Navbar from './Navbar';
import Para from './Para';

function App() {
  return (
    <>
   <Navbar/>
   <div>
    <div className='flex2'>
       <Heading/>
    <Para/>
    </div>
   
   <Main/>
   </div>
   </>
   
  );
}

export default App;
