import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown
import remarkGfm from 'remark-gfm'; // Optional: For GitHub-flavored Markdown
import '@/style/Questionnaire.css';
import { post } from "@/utils/api"; 


const Questionnaire = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const questions = [
    {
      question: "1. How familiar are you with quantum computing?",
      type: "single",
      options: [
        "Completely unfamiliar, but interested in getting started",
        "Understand some basic concepts (e.g., qubits, superposition, entanglement)",
        "Have a solid foundation, familiar with quantum gates and basic algorithms (e.g., Shor’s, Grover’s)",
        "Strong knowledge of quantum computing, familiar with programming and have practiced quantum algorithms",
      ],
    },
    {
      question: "2. What is your mathematical background?",
      type: "single",
      options: [
        "Basic mathematics (algebra, trigonometry)",
        "Familiar with linear algebra, probability, and complex numbers",
        "Understand quantum mechanics-related math (e.g., Hilbert spaces, unitary matrices)",
      ],
    },
    {
      question: "3. What is your programming experience?",
      type: "single",
      options: [
        "No programming experience",
        "Basic knowledge of Python/other languages, but no quantum computing experience",
        "Familiar with quantum computing frameworks (e.g., Qiskit, Cirq, PennyLane)",
        "Experience writing and running quantum algorithms",
      ],
    },
    {
      question: "4. Have you studied any of the following fields?",
      type: "multiple",
      options: [
        "Classical computer science (data structures, algorithms)",
        "Quantum mechanics or related physics",
        "Machine learning or artificial intelligence",
      ],
      other: true,
    },
    {
      question: "5. Which direction of quantum computing interests you most?",
      type: "single",
      options: [
        "Basic concepts and theory",
        "Quantum programming and practice",
        "Applications of quantum computing in AI, finance, etc.",
      ],
      other: true,
    },
    {
      question: "6. How would you prefer to learn?",
      type: "multiple",
      options: [
        "Interactive tutorials (hands-on coding)",
        "Video courses",
        "Articles and documentation",
        "Online webinars or live lectures",
      ],
    },
    {
      question: "7. What difficulty level do you prefer for learning?",
      type: "single",
      options: [
        "Zero foundation, starting from the simplest concepts",
        "Moderate, with some math and programming background, learning quantum programming",
        "Challenging advanced courses, diving into algorithms and applications",
      ],
    },
  ];

  const totalQuestions = questions.length;

  const handleAnswer = (question, answer) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };


  const handleSubmitQuery = async () => {
    setIsLoading(true);
    try {
      const response = await post("/api/query/learning", { query: answers });
      setResult(response.path); // Assuming path is Markdown
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting query:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    handleSubmitQuery();
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  const isNextDisabled = !answers[currentQ.question] || (Array.isArray(answers[currentQ.question]) && answers[currentQ.question].length === 0);

  return (
    <div className="questionnaire-container">
      {!isSubmitted ? (
        <>
          <header>
            <h1>Quantum Computing Learning Path Assessment</h1>
            <p>Please answer the following questions to help us tailor a learning path for you.</p>
          </header>

          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            <span className="progress-text">Question {currentQuestion + 1} of {totalQuestions}</span>
          </div>

          <div className="question-card">
            <h2>{currentQ.question}</h2>
            {currentQ.type === "single" ? (
              <div className="options">
                {currentQ.options.map((option, index) => (
                  <label key={index} className="option-label">
                    <input
                      type="radio"
                      name={currentQ.question}
                      value={option}
                      checked={answers[currentQ.question] === option}
                      onChange={() => handleAnswer(currentQ.question, option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
                {currentQ.other && (
                  <input
                    type="text"
                    className="other-input"
                    placeholder="Other (please specify)"
                    onChange={(e) => handleAnswer(currentQ.question, e.target.value)}
                    disabled={answers[currentQ.question] && currentQ.options.includes(answers[currentQ.question])}
                  />
                )}
              </div>
            ) : (
              <div className="options">
                {currentQ.options.map((option, index) => (
                  <label key={index} className="option-label">
                    <input
                      type="checkbox"
                      value={option}
                      checked={answers[currentQ.question]?.includes(option) || false}
                      onChange={(e) => {
                        const currentAnswers = answers[currentQ.question] || [];
                        const newAnswers = e.target.checked
                          ? [...currentAnswers, option]
                          : currentAnswers.filter((ans) => ans !== option);
                        handleAnswer(currentQ.question, newAnswers);
                      }}
                    />
                    <span>{option}</span>
                  </label>
                ))}
                {currentQ.other && (
                  <input
                    type="text"
                    className="other-input"
                    placeholder="Other (please specify)"
                    onChange={(e) => {
                      const currentAnswers = answers[currentQ.question] || [];
                      handleAnswer(currentQ.question, [...currentAnswers, e.target.value].filter(Boolean));
                    }}
                  />
                )}
              </div>
            )}
          </div>

          <div className="navigation">
            <button onClick={handlePrevious} disabled={currentQuestion === 0} className="nav-btn">
              Previous
            </button>
            {currentQuestion < totalQuestions - 1 ? (
              <button onClick={handleNext} disabled={isNextDisabled} className="nav-btn next-btn">
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isNextDisabled || isLoading}
                className="nav-btn submit-btn"
              >
                {isLoading ? "Generating a plan may take up some time...😊" : "Submit"}
              </button>
            )}
          </div>

          <footer>
            <p>After submission, we’ll recommend a personalized learning path! 🚀</p>
          </footer>
        </>
      ) : (
        <div className="result-container">
          <h1>Your Personalized Learning Path</h1>
          <div className="result-text">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{result}</ReactMarkdown>
          </div>
          <button
            className="nav-btn restart-btn"
            onClick={() => {
              setIsSubmitted(false);
              setAnswers({});
              setCurrentQuestion(0);
              setResult('');
            }}
          >
            Restart Questionnaire
          </button>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;