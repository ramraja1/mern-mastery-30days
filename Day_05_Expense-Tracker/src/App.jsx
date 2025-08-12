import { useState } from "react";
import "./App.css";

function App() {
  const [money, setMoney] = useState(0);
  const [expense, setExpense] = useState(0);
  const [amount, setAmount] = useState("");

  const addIncome = () => {
    if (!amount || isNaN(amount)) return alert("Enter valid amount");
    setMoney(money + parseFloat(amount));
    setAmount("");
  };

  const addExpense = () => {
    if (!amount || isNaN(amount)) return alert("Enter valid amount");
    if (parseFloat(amount) > money) return alert("Not enough balance");
    setExpense(expense + parseFloat(amount));
    setMoney(money - parseFloat(amount));
    setAmount("");
  };

  return (
    <>
      <div className="main">
        {/* Navbar */}
        <div className="navbar">
          <h1 style={{ color: "white" }}>Expense Tracker</h1>
          <button>Logout</button>
        </div>

        {/* Content */}
        <div className="content">
          <div className="heading">
            <h1>Remaining Money: ₹{money}</h1>
            <h1>Total Expense: ₹{expense}</h1>
          </div>

          {/* Input Section */}
          <div style={{ marginTop: "20px" }}>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={addIncome}>Add Income</button>
            <button onClick={addExpense}>Add Expense</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
