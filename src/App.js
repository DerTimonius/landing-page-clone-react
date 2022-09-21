import Actions from './components/Actions';
import Community from './components/Community';
import Bottom from './components/Footer';
import Top from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Supercharge from './components/Supercharge';

function App() {
  return (
    <div className="App">
      <Top />
      <Hero />
      <Supercharge />
      <Actions />
      <Community />
      <Pricing />
      <Bottom />
    </div>
  );
}

export default App;
