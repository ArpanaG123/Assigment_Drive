import React,{useState} from 'react'
import './Home.css'

const Details = {
  name :'',
  age:'',
  course:'',
  batch:''
}

const Home = ({setLoginUser}) => {

  const [store,setStore] = useState(Details);
    const [editData,setEditData] = useState(false);
    const [data,setData] = useState([]);
    const [hide,setHide] = useState(false);

    const editHandler = (event) => {
        const value = event.target.value
        setStore(store =>({...store,[event.target.name] : value}))
    }

    const Add = () => {
        if(editData)
        {
            const updateData = data.map((val)=>val.id === store.id ? store:val);
            setData(updateData);
            setEditData(false);
            setStore(Details)
            setHide(!hide)
        }
        else
        
            {
                let listItems = data;
                const item = 
                {
                    id:data.length,
                    ...store
                }

                listItems = [...data,item];
                setData(listItems);
                clearData();
                setHide(!hide)
            }
          
    }

    const clearData = () => {
        setStore(Details);
    }

    const editRow = (val) => {
        setStore(val);
        setEditData(true);
        setHide(!hide)
    } 

  return (
    <div className='wholeHome'>
      <div className='navbar'>
        <h3 className='haedlogo'>HELLO ARPANA</h3>
        <div className='logoutBut' onClick={() => setLoginUser({})}>Logout</div>
      </div>
      {hide ? null : <>
      <div className='secpage'>
        <h1 className='detailP'>Student Details</h1>
        <button className='but1' onClick={()=>{setHide(!hide)}}>Add New Student</button>
      </div>
      <div className='tab'>
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
          {data && data.map((val) =>
          <tr>
            <td>{val.name}</td>
            <td>{val.age}</td>
            <td>{val.course}</td>
            <td>{val.batch}</td>
            <td><button onClick={()=>{editRow(val)}} className="editBut">Edit</button></td>
          </tr>
          )}
        </table>
      </div></> }
      {hide ? <div>
        <div className='innerText'>
            <label className='name1'>Name:</label>
            <input type='text' Name='name' value={store.name} required onChange={editHandler}  className='input1'/>
            <label className='age'>Age:</label>
            <input type = 'number' name='age' value={store.age} required onChange={editHandler}  className='input2'/>
            <br></br>
            <label className='course'>Course:</label>
            <input type = 'text' name='course' value={store.course} required onChange={editHandler}  className='input3' />
            <label className='batch'>Batch:</label>
            <input type = 'text' name='batch' value={store.batch} required onChange={editHandler}  className='input4'/>
        </div>
        <div>
            <button onClick={clearData} className="cancelBut">Cancel</button>
            <button onClick={Add} className="sucessBut">{editData ? 'Update' : 'submit'}</button>
        </div>
      </div> : null}
    </div>
  )
}

export default Home;