import React,{useState} from 'react'
//import Timer from './timer';
const SkipButton = () => {
  const[show,setShow]=useState(true);
  return (
    <div>
      {
        show?<h1>Well done, you have finished now</h1>:<Timer/>
      }
      <button type="button" class="btn btn-primary" onClick={()=>setShow(!show)}>Toggle</button>
    </div>
  )
}
export default SkipButton