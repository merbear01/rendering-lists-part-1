

function List() {
const cocktails = [{id: 1, name:"Kraken", calories: 100},
                    {id: 2, name: "Mojito", calories: 200},
                    {id: 3, name: "Pina Colada", calories: 300},
                    {id: 4, name: "Margarita", calories: 400},
                    {id: 5, name: "Mai Tai", calories: 500},
    ];
    //cocktails.sort((a, b) => a.name.localeCompare (b.name)); //Alphabetical order 
    //cocktails.sort((a,b) => b.name.localeCompare(a.name)); // Reverse alphabetical order 
    //cocktails.sort((a,b) => a.calories - b.calories); // Ascending order
    //cocktails.sort((a,b) => b.calories - a.calories); // Descending order


const lowCalCocktails = cocktails.filter(cocktail => cocktail.calories < 400);
const highCalCocktails = cocktails.filter(cocktail => cocktail.calories > 300);

const listItems = cocktails.map(cocktail => <li key={cocktail.id}>
                                                {cocktail.name}: &nbsp; 
                                                <b>{cocktail.calories}</b>
                                                </li>) // nbsp is short for non breaking space
                                                


const listItem2 = lowCalCocktails.map(lowCalCocktail => <li key={lowCalCocktail.id}>
                                                        {lowCalCocktail.name}: &nbsp; 
                                                        <b>{lowCalCocktail.calories}</b>
                                                        </li>) // nbsp is short for non breaking space

const listItem3 = highCalCocktails.map(HighCalCocktail => <li key={HighCalCocktail.id}>
                                                        {HighCalCocktail.name}: &nbsp; 
                                                        <b>{HighCalCocktail.calories}</b>
                                                        </li>) // nbsp is short for non breaking space


    return ( <>
<h2>Our Cocktails</h2>
   <ol>{listItems}</ol>,
   <h2> Low Calorie Cocktails</h2>
            <ol>{listItem2}</ol>
            <h2> High Calorie Cocktails</h2>
            <ol>{listItem3}</ol>
            </>
    )
}

export default List;