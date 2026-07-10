
import {createContext, useState} from "react";
//1 create context: createContext()

export const ProductContext = createContext(); // empty tank

//2. provider : a supercomponent

export const  ProductProvider = ({children}) => {

    // send a request to an api endpoint that return all products inside inventory db table
    var response = [
        {id: 101, 
         productname: "black Glasses",   
         qty: 2
        },
        {id: 746, 
         productname: "yellow Jean",   
         qty: 5
        }
    ];
    const[products, setProducts] = useState(response);
    return(
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    )
}



