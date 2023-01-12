import logo from './logo.svg';
import './App.css';
import { MainScreen } from './screens/MainScreen';
import { NavbarComponent } from './components/NavbarComponent';

function App() {
  return (
    <>
      <NavbarComponent />
      <MainScreen />
    </>
  );
}

export default App;
