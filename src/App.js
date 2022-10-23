import './App.css';
import Component1 from './Component1';
import { ModalProvider } from './ModalContext';

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <Component1 title={"Modal One"} />
        <Component1 title={"Modal Two"} />
        <Component1 title={"Modal Three"} />
      </ModalProvider>
    </div>
  );
}

export default App;
