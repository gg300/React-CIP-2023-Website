import logo1 from './robo.svg';
import home from './home_button.png'
import './App.css';
function App() {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className='h-screen bg-fuchsia-900 text-rose-50 from-violet-800 bg-gradient-to-bl'>
      <div className=' text-rose-50'>
          <img src={logo1} alt="logo" className='fixed right-4 h-3/6 top-6'/>  
        </div>
      <div className=' fixed left-3 top-4  text-lg font-mono font-bold '> Inteligenta artificiala
        <div className=' text-center'>viitorul robotilor
          </div> 

        </div>

      <div className='fixed left-2 text-lg top-48 text-rose-50 border-2 font-serif'>
        <h1 className=' text-3xl h-16'><u>feihgso  {/* add text for left paragraph title */}</u> </h1>

        <p className=' text-center'>hello good lol
        {/* ADD text for left paragraph*/}
        </p>

        </div>
      
      <button onclick={topFunction} id="myBtn" title="Go to top" className=' text-lg text-center absolute bottom-8 right-8'>
        <img src={home} alt="logo" className='rounded-full w-12'/>
        </button>
      </div>
  );
}

export default App;
