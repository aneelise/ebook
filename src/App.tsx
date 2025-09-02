import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Details from './components/Details';
import Urgency from './components/Urgency';
import FAQ from './components/FAQ';
import Purchase from './components/Purchase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Details />
      <Urgency />
      <FAQ />
      <Purchase />
      <Footer />
    </div>
  );
}

export default App;