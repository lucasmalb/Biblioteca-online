import './Books.css'

const Book = ({ name, category, description, stars, comentary })

return (
    <div className='card'>
        <article className="Books card1">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section className='info-description'>
                <p className="Category">category</p>
                <p className="Description">description</p>
            </section>
            <picture>
                <img src={img} alt={stars} className="ItemStars" />
            </picture>
            <p className="Comentary">Comentary</p>
        </article>
    </div >
)

export default Book