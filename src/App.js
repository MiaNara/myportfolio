
import './App.scss';
import BPParticales from './components/BPParticles'
import Card from './components/Card'
import Skills from './components/Skills'
import Aboutme from './components/Aboutme'
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
     <BPParticales/>
     <Routes>
      <Route path="/" element={<Card/>}></Route>
      <Route path="/aboutme" element={<Aboutme/>}></Route>
      <Route path="/skills" element={<Skills/>}></Route>
      {/* <Route path="/projects" element={<Card/>}></Route> */}
     </Routes>
     
    </div>
  );
}

export default App;
