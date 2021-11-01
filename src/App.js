import './App.css';
import { AppContainer } from './Components/AppContainer.style';
import { GlobalStyles } from './GlobalStyles.style'
import { InsertRow } from './Components/InsertRow/insertRow';
import { TableChamp } from './Components/Table/TableChamp.style';
import TeamProvider from './context/Team';
import ParticipantProvider from './context/Participants';

function App() {
  return (
    <TeamProvider>
      <ParticipantProvider>
        <AppContainer>
          <GlobalStyles />
          <h3>Adicione</h3>
          <InsertRow></InsertRow>
          <TableChamp></TableChamp>
        </AppContainer>
      </ParticipantProvider>
    </TeamProvider>
  );
} 

export default App;
