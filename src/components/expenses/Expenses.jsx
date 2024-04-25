// more expenses components will be added here
import { ExpenseItem } from "../expense-item/ExpenseItem";
import PropTypes from "prop-types";
import css from "./Expenses.module.css";
import { ExpenseFilter } from "../expense-filter/ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "../ExpenseChart";
import { ExpenseFilterOne } from "../expense-filter/ExpenseFilterOne";

export const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("All");

  const yearChangeHandler = () => {
    setSelectedYear(event.target.value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (expense.date.getFullYear().toString() === selectedYear) {
      return true;
    }
    return false;
  });

  const renderedExpenses = selectedYear === "All" ? expenses : filteredExpenses;

  //my sort
  const [filterAll, setFilterAll] = useState("По убыванию");

  const allFilter = () => {
    setFilterAll(event.target.value);
  };

  const allFilteredExpen = renderedExpenses.sort((a, b) => {
    if (filterAll === "По возрастанию") {
            return a.price - b.price;
    }
    if (filterAll === "По убыванию") {
      if (a.price < b.price) {
        return 1;
      }
      if (a.price > b.price) {
        return -1;
      }
      return 0;
    }
    if (filterAll === "По новизне") {
      if (a.date < b.date) {
        return 1;
      }
      if (a.date > b.date) {
        return -1;
      }
      return 0;
    }
    if (filterAll === "По названию") {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    }
  });

  const renderedExpensesAll =
    selectedYear === "All" ? expenses : allFilteredExpen;

  return (
    <ul className={css.expenseWrapper}>
      <div className={css.expenseGrid}>
        <div>
          <ExpenseFilterOne value={filterAll} onChange={allFilter} />
        </div>
        <div>
          <ExpenseFilter value={selectedYear} onChange={yearChangeHandler} />
        </div>
      </div>
      <ExpensesChart expenses={renderedExpensesAll} />

      {renderedExpensesAll.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            price={item.price}
          />
        );
      })}
    </ul>
  );
};

Expenses.propTypes = {
  expenses: PropTypes.array.isRequired,
};

