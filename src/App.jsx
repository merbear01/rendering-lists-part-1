import List from './List.jsx'
function App() {




const cocktails =   [{id: 1, name:"Kraken", calories: 100},
                    {id: 2, name: "Mojito", calories: 200},
                    {id: 3, name: "Pina Colada", calories: 300},
                    {id: 4, name: "Margarita", calories: 400},
                    {id: 5, name: "Mai Tai", calories: 500} ];

const Beers =   [{id: 1, name:"Blue Moon", calories: 100},
  {id: 2, name: "Guiness", calories: 200},
  {id: 3, name: " Irish Stout", calories: 300},
  {id: 4, name: "Pale Ale", calories: 400},
  {id: 5, name: "Lambic", calories: 500} ];


const shoes =   [{id: 1, name:"Nike", calories: 100},
  {id: 2, name: "Adidas", calories: 200},
  {id: 3, name: "Reebok", calories: 300},
  {id: 4, name: "Puma", calories: 400},
  {id: 5, name: "New Balance", calories: 500} ];  

                    return (
                      <>
      {cocktails.length > 0 ? <List items={cocktails} category="Cocktails"/>: null }
      {Beers.length > 0 ? <List items={Beers} category="Beer"/> : null }

{/* Another way to write ternary operators */}
      {shoes.length > 0 && <List items={shoes} category="Shoes"/> }
      </>
  )
}

export default App;
