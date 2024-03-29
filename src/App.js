import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import data from './data'
function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key="{item.key}"
        {...item}
      />  
    )
  })
  return (
    <div>
      <Navbar />
      <section className='cards-list'>{cards}</section>
      <Footer />
    </div>
  );
}

export default App;
