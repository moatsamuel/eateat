
import {useState} from "react"
import Swal from 'sweetalert2/dist/sweetalert2.js'


const Form = ({balance, setBalance}) => {
    // a state to track amount they typed: useState hook
    const [amount, setAmount] = useState("")
    function withdraw(){
        if(amount == ""){
            alert("Oga, how much you wan withraw");
            return false;
        }
        if(amount > balance){
            alert("Oga, insufficient account balance");
            return false;
        }
        var amount_to_withdraw = Number(amount);
        var currentBalance = balance - amount_to_withdraw;
        setBalance(currentBalance)
        setAmount("")
    }

    function deposit(){
        if(amount == ""){
            alert("Oga, how much you wan deposit");
            return false;
        }
        var amount_to = Number(amount);
        var currentBalance = balance + amount_to
        setBalance(currentBalance)
        setAmount("")
    }

  return (
    <div className="row">
        <div className="col-md-8 py-4 offset-md-2">
            <div className="mb-2">
                {/* how to manage input in react */}
                <input type="number" className="form-control"  value={amount}  onChange={ function(e){
                    setAmount(e.target.value);
                } }/>
            </div>
            <div className="mb-2">
                <button className="btn btn-danger col-6" onClick={withdraw}>Withdraw</button>
                <button className="btn btn-primary col-6" onClick={deposit}>Deposit</button>
            </div>
        </div>
    </div>
  )
}

export default Form