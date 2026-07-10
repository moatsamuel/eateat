
import {useState, useEffect} from "react"
import "./assets/meal.css";
import Footer from "./meal_components/Footer";
import Categories from "./meal_components/Categories";
import Header from "./meal_components/Header";
import Hero from "./meal_components/Hero";

const Meal = () => {
    // how to send get request  in react app and use the data that comes back
    const [categories, setCategories] = useState([]); // categories coming from api endpoints will be stored here. Initially it is empty array
    const [loading, setLoading] = useState(false); // tracking if there is ongoing request been sent. so that we will able to tell the user
    const [error, setError] = useState(false); // to determine if there is error with th server

    // a function that connects to an api
    function fetchMealCategories(){
        setLoading(true);
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            setLoading(false)
            setError(false);
            setCategories(data.categories);
        })
        .catch(function(err){
            setLoading(false)
            setError(true);
            setCategories([]);
        })
    }

    // this hook is used to communicate with an external system
    useEffect(()=>{
        fetchMealCategories()
    }, []);

  return (
    <>  
        
        <Header />
        <Hero />
        <Categories categories={categories} error={error} loading={loading} />
        <Footer />
    </>
  )
}

export default Meal