import React from 'react';
import './App.css';
import Geography from "./components/Geography";
import URL from './components/URL';
import Name from './components/section';
import SMS from './components/SMS';
import Email from './components/Email';
import NavBar from './components/NavBar';
import Clock from './components/footer';

const App: React.FC = () => {
  return (
    <div className="Container">
      <div className="Column1">
        <NavBar />
      </div>

      <div className="Column2">
        <Name />
      </div>

      <div className="Column3">
        <URL />
      </div>

      <div className="Column4">
        <SMS />
      </div>

      <div className="Column5">
        <Geography />
      </div>

      <div className="Column6">
        <Email />
      </div>

      <div className="Column7">
        < Clock />
      </div>
    </div>
  );
}

export default App;
