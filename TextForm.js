import React,{useState} from "react";

export default function TextForm(props) {

  const handleUpClick=()=>
  {
    // console.log('Uppercase was clicked') 
   

    if(txt==="CONVERT TO UPPERCASE")
    {
      let newtext=text.toUpperCase();
      setText(newtext);
      setTxt("convert to lowercase");
    }

    else{
      let newtext=text.toLowerCase();
      setText(newtext);
      setTxt("CONVERT TO UPPERCASE");

    }
  }

  const handleOnChange=(event)=>
  {
    // console.log('handle on change') it is only for our clearnace ,no need to log something on console.
    // setText(event.target.value.toUpperCase())   ,it can directly type in uppercase
    setText(event.target.value)

  }

   //we can use this variable in this entire function.
    const [text,setText]=useState('enter text here');
    const [txt,setTxt]=useState('convert to uppercase')
  
    // setText('this is changed text');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      {/* improted boostrap form from bootstrap */}

      <div className="mb-3">
        {/* <label for="myBox" class="form-label">
          Example textarea
        </label> */}
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>

        <button className="btn btn-primary my-1" onClick={handleUpClick} >{txt}</button>
      </div>
    </div>

    <div className="container my-4">
      <h1>your text summery</h1>
      <b>{text.split(" ").length} words,{text.length} characters</b> 
      <p>{0.008 * text.split(" ").length} minutes to read</p>

      <h3>preview</h3>
      <p>{text}</p>
    </div>


    </>
  );
}

//react7 tutorial
