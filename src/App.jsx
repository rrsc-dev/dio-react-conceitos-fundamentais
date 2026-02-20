const App = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="App">
      <h1>Teste</h1>
      {arr.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
};

export default App;
