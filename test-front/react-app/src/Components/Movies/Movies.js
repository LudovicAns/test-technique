import './Movies.css'
import Card from './Card/Card';

export default function Movies(props) {

    return (
        <div className="Movies">
            {props.data.results.map(movie => <Card key={movie.id} title={movie.title} releaseDate={movie.release_date} imgsrc={movie.poster_path}/>)}
        </div>
    );
}