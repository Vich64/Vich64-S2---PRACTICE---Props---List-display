function App() {
  return (
    <>
      <h1>Welcome to React Card App!</h1>
      <h3>By Someth Phay</h3>
      <div className="card-container">
        {ALL_PICTURES.map((info) => (
          <Card
            key={info.id}
            info={info}
          />
        ))}
      </div>
    </>
  );
}

export default App;
