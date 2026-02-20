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

import React, { Component } from "react";

class App extends Component {
  state = {
    usuarios: ["A", "B", "C"],
  };

  render() {
    const { usuarios } = this.state;

    return (
      <div className="App">
        <h1>Teste</h1>
        {usuarios.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    );
  }
}

export default App;
