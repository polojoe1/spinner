
import {useState} from 'react'
//very easy
function App() {
  const [large, setLarge] =useState(true)
  
  const setDate =()=>{
    let d = new Date();
    document.getElementById('demo').innerHTML = d.toLocaleTimeString()
    
  }
  setInterval(setDate,1000)

  return (
    <div className='flex  justify-center bg-gray-700 h-screen w-screen  pt-10' >
      {large?
      <div id='drop' style={{height:'92vh'}} className=' w-[25rem] origin-top duration-500 rounded-2xl bg-gradient-to-r flex justify-center items-center from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'>
      <div id='drop2' className='h-[90vh] w-96 bg-slate-900 origin-top duration-500 flex p-5 rounded-xl items-center flex-col'>
        
        <p id='demo' className='text-white text-5xl text-center pt-6'></p>
        <div  onClick={()=>{setLarge(!large)}} className='h-12  origin-bottom duration-500 w-12 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] flex justify-center items-center mt-[30rem]  text-white text-2xl font-bold cursor-pointer'>↑</div>
        </div>
      </div>:
      <div id='drop' style={{height:'32vh'}} className='flex origin-bottom duration-500 justify-center items-center rounded-2xl  w-[25rem] bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'>
      <div id='drop2' className='h-[30vh] w-96 origin-bottom  duration-500 bg-slate-900 flex p-5 rounded-xl flex-col items-center '>
        <p id='demo' className='text-white text-5xl text-center pt-6'></p>
        <div  onClick={()=>{setLarge(!large)}} className='h-12 w-12 translate-y-2 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] flex justify-center items-center mt-12 text-white text-2xl font-bold cursor-pointer origin-bottom duration-500'> ↓</div>
    </div></div>}
      
    </div>
  );
}

export default App;
