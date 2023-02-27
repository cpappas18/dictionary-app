import './App.scss';
import logo from './assets/images/logo.svg';
import moon from './assets/images/icon-moon.svg';
import Switch from './components/Switch';
import FontPicker from './components/FontPicker';
import { useEffect, useState } from 'react';
import axios from 'axios';
import WordDetails from './components/WordDetails';

function App() {
    const [ darkMode, setDarkMode ] = useState(false);
    const [ font, setFont ] = useState('sans-serif');
    const [ searchedWord, setSearchedWord ] = useState('');
    const [ apiData, setApiData ] = useState(null);

    useEffect(() => {
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`)
        .then((res) => setApiData(res.data[0]))
        .catch(() => setApiData(null));
    }, [searchedWord]);

    return (
        <div className={`App ${font} ${darkMode ? 'dark' : ''}`}>
            <header>
                <div>
                    <img src={logo} alt='Dictionary logo' />
                </div>
                <div className='controls'>
                    <div className='font-picker-container'>
                        <FontPicker font={font} setFont={setFont} />
                    </div>
                    <div className='switch-container'>
                        <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>
                    <div className='icon-container'>
                        <img src={moon} alt='Moon icon' className={`moon ${darkMode && 'purple'}`} />
                    </div>
                </div>
            </header>
            <main>
                <input 
                    key='search-bar' 
                    value={searchedWord} 
                    placeholder={"Search for any word..."} 
                    onChange={(e) => setSearchedWord(e.target.value)} 
                    className={`search-bar ${darkMode && 'dark'}`}
                />
                <div>
                    { searchedWord.length > 0 ? (
                        apiData ? (
                            <WordDetails data={apiData} /> 
                        ) : (
                            <p className='main-text'>Word not found.</p>
                        )
                    ) : (
                        <div className='main-text'>
                            <p>Welcome to your personal <span className='purple'>dictionary!</span></p>
                            <p>Search for a word to get started.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
