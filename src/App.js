import "./styles.css";

export default function App() {
  function handleInput() {
    //please put your logic here
    let inputValue = document.getElementById("input");
    const resultDiv = document.getElementById("result");

    inputValue.value = inputValue.value.replace(/[.,]/g, "");

    const isNumeric = /^-?\d+(\.\d+)?$/.test(inputValue.value);
    if (!isNumeric) {
      inputValue.value = null;
      resultDiv.innerHTML = `Result: 0`;
      return;
    }

    const reversedValue = parseInt(
      inputValue.value.split("").reverse().join("")
    );

    const result = Math.abs(reversedValue - inputValue.value);
    resultDiv.innerHTML = `Result: ${result}`;
  }

  return (
    <div className="App">
      <div>
        Number: <input id="input" />
        <button onClick={handleInput}>Submit</button>
      </div>
      <div id="result">Result: 0</div>
    </div>
  );
}
