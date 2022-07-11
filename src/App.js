import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title : 'Gelato', amount : 14.67, date : new Date(2021, 3, 12)},
    { title : 'Palestra', amount : 60.00, date : new Date(2021, 3, 22)},
    { title : 'Ricarica Cell', amount : 5.99, date : new Date(2021, 4, 1)},
    { title : 'Viaggio Ibiza', amount : 1294.67, date : new Date(2021, 4, 20)}
  ]

return (
  <div>
    <h2>Let's get started!</h2>
    <Expenses el={expenses}/>
  </div>
)}

export default App;