import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from "./components/Layout";

// Function to create new theme that overrides default values
// primary.main
// secondary.main
// error.main
// warning.main
// info.main
// success.main
// text.primary
// text.secondary
// text.disabled

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Layout>
    </Router>    
  );
}

export default App;
