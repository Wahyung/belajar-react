import './App.css';
import Appbar from './component/Appbar';

import data from './json/data.json';

console.log(data);

function App() {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <Appbar />
      </header>

      <main className="px-3">
        {data.bisnis.map((item) => {
          return (
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.pictureId} />
                </div>
                <div classNameName="title">
                  <h1 className="card-title">{item.title}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </main>

      <footer className="mt-auto text-white-50"></footer>
    </div>
  );
}

export default App;
