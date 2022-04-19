// import { useState, useEffect } from 'react';
// import axios from "axios";
// import { Navigate } from "react-router-dom"
// import useStickyState from '../hooks/storage';

// const LoginTest = () => {
//   const [
//     count,
//     setCount
//   ] = useStickyState("", "userName");

//   const [state, setState] = useState({
//     user: "",
//     password: ""
//   });
  
//   const [name, setName] = useState("");
  

//   const handleChangeUser = (event) => {
    
//     setState({...state, user: event});
   
//   }
//   const handleChangePassword = (event) => {
  
//     setState({...state, password: event});
   
//   }

//   const handleSubmit = (event) => {

//     axios.put(`/user-data`, {data: state}).then((response) => {
//       console.log(response.data);
//       if (response.data.name) {
//         localStorage.setItem("userName", response.data.name);
//         setName(response.data.name);
//         setCount(response.data.name);
//       }
//     });
 
//     event.preventDefault();
//   }


//   return (
//   <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={state.user.value} name="name" onChange={(event)=> handleChangeUser(event.target.value)} />
//          Password:
//          <input type="text" value={state.password.value} name="name" onChange={(event)=> handleChangePassword(event.target.value)} />
//         </label>
//         {count && <Navigate replace to="/dashboard"/>}
//         <input type="submit" value="Submit" />
//       </form>
//   )
// }

// export default LoginTest