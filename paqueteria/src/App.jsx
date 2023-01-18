import { Main } from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

function App() {

  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    if(darkTheme){
      document.body.style = 'background-color: rgb(156, 153, 153)'
    }else{
      document.body.style = 'background-color: white'
    }
  }, [darkTheme])
  

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
        <Main />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
