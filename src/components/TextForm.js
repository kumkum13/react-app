import React, { useState }  from 'react';
 

export default function TextForm(props) {
    const handleUpClick =()=>{
        
        let newText =text.toUpperCase();
        setText( newText)
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick =()=>{
        
      let newText =text.toLowerCase();
      setText( newText)
      props.showAlert("Converted to lowercase","success");
  }
  const handleclearClick =()=>{
        
    let newText = " ";
    setText( newText)
    props.showAlert("Everything is clear","success");
}
    const handleOnChange =(event)=>{
        
        setText(event.target.value);
    }
    const [text , setText]= useState('');
  return (
    <>
  <div className='container' style={{color: props.mode ==='dark'?' white':' black'}}>
      
    <div className="mb-3">
      <h1 className='mb-2'>{props.heading} </h1>
   
     <textarea className="form-control" value={text} style={{color: props.mode ==='dark'?' white':' black',backgroundColor:props.mode ==='dark'?'darkgrey':'white'}}   onChange ={handleOnChange}id=" myBox" rows="8"/>
   
    </div>
     <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
     <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
     <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear text</button>
      

  </div>
  <div className="container my-2" style={{color: props.mode ==='dark'?' white':' black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").filter((Element)=>{return Element.length!==0}).length} Minutes read </p>
    <h3>Preview</h3>
    <p>{text.length>0?text:" NOTHING TO PRIVIEW"}</p>
  </div>
  </>
  )
}
