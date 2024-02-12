import Jumbotron from '../components/Jumbotron/index'

export default function Home() {
    return (
      <div>
        <h1>Carno-Flora</h1>
        <div>
          <Jumbotron /> 
          {/* Jumbotron will be the featured item from the store */}
        </div>
      </div>
    );
  }
  