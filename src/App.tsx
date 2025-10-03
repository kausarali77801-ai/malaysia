import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;