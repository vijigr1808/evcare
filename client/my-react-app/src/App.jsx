import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/LoginPage';
import Home from './components/Home/HomePage';

const Route = () => {
    switch (window.location.pathname.toLowerCase()) {
      case '/login':
        return <Login />;
      case '/home':
        return <Home />;
      default:
        return <Login />;
    }
  };  

const App = () => {
  return (
    <div className="App">
        <Route />
    </div>
  );
};

export default App;