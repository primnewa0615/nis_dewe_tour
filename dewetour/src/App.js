import React from 'react';
import HeaderHome from './pages/HeaderHome';
import Content from './pages/content';
import Footer from './pages/footer';
import './App.css';
import './asset/style/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <HeaderHome />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
