import Thing from "./components/Place.jsx";
import {AVAILABLE_THING } from "./data.js";
function App() {
  return (
    <>
      <h1>Welcome to React Card App!</h1>
      <h3>By Vicheka</h3>
    <main>
            <section className="places-category">
            <ul className="places">
                {AVAILABLE_THING.map((thing ) => (
                  <Thing
                  key={thing.id}
                  id= {thing.id}
                  title ={thing.title}
                  image ={thing.image} />
                ))}
              </ul>
            
            </section>
          </main>
    </>
  );
}

export default App;
