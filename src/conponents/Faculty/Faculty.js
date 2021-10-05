import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Faculty = () => {
    const [faculties, setFaculties]=useState([]);
    useEffect(()=>{
        fetch('./faculty.json')
        .then(res => res.json())
        .then(data => setFaculties(data))
    },[])
    
    return (
        <div className='container'>
            <div className='mt-5 pt-5'>
                <h1 className='fw-bold'>Our <span className='text-primary'>Faculties</span></h1>
            </div>
            <div className='row mt-5 mx-5 px-5 justify-content-between'>
                {
                    faculties.map((faculty)=>(
                        <Card className='p-2 mx-2 border-2 rounded col-lg-3 mb-3'>
                    <Card.Img variant="top" src={faculty.img}/>
                    <Card.Body>
                    <Card.Title className='fw-bold'>{faculty.name}</Card.Title>
                    <Card.Text>
                        <p>{faculty.title}</p>
                    </Card.Text>
                    </Card.Body>
                    <Button className='bg-primary mx-5 fw-bold py-2 border-0 rounded' variant="primary">CONTACT</Button>{''}
                    </Card>
                    ))
                }
        </div>
        </div>
    );
};

export default Faculty;