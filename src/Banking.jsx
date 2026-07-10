
import  {useState} from "react"

import AccountBalance from "./banking_components/AccountBalance"
import Form from "./banking_components/Form"
import Hello from "./banking_components/Hello"
import Hi from "./banking_components/Hi"


const Banking = () => {
    // var balance = 0; // no we cant store the balance in a variable because it will be changing
    // The balance state has to be here in the parent because more than one components needs it
       const[balance, setBalance]  = useState(0) // we send a request to an api endpoints that returns balance of the user from db and it will be set as default for useState
  return (
    <div className="container py-5">
        <div className="row">
            <div className="col-md-12 text-center">
                <h1>Bankie Bank</h1>
            </div>
        </div>
        {/* other components assembled here */}
        {
            balance > 1000 ? <p className="alert alert-success">You are doing well</p> : <p className="alert alert-warning">Oga Hustle More</p>
        }
        <AccountBalance balance={balance} />
        <Form balance={balance} setBalance={setBalance} />
        

        <hr />
        <Hello />
        <Hi />
    </div>
  )
}

export default Banking