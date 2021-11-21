import './App.css';
import { AppContainer } from './Components/AppContainer.style';
import { GlobalStyles } from './GlobalStyles.style'
import { InsertRow } from './Components/InsertRow/insertRow';
import { TableChamp } from './Components/Table/TableChamp';
import TeamProvider from './context/Team';
import ParticipantProvider from './context/Participants';
import FixtureProvider from './context/Fixtures';
import { SchedulerButton } from './Components/SchedulerButton.style';
import { TableFixtures } from './Components/TableFixtures/TableFixtures';
import Header from './Components/Header/Header';

function App() {
  return (
    <TeamProvider>
      <ParticipantProvider>
        <FixtureProvider>
          <AppContainer>
            <GlobalStyles />
            <Header></Header>
            <h3>Adicione</h3>
            <InsertRow></InsertRow>
            <TableChamp></TableChamp>
              <SchedulerButton></SchedulerButton>
            <TableFixtures></TableFixtures>
          </AppContainer>
        </FixtureProvider>
      </ParticipantProvider>
    </TeamProvider>
  );
} 

export default App;
