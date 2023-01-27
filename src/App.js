
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
      
      <div id='drop' className={`${large?'h-[92vh]':'h-[32vh]'} w-[25rem] duration-500 rounded-2xl bg-gradient-to-r flex justify-center items-center from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] `}>
      <div id='drop2' className={`${large?'h-[90vh]':'h-[30vh]'} w-96 bg-slate-900 duration-500 flex p-5 rounded-xl items-center flex-col`}>
        
        <p id='demo' className='text-white text-5xl text-center pt-6'></p>
        <p className={`${large?'':'hidden'} text-white`}>+</p>
        <div  onClick={()=>{setLarge(!large)}} className={`${large?'mt-[20rem]':'rotate-180 mt-5'} h-12  duration-500 w-12 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] flex justify-center items-center  text-white text-2xl font-bold cursor-pointer`}>↑</div>
        </div>
      </div>
    </div>
  );
}

export default App;
