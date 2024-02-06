// App.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './main';
import Navbar from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

const App = () => {
  return (
    <div>
      {/* Other components or sections */}
      <Navbar />
      <Main />
    </div>
  );
};

const Main = () => {
  const plantListings = [
    { id: 1, name: 'Plant 1' },
    { id: 2, name: 'Plant 2' },
  ];

  return (
    <main>
      {plantListings.map(plant => (
        <ListItem key={plant.id} name={plant.name} />
      ))}
    </main>
  );
};
/* Plant image source */
const ListItem = ({ name }) => {
  return (
    <div className="list-item">
      <img src={} alt={name} />
      <div>{name}</div>
    </div>
  );
};

export default App;
