
import { useState} from 'react'
//very easy
function App() {
  const [loaded,setLoaded]=useState(false)
  const [large, setLarge] =useState(true)
  const [alarms,setAlarms]=useState([{id:0,time:'10:15:00 PM',on:true}])
  
  
  
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
  const [storedTimeAsStringVar] =  useState('12:00:00 PM')
  // first number logic
  const [firstNumberToEdit,setFirstNumberToEdit] = useState(isNaN(storedTimeAsStringVar[1])?parseInt(storedTimeAsStringVar[0])+1<=12?parseInt(storedTimeAsStringVar[0])+1:1:
  parseInt(storedTimeAsStringVar[0]+storedTimeAsStringVar[1])+1<=12?parseInt(storedTimeAsStringVar[0]+storedTimeAsStringVar[1])+1:1);
  //ends here

  //second number logic
  const[secondNumberToEdit,setSecondNumberToEdit] = useState('00')
  //AM PM logic
  const [amOrPm,setAmOrPm] =useState(storedTimeAsStringVar[storedTimeAsStringVar.length-2] +storedTimeAsStringVar[storedTimeAsStringVar.length-1])
    
    

  //arrow up/down functions
    const arrowUpFunction = () =>{
      
      if(amOrPm==='PM'){
        setAmOrPm('AM')
      }
    }
    const arrowDownFunction = () =>{
      
      if(amOrPm==='AM'){
        setAmOrPm('PM')
      }
    }
    const arrowUpFirstNumber=()=>{
      setFirstNumberToEdit(firstNumberToEdit+1<=12?firstNumberToEdit+1:1)
    }
    const arrowDownFirstNumber=()=>{
      setFirstNumberToEdit(firstNumberToEdit-1>=1?firstNumberToEdit-1:12)
    }
    const arrowUpSecondNumber=()=>{
      if(parseInt(secondNumberToEdit)+1<10){
        setSecondNumberToEdit('0'+(parseInt(secondNumberToEdit[1])+1))
      }
      else if(parseInt(secondNumberToEdit)+1===60){
        setSecondNumberToEdit('00')
      }
      else{
        setSecondNumberToEdit((parseInt(secondNumberToEdit)+1).toString())
      }
    }
    const arrowDownSecondNumber=()=>{
      if(parseInt(secondNumberToEdit)-1===0){
        setSecondNumberToEdit('00')
      }
      
      else if(parseInt(secondNumberToEdit)-1<0){
        setSecondNumberToEdit('59')
      }
      else if(parseInt(secondNumberToEdit)-1<10){
        setSecondNumberToEdit('0'+(parseInt(secondNumberToEdit)-1))
      }
      else{
        setSecondNumberToEdit((parseInt(secondNumberToEdit)-1).toString())
      }
    }



    //submit form function


    const saveAlarm = ()=>{
      //{id:1,time:'10:15:00 PM',on:true}
      setAlarms(
        [...alarms,{id: alarms.length, on:true, time: firstNumberToEdit+':'+secondNumberToEdit+':00 '+amOrPm}]
        )
        setAddAlarm(!addAlarm)
        console.log(...alarms)
    }
  return (
    <div   className='flex  justify-center bg-gray-700 h-screen w-screen  pt-10' >
      
      <div id='drop' className={`${large?` h-[92vh]`:'h-[32vh]'} w-[25rem] duration-500 rounded-2xl bg-gradient-to-r flex justify-center items-center from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] `}>
      <div id='drop2' className={`${large?'h-[90vh]':'h-[30vh]'} w-96 bg-slate-900  duration-500 flex p-5 rounded-xl items-center flex-col justify-between`}>
        
        <div><p id='demo' className={` text-white text-5xl text-center pt-6`}>12:00:00 PM</p>
        <div id='appear' className={`${large?'h-[92vh]:hidden':'hidden'}`}><div className=' h-[26rem] flex flex-col overflow-scroll'><p className={`${large?'':'hidden'} text-green-300  text-3xl pt-[2rem] pl-[20rem] origin-right cursor-pointer duration-500 mt-[1rem] pb-3`} onClick={()=>setAddAlarm(!addAlarm)}>+</p>
          {alarms.map(alarm=>{return (
            <div key={alarm.id} className={` ${large?' delay-75 flex':'hidden'} w-[350px] transition-opacity duration-500 rounded-2xl bg-slate-800 h-[120px] mb-1 items-center justify-around`}>
              <p className={`text-white text-xl `}>{isNaN(alarm.time[4])?alarm.time.slice(0,4):alarm.time.slice(0,5)} {alarm.time[alarm.time.length-2]+alarm.time[alarm.time.length-1]}</p>
              <div onClick={()=>setAlarms(alarms.filter(el=>el.id===alarm.id?el.on=!el.on:el.on=el.on))} className={`${alarm.on?'justify-end bg-purple-400 border-[1px]  border-purple-800':'bg-slate-300'} duration-75 h-4 w-8 cursor-pointer rounded-full flex items-center `}>
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
        
        <div className="flex justify-center mt-16 mb-6">
          <p onClick={()=>arrowUpFirstNumber()}  className='text-white mr-8 text-6xl cursor-pointer duration-700 hover:text-green-500'>^</p>
          <p onClick={()=>arrowUpSecondNumber()} className='text-white mr-8 text-6xl cursor-pointer duration-700 hover:text-green-500'>^</p>
          <p onClick={()=>arrowUpFunction()} className='text-white text-6xl cursor-pointer duration-700 hover:text-green-500'>^</p>
        </div>
        <div className="flex justify-center mb-1 ">
          <p className='text-white text-center w-8 mr-8 text-2xl '>{firstNumberToEdit+1<=12?firstNumberToEdit+1:1}</p>
          <p className='text-white text-center w-8 mr-8 text-2xl '>{secondNumberToEdit<9?('0'+(parseInt(secondNumberToEdit[1])+1)):parseInt(secondNumberToEdit)+1===60?'00':(parseInt(secondNumberToEdit)+1).toString()}</p>
          <p className='text-white text-center duration-500 w-8 text-2xl '>{amOrPm==='AM'?'':'AM'}</p>
        </div>
        <div className='flex bg-slate-500 rounded-2xl  justify-center'>
          <p className='text-white text-3xl  h-12 w-12 text-center mr-2 pt-1'>{firstNumberToEdit}</p>
          <p className='text-white text-3xl mr-2'>:</p>
          <p className='text-white text-3xl  h-12 w-12 text-center mr-4 pt-1'>{secondNumberToEdit}</p>
          <p className='text-white text-3xl duration-500  h-12 w-12 text-center pt-1'>{amOrPm}</p>
        </div>
        <div className="flex justify-center mt-1 ">
          <p className='text-white text-center w-8 mr-8 text-2xl '>{firstNumberToEdit-1>=1?firstNumberToEdit-1:12}</p>
          <p className='text-white text-center w-8 mr-8 text-2xl '>{secondNumberToEdit==='00'?'59':parseInt(secondNumberToEdit)-1<10?'0'+(parseInt(secondNumberToEdit)-1):(parseInt(secondNumberToEdit)-1).toString()}</p>
          <p className='text-white text-center duration-500 w-8 text-2xl '>{amOrPm==='AM'?'PM':''}</p>
        </div>
        <div className="flex justify-center mt-6">
          <p onClick={()=>arrowDownFirstNumber()} className='text-white duration-700 hover:text-green-500 mr-8 text-6xl cursor-pointer rotate-180'>^</p>
          <p onClick={()=>arrowDownSecondNumber()} className='text-white mr-8 text-6xl duration-700 hover:text-green-500 cursor-pointer rotate-180'>^</p>
          <p onClick={()=>arrowDownFunction()}  className='text-white duration-700 hover:text-green-500 text-6xl cursor-pointer rotate-180'>^</p>
        </div>
        <div className='flex mt-56 justify-around text-2xl text-orange-300'>
          <p onClick={()=>setAddAlarm(!addAlarm)} className='hover:bg-slate-600 rounded-3xl cursor-pointer w-32 text-center'>Cancel</p>
          <p onClick={()=>saveAlarm()} className='hover:bg-slate-600 rounded-3xl cursor-pointer w-32 text-center'>Save</p>
        </div>
      </div>:'':''} 
    </div>
  );
}

export default App;
