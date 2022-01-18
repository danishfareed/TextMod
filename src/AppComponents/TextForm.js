import React from "react";
import { useState } from "react";
import { Alert } from "./Alert";

export default function TextForm(props) {

    const [text, setText] = useState('');
    const [charcount, setCharcount] = useState(0);
    const [wordcount, setWordcount] = useState(0);
    const [linecount, setLinecount] = useState(0);

    const [alert, setAlert] = useState(null)

    const showAlert = (message, color) =>{
        setAlert({
          msg: message,
          color: color
        })
        setTimeout(() => {
          setAlert(null);
        }, 3000);
    }

    /**Button Click Handelers start*/
    const handleUpperCase = ()=>{
            let UpperTextTemp = text.toUpperCase();
            if(UpperTextTemp === '') {
              showAlert("Please paste your text to perform action", "red") 
            }else{ 
              setText(UpperTextTemp)
              showAlert("Text has been converted to UPPERCASE", "green");
            }
    }

    const handleLowerCase = ()=>{
        let LowerCaseTemp = text.toLowerCase();
        if(LowerCaseTemp === '') {
          showAlert("Please paste your text to perform action", "red") 
        }else{ 
          setText(LowerCaseTemp);
          showAlert("Text has been converted to lowercase", "green");
        }
    }

    const handleCapitalCase = ()=>{
      
        let CapitalCaseTemp = text.toLowerCase().replace( /\n/g, " " ).split(' ').map(function(word) {
          return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');

        if(CapitalCaseTemp === '') {
          showAlert("Please paste your text to perform action", "red") 
        }else{ 
          setText(CapitalCaseTemp);
          showAlert("Text has been converted to Capital Case", "green");
        }
    }

    const handleSentenceCase = ()=>{
      let SentenceCaseTemp = text.toLowerCase().replace(/\si\s/g, ' I ');
	    SentenceCaseTemp = SentenceCaseTemp.charAt(0).toUpperCase() + SentenceCaseTemp.slice(1);
      
      if(SentenceCaseTemp === '') {
        showAlert("Please paste your text to perform action", "red") 
      }else{ 
        setText(SentenceCaseTemp);
        showAlert("Text has been converted to Sentence case", "green");
      }
  }

  const handleCopy = ()=>{
    if(text === '') {
      showAlert("There no text to copy", "red") 
    }else{ 
      navigator.clipboard.writeText(text);
      showAlert("Text has been copied!", "yellow");
    }
    
  }
  const handleClear = ()=>{
    if(text === '') {
      showAlert("Text area is already empty", "red") 
    }else{ 
      setText("");
      showAlert("Textarea is cleared", "yellow");
    }
  }
    /**Button Click Handelers End*/


    const handleTextOnChange = (event)=>{
        //set input value in value
        setText(event.target.value);

        //count charecter
        let CharCountTemp = event.target.value.length;
        setCharcount(CharCountTemp);

        //count words
        let WordCountTemp = event.target.value.split(/\s+\b/).filter((element)=>{return element.length!==0}).length;
        setWordcount(WordCountTemp);

        //Count Lines
        let LineCountTemp = event.target.value.split("\n").filter((element)=>{return element.length!==0}).length;  
        setLinecount(LineCountTemp);
    }
    console.log();
   
  return (
    <>
    
<section className="text-gray-600 body-font relative dark:bg-slate-900">
  <div className="container px-5 py-18 mx-auto flex flex-row justify-center align-center">
    <div className="lg:w-full md:w-full bg-white dark:bg-slate-800 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0 relative z-10 shadow-md mt-10">
    <Alert alert={alert}/>
      <h2 className="text-gray-900 text-lg mt-15 mb-1 font-medium title-font dark:text-white">{props.Textareaheading}</h2>
      <p className="leading-relaxed mb-5 text-gray-600 dark:text-slate-400">This is our text mod app</p>
      <div className="relative mb-4">
        <label htmlFor="myBox" className="leading-7 text-sm text-gray-600 dark:text-slate-400">Textarea</label>
        <textarea id="myBox" name="myBox" rows="40" className="w-full bg-white dark:bg-slate-700 rounded border border-gray-300 focus:border-green-500 focus:ring-2 
        focus:ring-green-200 h-80 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out
        bg-clip-padding dark:text-slate-100" value={text} placeholder="Enter your text here" onInput={handleTextOnChange} onChange={handleTextOnChange}></textarea>
      </div>
      <div className="relative mb-4 flex flex-row py-2">
          <span className="text-sm dark:text-slate-400">Character Count: {charcount} | Word Count: {wordcount} | Line Count: {linecount} | Reading Time: {Number.parseFloat(0.008*wordcount).toFixed(2)} Mins</span>
      </div>
      <div className="relative mb-4 container block justify-evenly ">
        <button className="text-white bg-green-500 border-0 py-1 px-3 focus:outline-none 
        hover:bg-green-600 rounded text-md m-2" onClick={handleUpperCase} >UPPERCASE</button>
        <button className="text-white bg-green-500 border-0 py-1 px-3 focus:outline-none 
        hover:bg-green-600 rounded text-md m-2" onClick={handleLowerCase} >lowercase</button>
        <button className="text-white bg-green-500 border-0 py-1 px-3 focus:outline-none 
        hover:bg-green-600 rounded text-md m-2" onClick={handleCapitalCase} >Capitalized Case</button>
        <button className="text-white bg-green-500 border-0 py-1 px-3 focus:outline-none 
        hover:bg-green-600 rounded text-md m-2" onClick={handleSentenceCase} >Sentence case</button>
        <button className="text-white bg-green-500 border-0 py-1 px-3 focus:outline-none 
        hover:bg-green-600 rounded text-md m-2" onClick={handleClear}>Clear</button>
        <button className="text-white bg-green-500 border-0 py-1 px-3 focus:outline-none 
        hover:bg-green-600 rounded text-md m-2" onClick={handleCopy}>Copy</button>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
