const budgetTracker = {
  budget: 0,
  expenses: [],
  setBudget: function (amount) {
    this.budget = amount;
    updateBudgetDisplay();
  },
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
    updateBudgetDisplay();
  },
  getTotalExpenses: function () {
    let totalExpenses = 0;
    this.expenses.forEach((expense) => {
      totalExpenses += expense.amount;
    });
    return totalExpenses;
  },
  calculateRemainingBudget: function () {
    return this.budget - this.getTotalExpenses();
  },
};

function setBudget() {
  const budgetInput = document.getElementById("budgetInput");
  const budgetAmount = parseInt(budgetInput.value);
  if (!isNaN(budgetAmount)) {
    budgetTracker.setBudget(budgetAmount);
    budgetInput.value = "";
  }
}

function addExpense() {
  const expenseDescription =
    document.getElementById("expenseDescription").value;
  const expenseAmount = parseInt(
    document.getElementById("expenseAmount").value
  );
  if (expenseDescription.trim() !== "" && !isNaN(expenseAmount)) {
    budgetTracker.addExpense(expenseDescription, expenseAmount);
    document.getElementById("expenseDescription").value = "";
    document.getElementById("expenseAmount").value = "";
  }
}

function updateBudgetDisplay() {
  document.getElementById("totalExpenses").textContent =
    budgetTracker.getTotalExpenses();
  document.getElementById("remainingBudget").textContent =
    budgetTracker.calculateRemainingBudget();
}
