
import ppo from "./assets/po.png"
import Header from "./playground_components/Header"
import Content from "./playground_components/Content"
import Footer from "./playground_components/Footer"
// i want to use hook useState() I need to import it from react
import {useState} from "react"

const Playground = () => {
    // we sent a request to an api and we got back appname
    var appname = "Blogger";
   
    // var count = 0; // because count will be changing, we cannot keep it in a variable, we keep it in a state
     const [count, setCount]    =   useState(0) // count is the container, setCount is the only one that can change count
    // count++ is a crime: we dont update a state directly
    var fruits = ["Kiwi", "Banana", "Blueberry", "Apple"];
    var products = [
        {
            id: 1,
            name: "Apple cider Vinegar",
            price: 2000
        },
        {
            id: 2,
            name: "Yellow Garri",
            price: 1000
        },
        {
            id: 3,
            name: "Pink Avocado",
            price: 6000
        }

    ];
    // state is used to keep a data that could be changing: react will update it by intself. Everywhere the state is used

    function sayHello(){
        alert("Hello Mr Akpan")
    }

  return (
    <div>
       
        <Header  xyz={appname}  abc={count}  />
        <Content  count={count}  fruits={fruits}  products={products} updater = {setCount} />
        <Footer />

        {/* how display image that is inside the public folder */}
        <img src="/assets/img/home-bg.jpg" alt="a princes" className="img-fluid" />
        {/* How to display an image that is inside the src folder */}
        <img  src={ppo}   alt="a princess on her birthday" />
    </div>
  )
}

export default Playground