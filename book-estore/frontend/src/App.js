import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer'
import Shop from './components/Shop';

function App() {
  return (
    <div className='min-h-screen'>
      <Header />
      <Shop/>
      <Footer />
    </div>
  );
}

export default App;
