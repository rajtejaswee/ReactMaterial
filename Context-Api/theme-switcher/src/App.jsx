import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContextProvider } from "./contexts/usetheme";
import ThemeBtn from "./components/Theme";
import Card from "./components/Card";


function App() {
  const [themeMode, setThememode] = useState('light')
  
  const lightTheme = () => {
    setThememode("light")
  }

  const darkTheme = () => {
    setThememode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  return (
    <ThemeContextProvider value = {{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
           <ThemeBtn/>
          <div className="w-full max-w-sm mx-auto"></div>
          <Card/>
        </div>
      </div>
      </ThemeContextProvider>
  );
}

export default App;
