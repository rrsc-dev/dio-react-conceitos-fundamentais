// const App = () => {
//   const arr = [1, 2, 3, 4, 5, 6];
//   return (
//     <div className="App">
//       <h1>Teste</h1>
//       {arr.map((item) => {
//         return <p>{item}</p>;
//       })}
//     </div>
//   );
// };

// export default App;

/* Com classe */
// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     usuarios: ["A", "B", "C"],
//   };

//   render() {
//     const { usuarios } = this.state;

//     return (
//       <div className="App">
//         <h1>Teste</h1>
//         {usuarios.map((item) => (
//           <p>{item}</p>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;

/* Com função */
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [usuarios, setUsuarios] = useState(["A", "B", "C"]);

//   useEffect(() => {
//     setTimeout(() => {
//       setUsuarios([...usuarios, "D"]);
//     }, 3000);
//   }, []);

//   return (
//     <div className="App">
//       <h1>Teste Função</h1>
//       {usuarios.map((item) => (
//         <p>{item}</p>
//       ))}
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";

const App = () => {
  const [usuario, setUsuario] = useState("");
  const [usuarios, setUsuarios] = useState(["A", "B", "C"]);

  const handleAddUsuario = () => {
    setUsuarios([...usuarios, usuario]);
    setUsuario("");
  };

  return (
    <div className="App">
      <h1>Oi Teste</h1>
      <div>
        <input
          value={usuario}
          onChange={(event) => setUsuario(event.target.value)}
        />
        <button onClick={handleAddUsuario}>Add</button>
      </div>
      <hr />
      {usuarios.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default App;
