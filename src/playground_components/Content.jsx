

const Content = ({count, fruits, products, updater}) => {
  // count = 25 // props must not be mutated by the child
  // a function that handles click of decrease button
  function handle_decrease(){
    updater(count-1)
     
     console.log(count);
  }
  // a function that respond to the click of increase button
  function increase(){
      updater(count+1)
      console.log(count);
  }


  return (
    <div>
      <p> Count: {count} </p>
      {/* loop through array fruits: .map() */}
      <button  onClick={ increase } > Increase </button>
      {/* calling a function that respond to an event */}
      <button onClick={handle_decrease}> Decrease </button>
      <p>Available Fruits</p>
      <ul>
      {
        fruits.map(function(fruit, index){
           return <li key={index}> {fruit} </li>
        })
      }
      </ul>

      <p>Available Products</p>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(function(pro){
              return (
                    <tr key={pro.id}>
                      <td> {pro.id} </td>
                      <td>{pro.name}</td>
                      <td>{pro.price}</td>
                    </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default Content