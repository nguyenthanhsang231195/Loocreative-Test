import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

// Components
import Navbar from './Components/Navbar/Navbar';
import Dropdown from './Components/Dropdown/Dropdown';
import Footer from './Components/Footer/Footer';

// Screens
import HomeScreen from './Screens/HomeScreen/HomeScreen';



function App() {
    return (
<BrowserRouter>
    <div className="App">
        <header className="header-website">
            <Navbar />
            <Dropdown />
        </header> 

        <main className="main-website">
            {/* HomeScreen */}
            <Route path="/" component={HomeScreen} exact />
        </main>

        <footer className="footer-website">
            <Footer />
        </footer>
    </div>
</BrowserRouter>
    );
}

export default App;
