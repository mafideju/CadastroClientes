import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// 01: CRIAR AS ACTIONS PARA CADA AÇÃO DO USUÁRIO (COM IDENTIFICADOR UNICO)
// 02: CRIAR OS REDUCERS
// 03: CRIAR A STORE ONDE VAI O COMBINADOR DE REDUCER
// 04: CHAMAR O STORE.SUBSCRIBE
// 05: CRIAR OS DISPATCHS

// 06: CRIAR OS COMPONENTS NA APLICAÇÃO PARA INTERAGIR COM A STORE

// 01: CRIAR AS ACTIONS PARA CADA AÇÃO DO USUÁRIO (COM IDENTIFICADOR UNICO)
// ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
// REMOVE_EXPENSE
// para remover as despesas preciso apenas do ID
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});

// 02: CRIAR OS REDUCERS
// Default Expenses Reducer
const expensesReducerDefaultState = [];

// Expenses Reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// Default Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

// Filters Reducers
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// FILTRAR DESPESAS
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

// 03: CRIAR A STORE ONDE VAI O COMBINADOR DE REDUCER
// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

// 04: CHAMAR O STORE.SUBSCRIBE
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// 05: CRIAR OS DISPATCHS
const expenseOne = store.dispatch(
  addExpense({ description: 'Aluguel', amount: 1000, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'Café', amount: 3, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5 }));

// store.dispatch(setTextFilter('lu'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(999));

const demoState = {
  expenses: [
    {
      id: '01',
      description: 'Aluguel de Janeiro',
      note: 'Primeiro pagamento da casa nova',
      amount: 1000,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};
