import React, { useRef , useState , useEffect} from 'react';

const RemoveCar = () => {
    const carno = useRef();
    const [getcar, setcar] = useState('');

    const removecar = async () => {
        var jsonData = {
            "CarNo": carno.current.value
        };
        if (Object.values(jsonData).some(value => value === '')) {
            alert('Please fill in all fields.');
            return;
        }
        try{
       const response =  await fetch(`https://localhost:7273/api/Adminremovecar/${carno.current.value}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonData),
        })
        const userData = await response.json()
        if(userData ===1)
         {
                console.log("yes");
                console.log(userData)
                setcar('car deleted successfully ');
            }
            else{
                console.log("no")
                setcar('car not deleted');
            }
        }
            catch(error) {
                console.error(error);
            };
        
    }

    useEffect(() => {
    
        console.log('Message updated:', getcar);
    }, [getcar]);


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
                <h2>Remove Car</h2><br/>
                <label style={gapStyle}>Car Number  </label>&nbsp;&nbsp;&nbsp;
                <input type='text' ref={carno} /><br/>
                <input type="button" value="Delete" className='btn btn-info' onClick={removecar} /><br/>
                <label>{getcar}</label>
            </div>
        </div>
        
        </div>
    );
};

export default RemoveCar;
