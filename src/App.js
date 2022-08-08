import './App.css';
import { Categories } from './components/Categories/Categories';
import { Head } from './components/Head/Head';
import { Topbar } from './components/TopBar/Topbar';
import { Slots } from './components/Slots/Slots';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Topbar />
      <Head />
      {/* <Categories /> */}
      <Slots />
      <Footer />
    </div>
  );
}


export default App;
