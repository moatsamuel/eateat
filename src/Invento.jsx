
import "./assets/app.css"
import Footer from "./blogger_components/Footer"
import Create from "./invento_components/Create"
import Header from "./invento_components/Header"
import Products from "./invento_components/Products"

const Invento = () => {

    
  return (
    <div className="container">
        
        <Header />
        <Create />
        <Products />
        <Footer />

    </div>
  )
}

export default Invento