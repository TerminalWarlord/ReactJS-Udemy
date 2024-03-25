import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';
import { useState } from 'react';

const VALUES = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
}

function App() {
  const [userInput, setUserInput] = useState(VALUES);
  function handleInputChange(key, e) {
    setUserInput((prevUserInput) => {
      const updatedUserInput = { ...prevUserInput, [key]: +e.target.value }
      return updatedUserInput;
    })
  }
  return (
    <div>
      <Header />
      <UserInput onInputChange={handleInputChange} userInput={userInput} />
      {userInput.duration > 0 ? <Result userInput={userInput} /> : <p className='center'>Please enter a valid duration!</p>}
    </div>
  )
}

export default App
