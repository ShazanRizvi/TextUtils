import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [convertedtext, setConvertedText] = useState("");

  const handleupClick = () => {
    let newText = text.toUpperCase();
    setConvertedText(newText);
    props.showAlert("Converted to Upper Case, check preview", "success");
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setConvertedText(newText);
    props.showAlert("Converted to Lower Case, check preview", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setConvertedText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(convertedtext);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    setConvertedText(newText);
    props.showAlert("Cleared! Start typing new text", "success");
  };
  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#1B2430",
            color: props.mode === "dark" ? "white" : "black",
          }}
          placeholder="Enter Text Here"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          onChange={handleOnChange}
          value={text}
        ></textarea>

        <div className="container my-3">
          <button
            onClick={handleupClick}
            type="button"
            className={`btn btn-outline-${props.btnColor} mx-1 my-3`}
          >
            Convert To UPPERCASE
          </button>
          <button
            onClick={handleloClick}
            type="button"
            className={`btn btn-outline-${props.btnColor} mx-1 my-3`}
          >
            Convert to lowercase
          </button>
          <button
            onClick={handleExtraSpaces}
            type="button"
            className={`btn btn-outline-${props.btnColor} mx-1 my-2`}
          >
            Remove Extra spaces
          </button>
          <button
            onClick={handleCopy}
            type="button"
            className={`btn btn-outline-${props.btnColor} mx-1 my-3`}
          >
            Copy Text
          </button>
          <button
            onClick={handleClear}
            type="button"
            className={`btn btn-outline-${props.btnColor} mx-1 my-3`}
          >
            Clear Text
          </button>

          <div className="my-3">
            <h2>Preview</h2>
            <p>
              {convertedtext.length > 0
                ? convertedtext
                : "Enter your text in the analyzer to preview it here"}
            </p>
          </div>
        </div>
        <div className="my-3">
          <h2>Your text summary</h2>
          <p>
            {text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} minutes read</p>
        </div>
      </div>
    </div>
  );
};

export default TextForm;
