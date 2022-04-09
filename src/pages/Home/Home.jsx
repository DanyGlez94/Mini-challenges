import './Home.scss';
import '../../assets/Buttons.scss'

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='home__container'>
          <div>
            <h1 className='home__title'>Mini challenges hub</h1>
            <h2>Some apps to practice my coding skills!</h2>
            <div className='buttons'>
              <button>Gifs App</button>
              <button>To-Do App</button>
              <button>Music App</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Home };