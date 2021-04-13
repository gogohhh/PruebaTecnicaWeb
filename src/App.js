import './App.css';
import Sidebar from './components/sidebar/sidebar.js';
import TicketStatus from './components/content/content';

function App() {
  return (
    <div className="App">
      <div className="wraper">

      <Sidebar />
      <TicketStatus /> 
      

      </div>
    </div>
  );
}

export default App;
