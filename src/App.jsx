import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Home from './components/home';
// import MyComponent from './components/MyComponent';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NavBar from './components/navbar';
// import CountContext from './CountContext';
// import Login from './components/login';
// import UserTable from './components/UserTable';
import TodosPage from './app/page';



function App() {
   const [count, setCount] = useState(0);
  
  return (
    <TodosPage />
    // <BrowserRouter>
    // <CountContext.Provider value={{ count, setCount }}>
    //   <NavBar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<MyComponent />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/users" element={<UserTable />} />
    //   </Routes>
    //   </CountContext.Provider>
    // </BrowserRouter>
  );
}

export default App
