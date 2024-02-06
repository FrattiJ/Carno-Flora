import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

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

const ListItem = ({ name }) => {
  return (
    <div className="list-item">
      <img src={/* Plant image source */} alt={name} />
      <div>{name}</div>
    </div>
  );
};


export default Main;