/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createMovie, updateMovie } from '../../ApiCalls/MovieApiCalls';
import { getAllGenres } from '../../ApiCalls/GenreApiCalls';
import { getAllDirector } from '../../ApiCalls/DirectorsApiCalls';

const initialState = {
    title: '',
    directorId: '',
    genreId: '',
    description: '',
    isForeign: false,
    year: '',
    rated: '',
    rating: '',
    steamingOn: '',
    imgUrl: '',
    videoKey: '',
    length: '',
    id: null,
};

function MovieForm({ obj }) {
    const [formInput, setFormInput] = useState(initialState);
    const [genres, setGenres] = useState([]);
    const [directors, setDirectors] = useState([]);
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
        getAllGenres().then((data) => setGenres(data));
    }, []);

    useEffect(() => {
        getAllDirector().then((data) => setDirectors(data));
    }, []);

    useEffect(() => {
        setFormInput((prevInput) => ({
            ...prevInput,
            ...obj,
        }));
    }, [obj]);

    const fadeInUp = useSpring({
        opacity: 1,
        transform: 'translateY(0px)',
        from: { opacity: 0, transform: 'translateY(50px)' },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // ... (unchanged)

        if (obj.id) {
            updateMovie(formInput)
                .then(() => {
                    router.push(`/movies/${obj.id}`);
                    console.log(formInput);
                })
                .catch((error) => {
                    console.error('Error updating movie:', error);
                });
        } else {
            const payload = { ...formInput, uid: user.uid };
            console.log(payload);
            createMovie(payload)
                .then(() => {
                    router.push('/movies/moviesPage');
                })
                .catch((error) => {
                    console.error('Error creating movie:', error);
                });
        }
    };

    return (
        <animated.div style={fadeInUp}>
            <Form onSubmit={handleSubmit}>
                <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Movie</h2>

                {/* TITLE INPUT  */}
                <FloatingLabel controlId="floatingInput1" label="Please Enter New Movie Title" className="mb-3">
                    <Form.Control type="text" placeholder="title" name="title" value={formInput.title} onChange={handleChange} required />
                </FloatingLabel>

                {/* DIRECTOR SELECT */}
                <FloatingLabel controlId="floatingSelectDirector" label="Director">
                    <Form.Select
                        aria-label="Director"
                        name="directorId"
                        onChange={handleChange}
                        className="mb-3"
                        value={formInput.directorId} // Corrected value attribute
                        required
                    >
                        <option value="">Select A Director</option>
                        {directors.map((director) => (
                            <option key={director.id} value={director.id}>
                                {director.directorName}
                            </option>
                        ))}
                    </Form.Select>
                </FloatingLabel>

                {/* GENRE SELECT */}
                <FloatingLabel controlId="floatingSelectGenre" label="Genres">
                    <Form.Select
                        aria-label="Genres"
                        name="genreId"
                        onChange={handleChange}
                        className="mb-3"
                        value={formInput.genreId} // Corrected value attribute
                        required
                    >
                        <option value="">Select A Genre</option>
                        {genres.map((genre) => (
                            <option key={genre.id} value={genre.id}>
                                {genre.genreName}
                            </option>
                        ))}
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput3" label="Please Enter Movie Description" className="mb-3">
                    <Form.Control type="text" placeholder="description" name="description" value={formInput.description} onChange={handleChange} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput3" label="Please Enter The Year The Film Was Released" className="mb-3">
                    <Form.Control type="number" placeholder="year" name="year" value={formInput.year} onChange={handleChange} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput3" label="What Is This Film Rated" className="mb-3">
                    <Form.Control type="text" placeholder="rated" name="rated" value={formInput.rated} onChange={handleChange} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput3" label="How Many Stars Out Of 5" className="mb-3">
                    <Form.Control type="text" placeholder="rating" name="rating" value={formInput.rating} onChange={handleChange} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput3" label="How long is this film " className="mb-3">
                    <Form.Control type="text" placeholder="rating" name="length" value={formInput.length} onChange={handleChange} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput3" label="What Platforms Is This Film Streaming On" className="mb-3">
                    <Form.Control type="text" placeholder="steamingOn" name="steamingOn" value={formInput.steamingOn} onChange={handleChange} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput3" label="please enter a url of the movie poster" className="mb-3">
                    <Form.Control type="text" placeholder="imgUrl" name="imgUrl" value={formInput.imgUrl} onChange={handleChange} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput3" label="please enter YouTube a Url of the movie trailer" className="mb-3">
                    <Form.Control type="text" placeholder="videoKey" name="videoKey" value={formInput.videoKey} onChange={handleChange} />
                </FloatingLabel>

                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Check this switch"
                    onChange={() => {
                        // eslint-disable-next-line no-param-reassign
                        obj.isForeign = !obj.isForeign;
                        console.log(obj.isForeign);
                    }}
                />

                {/* SUBMIT BUTTON */}
                <Button type="submit" variant="outline-warning" style={{ marginBottom: '30px' }}>{obj.id ? 'Update' : 'Lights'} Camera Action</Button>
            </Form>
        </animated.div>
    );
}

MovieForm.propTypes = {
    obj: PropTypes.shape({
        title: PropTypes.string,
        directorId: PropTypes.string,
        genreId: PropTypes.string,
        isForeign: PropTypes.bool,
        year: PropTypes.number,
        description: PropTypes.string,
        rated: PropTypes.string,
        imgUrl: PropTypes.string,
        videoKey: PropTypes.string,
        rating: PropTypes.number,
        steamingOn: PropTypes.string,
        length: PropTypes.string,
        id: PropTypes.number,
    }),
};

MovieForm.defaultProps = {
    obj: initialState,
};

export default MovieForm;
