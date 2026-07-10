import Loader from "./Loader";
const Categories = ({categories, error, loading}) => {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="section-head">
          <h2>Pick a category</h2>
          <span className="count" id="category-count">3 categories</span>
        </div>

        <div className="row" id="category-grid">

          {
            loading && <Loader />
          }
          {
            error && <p className="alert alert-warning"> Our ApI seems to be down at the moment</p>
          }
          {
            categories && categories.length > 0 && categories.map(function(cat){
              return (
                      <div className="col-12 col-sm-6 col-lg-4 card-col">
                        <article className="recipe-card">
                          <span className="pin" aria-hidden="true"></span>
                          <div className="recipe-thumb-wrap">
                            <img
                              className="recipe-thumb"
                              src={cat.strCategoryThumb}
                              alt={cat.strCategory}
                              loading="lazy"
                            />
                          </div>
                          <div className="recipe-body">
                            <div className="recipe-id">CAT. {cat.idCategory}</div>
                            <h3 className="recipe-title">{cat.strCategory}</h3>
                            <p className="recipe-desc">
                              {cat.strCategoryDescription}
                            </p>
                            <a href="#" className="recipe-link" data-category="Seafood">
                              View recipes <span className="arrow">&rarr;</span>
                            </a>
                          </div>
                        </article>
                      </div>
              )
            })
          }
          
        </div>
      </div>
    </section>
  )
}

export default Categories