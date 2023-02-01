import { useState } from 'react';
import AddForm from './components/AddForm/AddForm';
import EditForm from './components/EditForm/EditForm';

function App() {
  const[openAdd, setOpenAdd] = useState(false);
  const[openEdit, setOpenEdit] = useState(false);
  return (
    <div>
      <button className='w-32 ml-4 pt-2 pb-2 rounded-md' style={{background:'#E5D3D3'}} onClick={(()=>{setOpenAdd(true)})}>Add new task</button>
      <button className='w-14 ml-4 pt-1 pb-1 rounded-md' style={{background:'#A5EC9F'}}  onClick={(()=>{setOpenEdit(true)})}>Edit</button>
      <AddForm open={openAdd} setOpen={setOpenAdd}></AddForm>
      <EditForm open={openEdit} setOpen={setOpenEdit}></EditForm>
    </div>
  );
}

export default App;