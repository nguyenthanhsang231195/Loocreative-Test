import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

// Components
import Navbar from './Components/Navbar/Navbar';
import Dropdown from './Components/Dropdown/Dropdown';

function App() {
    return (
<BrowserRouter>
    <div className="App">
        <header className="header-website">
            <Navbar />
            <Dropdown />
        </header> 

        <main className="main-website">
            Main
        </main>

        <footer className="footer-website">
            Footer
        </footer>
    </div>
</BrowserRouter>
    );
}

export default App;
