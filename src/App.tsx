import "./App.css"
import { Counter } from "./features/counter/Counter"
import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
       
       
      </header>
    </div>
  )
}

export default App
