import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";

// Function to create new theme that overrides default values
const theme = createTheme({
  palette:{
    primary: {
      main: '#0a0a0a'
    },
    secondary: purple
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>    
    </ThemeProvider>
  );
}

export default App;
