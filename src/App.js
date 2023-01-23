import Spinner from './assets/Spinner.png'
//very easy
function App() {
  return (
    <div className='flex  justify-center  pt-10' >
      <img className="h-4 animate-spin" src={Spinner} alt='spinner' />
      
    </div>
  );
}

export default App;
