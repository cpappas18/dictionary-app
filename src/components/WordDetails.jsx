import './WordDetails.scss';
import newWindow from '../assets/images/icon-new-window.svg';

const WordDetails = ({ data }) => {
    const {
        word,
        phonetic = null,
        meanings = null,
        sourceUrls = null
    } = data;

    return (
        <div>
            <div>
                <h1>{ word }</h1>
                <p className='purple hm'>{ phonetic }</p>
            </div>
            { meanings && meanings.map((meaning, index) => (
                <div className='content' key={index}>
                    <div className='meaning'>                          
                        <h2 className='hm part-of-speech'><span>{ meaning.partOfSpeech }</span></h2>
                        <h3 className='hs grey'>Meaning</h3>
                        <ul>
                            { meaning.definitions.map((def, index) => (
                                <li key={index}>
                                    <p>{ def.definition }</p>
                                    { def.example && <p className='example'>"{ def.example }"</p>}
                                </li>
                            ))}
                        </ul>
                    </div>
                    { meaning.synonyms.length > 0 && (
                        <div className='synonyms'>
                            <h3 className='hs grey'>Synonyms</h3>
                            <ul>
                                { meaning.synonyms.map((synonym, index) => (
                                    <li key={index}>{ synonym }</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    { meaning.antonyms.length > 0 && (
                        <div className='antonyms'>
                            <h3 className='hs grey'>Antonyms</h3>
                            <ul>
                                { meaning.antonyms.map((antonym, index) => (
                                    <li key={index}>{ antonym }</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
            { sourceUrls.length > 0 && (
                <div className='source'>
                    <a href={sourceUrls[0]} target="blank"><h4>Source</h4></a>
                    <a href={sourceUrls[0]} target="blank"><p>{ sourceUrls[0] }</p></a>
                    <a href={sourceUrls[0]} target="blank" className='icon'><img src={newWindow} alt='Open new window icon' width={15}/></a>
                </div>
            )}
        </div>
    )
};

export default WordDetails;