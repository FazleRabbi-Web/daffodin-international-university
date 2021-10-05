import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className=' container mt-5 pt-5' style={{height:'80vh'}}>
            <div className='d-flex' style={{marginTop:'15%',marginBottom:'15%'}}>
                <div className='col-lg-6  mt-5'>
                    <h1 className='fw-bold'><span className='text-primary'>Contact</span> <br /> here</h1>
                    
                </div>
                <div className='col-lg-6'>
                <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" className='bg-primary border-0 fw-bold px-5 py-1' >Submit</Button>{''}
</Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;