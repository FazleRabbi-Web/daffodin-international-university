import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Carousel } from 'react-bootstrap';
import Program from '../Program/Program'



const Home = (props) => {
    const [programs, setPrograms] = useState([]);

    useEffect(()=>{
        fetch('./program.json')
        .then(res => res.json())
        .then(data => setPrograms(data)
        )
    },[])
    const slicePrograms = programs.slice(0, 4);
    
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img 
        style={{filter:'blur(4px)',height:'100vh'}}
      className="d-block w-100"
      src="https://daffodilvarsity.edu.bd/images/slider/ddbc4a540f05f3634344a5b5fc347ecc.jpg"
    />
    <Carousel.Caption >
      <h1 className='text-white fw-bold'>Nelson Mandela</h1>
      <p>Education is the most powerful weapon</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
        style={{height:'100vh',filter:'blur(4px)'}}
      className="d-block w-100"
      src="https://daffodilvarsity.edu.bd/images/slider/14628005803edc19da5ff179dac0f406.jpg"
    />

    <Carousel.Caption >
      <h1 className='text-white fw-bold'>The anticipated ceremony to recognize graduates hard work</h1>
      <p className='text-dark '>Our 9th Convocation has been postponed in light of the current situation. New date will be announced later following the government guidelines</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'100vh'}}
      className="d-block w-100"
      src="https://daffodilvarsity.edu.bd/images/slider/c47a3b968b40c4e8a191d076f460c97b.jpg"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'100vh',filter:'blur(4px)'}}
      className="d-block w-100"
      src="https://daffodilvarsity.edu.bd/images/slider/f040866775c4a3dac5e23ec62061a15f.png"
    />

    <Carousel.Caption >
      <h1 className='text-white fw-bold'>Landmark to create the future</h1>
      <p>Excellence in teaching, learning, and research Transform your life with endless opportunities Be inspired by the diverse community Discover yourself for lifetime success</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


       <div className='my-5'>
           <h1>
               Some of our <span className='text-primary fw-bold'>PROGRAM</span>
           </h1>
       <CardGroup className='container mt-5'>
                {
                    slicePrograms.map((program)=>(
                        <Card className='p-2 mx-2 border-3 rounded'>
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
            </CardGroup>  
       </div>

        </div>
    );
};

export default Home;