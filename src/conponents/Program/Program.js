import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Program = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(()=>{
        fetch('./program.json')
        .then(res => res.json())
        .then(data => setPrograms(data)
        )
    },[])

    return (
        <div className='container my-5 pt-5'>
            <div>
                <h1 className='fw-bold'>
                    Our <span className='text-primary'>Programs</span>
                </h1>
                <p className='fw-bold'>To help you build your career and accomplish your goal, we are offering 31 undergraduate and master's programs under many faculties.</p>
            </div>
           <div className='container row mt-5 justify-content-between'>
                {
                    programs.map((program)=>(
                        <Card className='p-2 mx-2 border-3 rounded col-lg-3 mb-3'>
                    <Card.Img variant="top" src={program.img} width='450'/>
                    <Card.Body>
                    <Card.Title className='fw-bold'>{program.program}</Card.Title>
                    <Card.Text>
                        <p>Semester Fees: {program.semester}</p>
                        <p>Total Cost: {program.cost}</p>
                    </Card.Text>
                    </Card.Body>
                    <Button className='bg-primary mx-5 fw-bold py-2 border-0 rounded' variant="primary">Apply now</Button>{''}
                </Card>
                    ))
                }
           </div>
        </div>
    );
};

export default Program;