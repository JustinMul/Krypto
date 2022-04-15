import {React, useState} from 'react'

function SearchBar(props){
  const [crypto, setCrypto] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(crypto);
  };

  const handleChange = (event) => {
    const { name, value } = event.terget;
    setCrypto({ ...crypto, [name]:value })
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Search' value={crypto} onChange={handleChange}/>
    </form>
  )
}

export default SearchBar;

// function MyForm() {
//   const [name, setName] = useState("");

//   return (
//     <form>
//       <label>Enter your name:
//         <input
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//     </form>
//   )
// }

// ReactDOM.render(<MyForm />, document.getElementById('root'));