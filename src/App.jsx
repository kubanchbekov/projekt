import { useState } from "react";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/new-expense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      // Страхование автомобилей
      title: "Car Insurance",
      price: 300,
      date: new Date(),
      id: "f1",
    },
    {
      // Медицинское страхование
      title: "Health Insurance",
      price: 400,
      date: new Date(),
      id: "f2",
    },
  ]);
  const addNewExpenseHandler = (data) => {
    const updatedExpenses = [...expenses, data];
    setExpenses(updatedExpenses);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <NewExpense onAdd={addNewExpenseHandler} />
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
