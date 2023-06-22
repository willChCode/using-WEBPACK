import './App.css'
import { Hook } from './components/Hooks'

function App() {
  return (
    <>
      <div className='container'>
        <h1 className='titulo'>PROBANDO WEBPACK con caching</h1>
        <h4 className='subTitulo'>Agregando estilos</h4>
      </div>
      <Hook />
    </>
  )
}

export default App
