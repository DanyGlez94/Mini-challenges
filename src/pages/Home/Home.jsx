import { Link } from 'react-router-dom';
import './Home.scss';
import '../../assets/Buttons.scss';

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='home__container'>
          <div>
            <h1 className='home__title'>Mini challenges hub</h1>
            <h2>Some apps to practice my coding skills!</h2>
            <div className='buttons'>
              <Link to='/gifs-app'>
                <button className='main_button'>Gifs App</button>
              </Link>
              <Link to='/todo-app'>
                <button className='main_button'>To-Do App</button>
              </Link>
              <Link to='/music-app'>
                <button className='main_button'>Music App</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Home };