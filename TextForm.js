import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was clicked')

    if (txt === "CONVERT TO UPPERCASE") {
      let newtext = text.toUpperCase();
      setText(newtext);
      setTxt("convert to lowercase");
      props.showAlert("Converted to upperCase","success");
      
    } else {
      let newtext = text.toLowerCase();
      setText(newtext);
      setTxt("CONVERT TO UPPERCASE");
      props.showAlert("Converted to lowerCase","success")
    }
  };

  const handleOnChange = (event) => {
    // console.log('handle on change') it is only for our clearnace ,no need to log something on console.
    // setText(event.target.value.toUpperCase())   ,it can directly type in uppercase
    setText(event.target.value);
  };
  const OnClear = () => {
    setText("");
    props.showAlert("Text Cleared","success")
  };

  const handleUpCopy = () => {
    let txtt = document.getElementById("myBox");
    txtt.select();
    // txt.setSelectionRange(0,9999);
    navigator.clipboard.writeText(txtt.value);
    props.showAlert("Copied to Clipboard",'success');
  };

  const handleExtraSpaces = () => {
    let a = text.split(/[ ]+/);
    setText(a.join(" "));
    props.showAlert("Text Formated","success")
  };
  //we can use this variable in this entire function.
  const [text, setText] = useState("");
  const [txt, setTxt] = useState("convert to uppercase");

  // setText('this is changed text');
  return (
    <>
      <div className="container "  style={{color:props.mode==='light'?'black':'white'}}>
        <div className="head">
          <h1 > {props.heading} </h1>
          <button className="btn btn-primary my-2" onClick={OnClear} clear>
            <b>Clear</b>{" "}
          </button>
        </div>
        {/* improted boostrap form from bootstrap */}

        <div className="mb-3">
          {/* <label htmlFor="myBox" class="form-label">
          Example textarea
        </label> */}
          <textarea
           
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'grey':'lightgrey',color:props.mode==='light'?'black':'white'}}
          ></textarea>
           
          <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>
            {txt}
          </button>
          <button className="btn btn-primary my-2 mx-1" onClick={handleUpCopy}>
            Copy
          </button>
          <button className="btn btn-primary my-2 mx-1" onClick={handleExtraSpaces}>
            Format
          </button>
        </div>
      </div>

      <div className="container my-4" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>your text summery</h1>
        <b>
          {text.length>0?text.split(" ").length:0} words,{text.length} characters
        </b>

        <p>{0.008 * text.split(" ").length} minutes to read</p>

        <h3>preview</h3>
        <p>{text.length>0?text:'Enter something to preview it'}</p>
      </div>
    </>
  );
}

//react7 tutorial
