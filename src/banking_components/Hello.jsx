
import xyz from "./hello.module.css"; // how to import a module css

const Hello = () => {
  return (
    <div>
        {/* how to use a module css classname */}
        <h1 className={ 'text-end ' + xyz.heda}>Greetings from mars from hello component</h1>
    </div>
  )
}

export default Hello