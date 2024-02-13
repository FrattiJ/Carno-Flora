import Jumbotron from '../components/Jumbotron/index'

export default function Home() {
    return (
      <div>
        <div className='bg-[#DAD7CD] p-8'>
          <Jumbotron /> 
          {/* Jumbotron will be the featured item from the store */}
        </div>
      </div>
    );
  }
  