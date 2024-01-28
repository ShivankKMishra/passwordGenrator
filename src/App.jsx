import { useCallback, useEffect, useState } from "react"

export default function App() {

  const [Password , setPassword] = useState("");
  const [length,setLength] = useState(8);
  const [numChar,setNumChar] = useState(false);
  const [specialChar,setSpecialChar] =useState(false);

  const passwordGenrator = useCallback(()=>{
let charac = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz";
let pass="";

if(numChar){
 let numeric ="1234567890";
 charac +=numeric;
}

if(specialChar){
  let speci ="!@#$%^&*?/;:_+-=`~";
  charac +=speci;
 }

 for(let i=0;i<length;i++){
  let c= Math.floor((Math.random ()* charac.length)) ;
  pass +=charac.charAt(c);
 }
 setPassword(pass);
  },[length,numChar,specialChar,setPassword]); 


useEffect(()=>{passwordGenrator()},[length,numChar,specialChar,passwordGenrator]);

  return (
   <> <h1 className="text-4xl  text-white text-center">
     Password Genrator
    </h1>
    <div className="w-full max-w-md mx-auto bg-gray-700 text-white p-4 my-8  rounded-lg">
 <input className="rounded-l-lg text-black px-2  outline-none" type="text" placeholder="password" name="genratedpassword" value={Password} readOnly/>
 <button className="bg-gray-500 rounded-r-lg px-2 text-white">copy</button>
 <br/>
 <div>
 <div className=" my-4 gap-2">
 <input  type="range" min={6} max={50} value={length} className="cursor-pointer " onChange={(e)=>{setLength(e.target.value)}}/>
 <label> Length : {length}</label>
</div>
 <div className=" mx-2 gap-2">
 <input  type="checkbox"   default={numChar} id="numberInput"   onChange ={()=>{setNumChar((prev)=>!prev)}}/>
 <label> number</label>
 </div>

 <div className=" mx-2 gap-2">
 <input  type="checkbox" default={specialChar} id="specialcharacterInput" onChange={()=>{setSpecialChar((prev)=>!prev)}} />
 <label> specialCharacter</label>
 </div>
 </div>
</div>
    </>
  )
}