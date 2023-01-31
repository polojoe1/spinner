
import { useState} from 'react'
//very easy
function App() {
  const [loaded,setLoaded]=useState(false)
  const [large, setLarge] =useState(true)
  const [alarms,setAlarms]=useState([{id:1,time:'10:15:00 PM',on:true}])
  
  
  const setDate =()=>{
    let d = new Date();
    if(loaded===false){
      setLoaded(true)
    }
    document.getElementById('demo').innerHTML = d.toLocaleTimeString()
    
  }
  setInterval(setDate,1000)
  

  
  const appear=()=>{
    setLarge(!large)
  }
  const [addAlarm,setAddAlarm]= useState(false);
  let storedTimeAsStringVar =  2
  // first number logic
  let firstNumberToEdit = 2;
  //ends here

  //second number logic
  let secondNumberToEdit = '00'
  //AM PM logic
  const [amOrPm,setAmOrPm] =useState('PM')
    if(loaded){
    storedTimeAsStringVar = document.getElementById('demo').innerHTML || 2
    // first number logic
    firstNumberToEdit = isNaN(storedTimeAsStringVar[1])?parseInt(storedTimeAsStringVar[0])+1<=12?parseInt(storedTimeAsStringVar[0])+1:1:
    parseInt(storedTimeAsStringVar[0]+storedTimeAsStringVar[1])+1<=12?parseInt(storedTimeAsStringVar[0]+storedTimeAsStringVar[1])+1:1;
    //ends here

    //second number logic
    secondNumberToEdit = isNaN(storedTimeAsStringVar[1])?storedTimeAsStringVar[2]+storedTimeAsStringVar[3]:
    storedTimeAsStringVar[3]+storedTimeAsStringVar[4]

    //AM PM logic
    if(large===false){setAmOrPm(storedTimeAsStringVar[storedTimeAsStringVar.length-2] +storedTimeAsStringVar[storedTimeAsStringVar.length-1])}

    
    }
    const arrowUpFunction = () =>{
      
      if(amOrPm==='PM'){
        setAmOrPm('AM')
      }
    }
  return (
    <div   className='flex  justify-center bg-gray-700 h-screen w-screen  pt-10' >
      
      <div id='drop' className={`${large?` h-[92vh]`:'h-[32vh]'} w-[25rem] duration-500 rounded-2xl bg-gradient-to-r flex justify-center items-center from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] `}>
      <div id='drop2' className={`${large?'h-[90vh]':'h-[30vh]'} w-96 bg-slate-900  duration-500 flex p-5 rounded-xl items-center flex-col justify-between`}>
        
        <div><p id='demo' className={` text-white text-5xl text-center pt-6`}></p>
        <div id='appear' className={`${large?'h-[92vh]:hidden':'hidden'}`}><div className='overflow-scroll flex flex-col '><p className={`${large?'':'hidden'} text-green-300  text-3xl pt-[2rem] pl-[20rem] origin-right cursor-pointer duration-500 mt-[1rem] pb-3`} onClick={()=>setAddAlarm(!addAlarm)}>+</p>
          {alarms.map(alarm=>{return (
            <div key={alarm.id} className={` ${large?' delay-75 flex':'hidden'} w-[350px] transition-opacity duration-500 rounded-2xl bg-slate-800 h-28 flex items-center justify-around`}>
              <p className={`text-white`}>{isNaN(alarm.time[4])?alarm.time.slice(0,4):alarm.time.slice(0,5)} {alarm.time[alarm.time.length-2]+alarm.time[alarm.time.length-1]}</p>
              <div onClick={()=>setAlarms([{...alarms,id:alarm.id,time:alarm.time,on:!alarm.on}])} className={`${alarm.on?'justify-end bg-purple-400 border-[1px]  border-purple-800':'bg-slate-300'} duration-75 h-4 w-8 cursor-pointer rounded-full flex items-center `}>
                <div className={` ${alarm.on?'border-[1px] border-purple-800 origin-left ':' origin-right'} duration-1000 h-5 w-5 rounded-full bg-white`}></div>
              </div>
            </div>
          )})}
          </div></div></div>
        <div  onClick={()=>{appear()}} className={`${large?'':'rotate-180'} h-12 delay-500 duration-700 w-12 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] flex justify-center items-center  text-white text-2xl font-bold cursor-pointer`}>↑</div>
        </div>
      </div>


      {/* Form for adding alarm */}
      {loaded? addAlarm?<div className='bg-slate-700 h-[90vh] duration-300 w-96 rounded-xl bottom-6 absolute  flex flex-col'>
        <p className='text-purple-300 text-2xl font-bold cursor-pointer text-end pr-7  mt-10' onClick={()=>setAddAlarm(!addAlarm)}>x</p>
        <div className="flex justify-center mb-6">
          <p className='text-white mr-8 text-6xl cursor-pointer'>^</p>
          <p className='text-white mr-8 text-6xl cursor-pointer'>^</p>
          <p onClick={()=>arrowUpFunction()} className='text-white text-6xl cursor-pointer'>^</p>
        </div>
        <div className="flex justify-center mb-1 ">
          <p className='text-white text-center w-8 mr-8 text-2xl cursor-pointer'>{firstNumberToEdit+1<=12?firstNumberToEdit+1:1}</p>
          <p className='text-white text-center w-8 mr-8 text-2xl cursor-pointer'>{secondNumberToEdit}</p>
          <p className='text-white text-center duration-500 w-8 text-2xl cursor-pointer'>{amOrPm==='AM'?'':'AM'}</p>
        </div>
        <div className='flex justify-center'>
          <p className='text-white text-3xl bg-slate-500 h-12 w-12 text-center mr-2 pt-1'>{firstNumberToEdit}</p>
          <p className='text-white text-3xl mr-2'>:</p>
          <p className='text-white text-3xl bg-slate-500 h-12 w-12 text-center mr-4 pt-1'>{secondNumberToEdit}</p>
          <p className='text-white text-3xl duration-500 bg-slate-500 h-12 w-12 text-center pt-1'>{amOrPm}</p>
        </div>
        <div className="flex justify-center mt-1 ">
          <p className='text-white text-center w-8 mr-8 text-2xl cursor-pointer'>{firstNumberToEdit+1<=12?firstNumberToEdit+1:1}</p>
          <p className='text-white text-center w-8 mr-8 text-2xl cursor-pointer'>{secondNumberToEdit}</p>
          <p className='text-white text-center duration-500 w-8 text-2xl cursor-pointer'>{amOrPm==='AM'?'PM':''}</p>
        </div>
        <div className="flex justify-center mt-6">
          <p className='text-white mr-8 text-6xl cursor-pointer rotate-180'>^</p>
          <p className='text-white mr-8 text-6xl cursor-pointer rotate-180'>^</p>
          <p className='text-white text-6xl cursor-pointer rotate-180'>^</p>
        </div>
      </div>:'':''} 
    </div>
  );
}

export default App;
