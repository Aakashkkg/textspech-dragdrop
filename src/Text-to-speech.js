import React, { useEffect, useState } from "react";

function Text_speech() {

    const [voices, setvoices] = useState([]);


    let synth = window.speechSynthesis;
    function setSpeech() {
        return new Promise(
            function (resolve, reject) {
                let id;
                id = setInterval(() => {
                    if (synth.getVoices().length !== 0) {
                        resolve(synth.getVoices());
                        clearInterval(id);
                    }
                }, 10);
            }
        )
    }

    useEffect(() => {
        let s = setSpeech();
        s.then((voices) => setvoices(voices));

    }, [])


    const [vol, setvol] = useState(0.7);
    function Volume(e) {
        setvol(e);


    }

    const [rate1, setrate1] = useState(1);
    function rate(e) {
        setrate1(e);

    }

    const [pitch1, setpitch1] = useState(1.8);
    function pitch(e) {
        setpitch1(e);

    }

    const [voiceindex, setvoiceindex] = useState(0)
    function selctedvoice(e) {
        setvoiceindex(e)


    }

    const [speechtext, setSpeechtext] = useState("")
    function message(e) {
        setSpeechtext(e)

    }


    function start() {
// console.log(voices[voiceindex],rate1,pitch1,vol,speechtext)
let Speech = new SpeechSynthesisUtterance("");
Speech.text = speechtext;
Speech.pitch = pitch1;
Speech.volume = vol;
Speech.rate = rate1;
Speech.voice = voices[voiceindex];
Speech.lang = voices[voiceindex].lang;
// console.log(Speech)
window.speechSynthesis.speak(Speech)


    }


    function pause() {
        window.speechSynthesis.pause();
    }


    function resume() {
        window.speechSynthesis.resume();
    }

    function cancel() {
        window.speechSynthesis.cancel();
    }
    return (
        <>
            <div className="row mybody">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-2 mt-5">
                            <h1>Text To Speech</h1>

                            <p className="mt-4">Select Voice</p>
                            <select className="form-control newform form-select" onChange={(e) => selctedvoice(e.target.value)}>
                                <option defaultValue={""} ></option>
                                {voices.map((row, index) => (
                                    <React.Fragment key={row.name}>
                                        <option value={index}>{row.name}</option>
                                    </React.Fragment>
                                ))}
                            </select>
                            
                            <div className="row">
                                <div className="col-lg-4 my-2">
                                    <p className="mt-4">Volume</p>
                                    <input type={"range"} min="0" max="1" defaultValue={"0.7"} onChange={(e) => Volume(e.target.value)} step="0.1" />
                                    &nbsp;&nbsp;<span>{vol}</span>
                                </div>

                                <div className="col-lg-4 my-2">
                                    <p className="mt-4">Rate</p>
                                    <input type={"range"} min="0.1" max="10" step="0.1" defaultValue={"1"} onChange={(e) => rate(e.target.value)} />
                                    &nbsp;&nbsp;<span>{rate1}</span>
                                </div>


                                <div className="col-lg-4 my-2">
                                    <p className="mt-4">Pitch</p>
                                    <input type={"range"} min="0" max="2" step="0.1" defaultValue={"1.8"} onChange={(e) => pitch(e.target.value)} />
                                    &nbsp;&nbsp;<span>{pitch1}</span>
                                </div>
                            </div>

                            <textarea className="form-control " cols="30" rows="10" placeholder="Type here..." onChange={(e) => message(e.target.value)}></textarea>
                            <div className="row">
                                <div className="col-lg-12 mt-4 ">
                                    <button className="btn btn-success mx-2" onClick={start}>Start</button>
                                    <button className="btn btn-warning mx-2" onClick={pause}>Pause</button>
                                    <button className="btn btn-info mx-2" onClick={resume}>Resume</button>
                                    <button className="btn btn-danger mx-2" onClick={cancel}>Cancel</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}

export default Text_speech;