import './Card.css'


export default function Card(props) {
    return (
        <div className="Card">
            <img src={"https://image.tmdb.org/t/p/w500" + props.imgsrc} alt={props.title}/>
            <h1>{props.title}</h1>
            <h2>{props.releaseDate}</h2>
        </div>
    );
}