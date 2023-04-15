import React, { useState } from 'react'

export default function Textform(props) {


    const HandleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "success")
    }
    const HandleLowClick = () => {
        // console.log("Lower was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "success")
    }

    const HandleClearClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = '';
        setText(newText)
        props.showAlert("Text has been cleared", "success")

    }


    const HandleTexInverse = () => {
        let newText = text;
        let invText = newText.split("").reverse().join("")
        setText(invText)
        props.showAlert("Text inversed Successfully", "success")
    }

    const HandleCopy = () => {
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlert("Text Copied to Clipboard successfully", "success")
    }

    const HandleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)

    }



    const [text, setText] = useState('')


    return (
        <>
            <div className="container" style={{
                backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                color: props.mode === 'dark' ? 'white' : '#042743'
            }}>
                <div>
                    <h1 mb-4>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743'
                        }}></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={HandleUpClick}>Convert to UpperCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={HandleLowClick}>Convert to LowerCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={HandleClearClick}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={HandleTexInverse}>Text Inverse</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={HandleCopy}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>

                </div>
            </div>
            <div className="container my-3" style={{
                backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                color: props.mode === 'dark' ? 'white' : '#042743'
            }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p><b>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
