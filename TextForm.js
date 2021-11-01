
import React, { useState } from 'react';

export default function TextForm(props) {
    const handleonchange = (event) => {
        console.log("Changed");
        setText(event.target.value)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!","success")
    }
    // const handleExtraSpace = () => {
    //     let newText = text.split(/[ ]+/);
    //     setText(newText.join[" "])
    // }
    const handleUpperCase = () => {
        // console.log("Clicked Up" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case!","success")
    }
    const handleLowerCase = () => {
        // console.log("Clicked Up" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case!","success")
    }
    const handleClear = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared!","success")
    }
    const [text, setText] = useState("");
    // text="New text";//Wrong way to use state
    // setText("New text")//correct way
    return (
        <>
            <div className="container my-3" style={{color:props.mode==="light"?"#25464c":"white"}}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="light"?"white":"#2b4160",color:props.mode==="light"?"#25464c":"white"}} onChange={handleonchange}
                        id="myBox" rows="10"></textarea>
                    <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleUpperCase}>Convert to UpperCase</button>
                    <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleLowerCase}>Convert to LowerCase</button>
                    <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleClear}>Clear Text</button>
                    <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleCopy}>Copy Text</button>
                    {/* <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpace}>Remove Extra Space</button> */}
                </div>
            </div>
            <div className="container my-1" style={{color:props.mode==="light"?"#25464c":"white"}}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!"}</p>

            </div>
        </>
    )
}
