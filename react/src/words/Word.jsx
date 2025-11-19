import React from 'react'
import { useSelector } from 'react-redux'

export default function Word() {
    // const { wordDetails } = useSelector(state => state.word)
     const wordDetails = useSelector(state => state.word?.wordDetails);
    const synth = window.speechSynthesis

     if (!wordDetails) return <p>Select a word to see details...</p>;

    return (
       <div className="my-3">
            <div className="d-flex justify-content-start align-items-center">
                <span className="volume__icon"
                      onClick={() => synth.speak(new SpeechSynthesisUtterance(wordDetails.name))}>
                    <i className="bi bi-volume-up-fill h2"></i>
                </span> 
                <h5 className="fw-bold ms-2">{wordDetails.name}</h5>
            </div>

            <div className="d-flex flex-column justify-content">
                {wordDetails.definitions?.map(def => (
                    <div key={def.id}>
                        <span className="fw-bold">{def.part_of_speech}</span>
                        <p className="d-flex flex-column">
                            <span className="text-danger">{def.meaning}</span>
                            <span>{def.example_sentence}</span>
                        </p>
                    </div>
                ))}

                {wordDetails.synonyms?.map(syn => (
                    <div className="d-flex flex-wrap justify-content-start" key={syn.id}>
                        {syn.similars.split(',').map((similar, index) => (
                            <span className="badge bg-secondary ms-1" key={index}>
                                {similar}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}