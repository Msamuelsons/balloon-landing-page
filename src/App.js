import './App.css'
import Header from './components/Header'
import Body from './components/body'
import TitleImg from './assets/img/title.png'
function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Body />
        <div className="content__title">
          <img src={TitleImg} alt="Título" />
        </div>
      </div>

      <button className="button">
        <span>Explorer</span>
      </button>
    </div>
  )
}

export default App
