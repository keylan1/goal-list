import './App.css';

import { useState, useEffect } from 'react';

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: '', by: '' });

  // [e.target.name] allows dynamic selecting, eg goal or by
  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: '', by: '' });
  }

  return (
    <>
      <h1>My goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="goal"
          placeholder="goal"
          value={formData.goal}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="by"
          placeholder="by"
          value={formData.by}
          onChange={changeHandler}
        />
        <button>Submit goal</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [allGoals, updateAllGoals] = useState([]);
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  useEffect(() => {
    document.title = toggle ? 'Welcome to lillemon' : 'useEffect hook';
  }, [toggle]);

  return (
    <>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
      <>
        <h2>useEffect hook</h2>
        <button onClick={clickHandler}>Toggle message</button>
        {toggle && <h3>Welcome to lillemon</h3>}
      </>
    </>
  );
}

export default App;
