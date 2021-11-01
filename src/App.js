import './App.css';
import { AppContainer } from './Components/AppContainer.style';
import { GlobalStyles } from './GlobalStyles.style'
import { InsertRow } from './Components/InsertRow/insertRow';
import { TableChamp } from './Components/Table/TableChamp.style';
import TeamProvider from './context/Team';

function App() {
  return (
    <TeamProvider>
     <AppContainer>
        <GlobalStyles />
        <h3>Adicione</h3>
        <InsertRow></InsertRow>
        <TableChamp></TableChamp>
      </AppContainer>
    </TeamProvider>
  );
} 

export default App;
