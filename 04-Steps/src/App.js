import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  function handlePrevious() {
    step > 1 ? setStep((s) => s - 1) : setStep(step);
    // alert("Previous");
  }
  function handlNext() {
    step < 3 ? setStep((s) => s + 1) : setStep(step);
  }

  return (
    <>
      <button className="close" onClick={() => setisOpen((flag) => !flag)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step:{step} {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              <span>Previous</span>
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlNext}
            >
              <span>Next</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
