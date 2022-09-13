import './Form.css'
import {useState} from 'react'

export default function Form(props) {

    const formSubmit = (e) => {
        // Prevent default form submit
        e.preventDefault();

        // Send request to db using input value.
        fetch("https://api.themoviedb.org/3/search/movie?api_key=ad2c28e0345278f3c8b002efddadf28f&language=fr-FR&query=" + inputState)
        .then(response => response.json())
        .then(data => {
            props.updateMovies(data);
        });

        // Clear input value et state.
        setInputState('');
        document.querySelector('#query').value = '';
    };

    const [inputState, setInputState] = useState('');

    return (
        <form onSubmit={(e) => formSubmit(e)}>
            <input
            id='query'
            placeholder='Entrez votre recherche'
            onInput={(e) => setInputState(e.target.value)}
            type="text" />
            <button>Recherche</button>
        </form>
    );
}