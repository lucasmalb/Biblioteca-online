import './Books.css'

const Book = ({ name, category, description, stars, comentary })

return (<article className="Books">
    <header className="Header">
        <h2 className="ItemHeader">
            {name}
        </h2>
    </header>
    <picture>
        <img src={img} alt={name} className="ItemImg" />
    </picture>
    <section>
        <p className="Category">
            category
        </p>
        <p className="Description">
            description
        </p>
    </section>
    <picture>
        <img src={img} alt={stars} className="ItemStars" />
    </picture>
    <p className="Comentary">
        Comentary
    </p>
</article>

)

export default Book