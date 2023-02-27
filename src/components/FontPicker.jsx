import './FontPicker.scss';

const FontPicker = ({ font, setFont }) => {
    return (
        <div>
            <select name='fonts' id='fonts' className={`${font}`} onChange={(e) => setFont(e.target.value)}>
                <option value='sans-serif' id='sans-serif'>Sans Serif</option>
                <option value='serif' id='serif'>Serif</option>
                <option value='mono' id='mono'>Mono</option>
            </select>
        </div>
    );
};

export default FontPicker;