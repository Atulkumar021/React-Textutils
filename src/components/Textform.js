import React, { useState } from "react";

function Textform(props) {
  const [text, settext] = useState("");
  function handlerUPclick() {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Converted to Uppercase!","success")
  }
  function handlerlwclick() {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Converted to Lowercase!","success")
  }
  function handlerclearclick() {
    props.showalert("All Text cleared!","warning" )
    let newtext = "";
    settext(newtext);
  }
  function handlercopy() {
    navigator.clipboard.writeText(text);
    props.showalert("Text copied Succesfully!","success")
  }
  function handlerspaces() {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    props.showalert("Extra spaces removed Succesfully!","success")
  }
  function handleronchange(e) {
    settext(e.target.value);
   
  }
  return (
    <>
      <div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
        <textarea
        placeholder="Enter Text here..."
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={handleronchange}
          style={{backgroundColor:props.mode==='dark'?'#272829':'white' ,color:props.mode==='light'?'black':'white', border:"1px solid black"}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handlerUPclick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handlerlwclick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handlerclearclick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handlercopy}>
        Copy Clipboard
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handlerspaces}>
        Remove Extra Spaces
      </button>
      <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
        <p>{text.split("").length*0.008} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview..."}</p>
      </div>
    </>
  );
}

export default Textform;
