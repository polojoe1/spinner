
import {useState} from 'react'
//very easy
function App() {
  const [large, setLarge] =useState(true)
  
  const setDate =()=>{
    let d = new Date();
    document.getElementById('demo').innerHTML = d.toLocaleTimeString()
    
  }
  setInterval(setDate,1000)
  
  window.onkeydown = function(event){
    if(event.keyCode === 32) {
      setLarge(!large)
    }}
    let current = 92;
    
    
    const setDrop=()=>{
      
      let polo = document.getElementById('drop')
      let polo2 = document.getElementById('drop2')
      current-=2;
      if(current>29){
      polo.style.height=current+'vh';
      polo2.style.height=(current-2)+'vh';
    }
      else{
        x=null;
        setLarge(!large)
      }
    }
    const setUnDrop =()=>{
      let polo = document.getElementById('drop')
      let polo2 = document.getElementById('drop2')
      console.log(current)
      current+=2;
      if(current<92){
      polo.style.height=current+'vh';
      polo2.style.height=(current-2)+'vh';
    }
      else{
        y=null;
        setLarge(!large)
      }
    }
    let x=setInterval(setDrop,10)
    clearInterval(x)

  let y=setInterval(setUnDrop,10)
  clearInterval(y)
  return (
    <div className='flex  justify-center bg-gray-700 h-screen w-screen  pt-10' >
      {large?
      <div id='drop' style={{height:'92vh'}} className=' w-[25rem] rounded-2xl bg-gradient-to-r flex justify-center items-center from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'>
      <div id='drop2' className='h-[90vh] w-96 bg-slate-900 flex p-5 rounded-xl items-center flex-col'>
        
        <p id='demo' className='text-white text-5xl text-center pt-6'></p>
        <div  onClick={()=>{setInterval(setDrop,10)}} className='h-12 w-12 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] flex justify-center items-center mt-[30rem] text-white text-2xl font-bold cursor-pointer'>↑</div>

      </div></div>:
      <div id='drop' style={{height:'32vh'}} className='flex justify-center items-center rounded-2xl  w-[25rem] bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'>
      <div id='drop2' className='h-[30vh] w-96 bg-slate-900 flex p-5 rounded-xl flex-col items-center '>
        <p id='demo' className='text-white text-5xl text-center pt-6'></p>
        <div  onClick={()=>{setInterval(setUnDrop,10)}} className='h-12 w-12 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] flex justify-center items-center mt-12 text-white text-2xl font-bold cursor-pointer'>↓</div>
    </div></div>}
      
    </div>
  );
}

export default App;
