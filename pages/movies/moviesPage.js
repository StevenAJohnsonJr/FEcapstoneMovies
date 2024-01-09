/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAllMovies } from '../../ApiCalls/MovieApiCalls';
import TopSlide from '../../components/Carousel2';
import TopSlide1 from '../../components/Carousel3';
import TopSlide2 from '../../components/Carousel1';
import TopSlide3 from '../../components/Carousel4';
import TopSlide4 from '../../components/Carousel5';
import TopSlide5 from '../../components/Carousel6';
import TopSlide6 from '../../components/Carousel7';
import TopSlide7 from '../../components/Carousel8';
import TopSlide8 from '../../components/Carousel9';
import TopSlide9 from '../../components/Carousel10';
import TopSlide10 from '../../components/Carousel11';
import TopSlide11 from '../../components/Carousel12';

function MoviePage() {
    const [movies, setMovies] = useState([]);

    const getAllTheMovies = () => {
        getAllMovies().then(setMovies);
    };

    useEffect(() => {
        getAllTheMovies();
    }, []);

    const filteredMovies = movies; // No filtering is done

    return (
        <div className="moviePageContainer">
            <div className="backgroungMovieStrip">
            <div
                className="text-center d-flex flex-column justify-content-center align-content-center"
                style={{
                    height: '22vh',
                    padding: '7px',
                    margin: '0 auto',
                    // background: 'url(/theater3.jpg)',
                }}
            >
                <h1>All Our Movies</h1>
            </div>         

           
                <TopSlide movies={filteredMovies} />
                <TopSlide1 movies={filteredMovies} />
                <TopSlide2 movies={filteredMovies} />
                <TopSlide3 movies={filteredMovies} />
                <TopSlide4 movies={filteredMovies} />
                <TopSlide5 movies={filteredMovies} />
                <TopSlide6 movies={filteredMovies} />
                <TopSlide7 movies={filteredMovies} />
                <TopSlide8 movies={filteredMovies} />
                <TopSlide9 movies={filteredMovies} />
                <TopSlide10 movies={filteredMovies} />
                <TopSlide11 movies={filteredMovies} />


            
        </div>
        </div>
    );
}

export default MoviePage;
