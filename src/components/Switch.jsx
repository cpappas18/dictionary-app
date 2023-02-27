import './Switch.scss';

const Switch = ({ darkMode, setDarkMode }) => {
    return (
        <div className='switch'>
            <input 
                type='checkbox' 
                name='switch'
                id='switch'
                className='switch-checkbox'
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
            />
            <label 
                htmlFor='switch'
                className='switch-label'
            >
                <span className='switch-inner' />
                <span className='switch-switch' />
            </label>
        </div>
    )
};

export default Switch;