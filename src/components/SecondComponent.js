import React, { useState, useMemo} from 'react';
const SecondComponent = () => {

   const [number, setNumber] = useState(0);
   const double = useMemo(()=>{
      console.log("double value");
      return number * 2;

   }, [number]);
   
return (
   <div>
      <p>Number: {number}</p>
      <p>Double: {double}</p>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
     
   </div>
);
};

export default SecondComponent;