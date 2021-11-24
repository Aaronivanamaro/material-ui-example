import { Route, Router } from "react-router";
import Notes from './pages/Notes'
import Create from './pages/Create'

function App() {
  return (
    <Router>
      <Route path="/" element={<Notes />}/>
      <Route path="/create" element={<Create />}/>
    </Router>    
  );
}

export default App;
