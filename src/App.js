import './App.css';

import { useState } from 'react';

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

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </>
  );
}

export default App;
