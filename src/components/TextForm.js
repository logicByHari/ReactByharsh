import React,{useState} from 'react';

export default function TextForm(props) {
    const handelUpClick = () => {
      let newText = text.toUpperCase();
      setText(newText);
  }
  const handelUpChange = (event) => {
    setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
    
    return (
      <div className="mb-3">
        <h3>{props.heading}</h3>
        <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handelUpChange}></textarea>
        <button className="btn btn-primary" onClick={handelUpClick}>Convert To Upper</button>
      </div>
    )
}