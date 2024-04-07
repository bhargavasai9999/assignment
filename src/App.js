import './App.css';
import { FormComponent } from './components/Forms/FormComponent';
import { Header } from './components/Header/Header';
import { Intro } from './components/IntroPage/Intro';
import { LearnACCA } from './components/LearnACCA/LearnACCA';
import { Placements } from './components/Placements/Placements';
import { StartJourney } from './components/StartJourney/StartJourney';
import { Card } from './components/WhyChoose/Card';
import { WhyChoose } from './components/WhyChoose/WhyChoose';

function App() {
  return (
          <>
            <Header/>
            <Intro/>
            <WhyChoose/>
            <LearnACCA/>
            <Placements/>
            <StartJourney/>
          </>
  );
}

export default App;
