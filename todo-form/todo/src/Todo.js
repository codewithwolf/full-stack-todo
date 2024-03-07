import React, {useState}from 'react'

const Todo = () => {
    const [user, setUser]= useState({
        fullname : "",
       username : "",
      
    });
    const [record, setRecord] = useState([]);

    const handleInput = (e)=>{
        const  name = e.target.name;
        const value =e.target.value;
        setUser({...user, [name] :value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        const newRecord ={...user, id:new Date().getTime().toString}
        
          setRecord([...record, newRecord]);
        setUser({fullname: "", email:"", username:"", password:"",})
    }
  return (

    <div className=' flex justify-around items-center'>
    
      <div className=' bg-slate-800 w-[600px] h-[500px] my-3'>
      <h1 className=' text-2xl text-center mt-7 text-white font-bold'>To <span className=' text-green-300'>DoList</span> </h1>
        <form className=' items-center justify-center my-20 ml-20 ' action='' onSubmit={handleSubmit}>
        <div className=' py-5  '>
          <h2 className=' text-white'>Name :</h2>
            <input className=' bg-slate-300 border-blue-200 mt-5  h-12' value={user.fullname} onChange={handleInput} type='text' name='fullname' />
            </div>
             
            <div className='py-5'>
            <h2 className=' text-white'>Today's <span className=' text-green-300 font-bold text-xl'>ToDo</span> </h2>
            <input className=' bg-slate-300 border-blue-200 mt-5  h-12' value={user.username} onChange={handleInput} type='text' name='username' />
            </div>
            
            <button className=' border-y-emerald-300 rounded-lg border-2 p-1 w-28 hover:bg-black cursor-pointer text-white' type='submit'>Add list</button>
             
        </form>
        
      </div>
      <div>
        {
            
            record.map((curr)=>{
                return (
                    
                    <div className='bg-black text-white w-64 mt-7 font-bold  rounded-lg text-center py-6'>
                    <h2 >{curr.fullname}</h2>
                    <h2>{curr.username}</h2>
                    </div>

                
                    

                )
            })
        }
      </div>
    </div>
    
  )
}

export default Todo
