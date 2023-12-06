/* eslint-disable */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createDirector, updateDirector } from '../../ApiCalls/DirectorsApiCalls.js';

const initialState = {
    directorName: '',
    id: null,
};

function DirectorForm({ directorObj }) {
    const [formInput, setFormInput] = useState(initialState);
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
        if (directorObj.id) setFormInput(directorObj);
    }, [directorObj, user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (directorObj.id) {
            await updateDirector(formInput);
            router.push(`/directors/${directorObj.id}`);
        } else {
            const payload = { ...formInput, uid: user.uid };
            await createDirector(payload);
            router.push('/directors/directorsPage'); // Add this line to navigate after creation
        }
    };
    

    return (
        <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingInput1" label="Please Enter New Director Name" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Please Enter New Director Name"
                    name="directorName" // Corrected to "directorName"
                    value={formInput.directorName}
                    onChange={handleChange}
                    required
                />
            </FloatingLabel>

            <div>
                <Button type="submit" variant="outline-warning" style={{ marginBottom: '30px' }}>{directorObj.id ? 'Update' : 'ACTION'} </Button>
            </div>
        </Form>
    );
}

DirectorForm.propTypes = {
    directorObj: PropTypes.shape({
        directorName: PropTypes.string, // Corrected to "directorName"
        id: PropTypes.number,
    }),
};

DirectorForm.defaultProps = {
    directorObj: initialState,
};

export default DirectorForm;
