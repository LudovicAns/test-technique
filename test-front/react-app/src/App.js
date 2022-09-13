import Form from "./Components/Form/Form";
import { useState } from "react";
import Movies from "./Components/Movies/Movies";

function App() {
    const [movies, setMovies] = useState();

    const updateMovies = (data) => {
        setMovies(data);
    }

    // console.log(movies);

    return (
        <div className="App">
            <Form updateMovies={updateMovies}/>
            {movies && <Movies data={movies}/>}
        </div>
    );
}

export default App;
