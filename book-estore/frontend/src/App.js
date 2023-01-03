import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer'
import Shop from './components/Shop';
import HotPick from './components/HotPick'
import TopPick from './components/TopPick';

function App() {
  return (
    <div className='min-h-screen'>
      <Header />
      <Shop/>
      <HotPick />
      <TopPick />
      <Footer />
    </div>
  );
}

export default App;
