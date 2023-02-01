import { useState } from 'react';
import AddForm from './components/AddForm/AddForm';
import EditForm from './components/EditForm/EditForm';
import Home from './components/landing page/Home';

function App() {
  const[openAdd, setOpenAdd] = useState(false);
  const[openEdit, setOpenEdit] = useState(false);
  return (
    <div>
      <button onClick={(()=>{setOpenAdd(true)})}>Open</button>
      <button onClick={(()=>{setOpenEdit(true)})}>Edit</button>
      <AddForm open={openAdd} setOpen={setOpenAdd}></AddForm>
      <EditForm open={openEdit} setOpen={setOpenEdit}></EditForm>
      <Home/>
    </div>
  );
}

export default App;
