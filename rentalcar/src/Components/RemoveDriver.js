
import React, { useRef , useState} from 'react';
 
const RemoveDriver = () => {
    const [getdriver, setdriver] = useState('');
    const driverid = useRef();
 
    const  removingdriver = async ()=>
    {      
        var jsonData ={      
            "Driverid": parseInt(driverid.current.value)
        }
            if (Object.values(jsonData).some(value => value === '')) {
                alert('Please fill in all fields.');
                return;
            }
            try{
  const response= await fetch(`https://localhost:7273/api/Adminremovedriver/${driverid.current.value}`,
    {  
    method: 'delete',
    headers: { 'Content-Type': 'application/json'},        
    body:JSON.stringify(jsonData),        
   })
   const userData = await response.json()
   if(userData ===1){
    console.log('yes');
    setdriver('Driver deleted successfully ');
   }else{
        console.log('no');
        setdriver('Driver not deleted');
    }
    }catch(error) {
     console.error(error);
   };
}
const centerContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh', // Adjust the height as needed
};

const centerBoxStyle = {
    textAlign: 'center',
    padding: '50px', // Adjust the padding to make the box larger
    border: '1px solid #ddd',
    borderRadius: '10px', // Adjust the border radius for rounded corners
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const gapStyle = {
    marginBottom: '10px', // Adjust the margin to create a gap
};

    return (
        <div>
           <div style={centerContainerStyle}>
            <div style={centerBoxStyle}>
                <h2>Remove Driver</h2><br/>
            <label>Driver Id</label>&nbsp;&nbsp;&nbsp;&nbsp;
             <input type='text' ref={driverid}></input><br/>
            <input type="button"  value="Delete" className='btn btn-info' onClick={removingdriver}/>
           </div></div>
           <label>{getdriver}</label>
        </div>
    );
};
 
export default RemoveDriver;