import TuiPage from './components/TuiPage'
import sample from './sample/sample.json'

function App() {
  return (
    <div className="App">
      <TuiPage 
        data={sample}
        language="es" />
    </div>
  );
}

export default App;
