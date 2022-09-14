import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card/Card";
import Resume from "./Resume/Resume";

export default function Main() {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [resume, setResume] = useState(null);
  const [filters, setFilters] = useState({
    'sort_by': 'popularity.desc'
  });

  const updatePage = (byNumber) => {
    if (page + byNumber < 1) return;
    setPage(page + byNumber);
  }

  const url = "https://api.themoviedb.org/3/discover/movie";
  const request =
    url +
    "?api_key=ad2c28e0345278f3c8b002efddadf28f\
&language=fr-FR\
&sort_by=" + filters.sort_by + "\
&include_adult=false\
&include_video=false\
&page=" +
    page +
    "\
&with_watch_monetization_types=flatrate";

  useEffect(() => {
    fetch(request)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, [page, filters]);

  return (
    <div className="Main">
      {!resume && (
        <div>
          {filters.sort_by === 'popularity.desc' ? <button onClick={() => setFilters({'sort_by': 'release_date.desc'})}>❌ Triage par date de sortie</button> : <button onClick={() => setFilters({'sort_by': 'popularity.desc'})}>✅ Triage par date de sortie</button>}
          <div className="movies">
            {movies &&
              movies.results.map((movie) => (
                <Card key={movie.id} setResume={setResume} movie={movie} />
              ))}
          </div>
          <div className="pagination">
            <button onClick={() => updatePage(-1)}>{"<"}</button>
            <button onClick={() => updatePage(1)}>{">"}</button>
          </div>
        </div>
      )}
      {resume && <Resume movie={resume} setResume={setResume} />}
    </div>
  );
}
