import React from 'react';
import { Spinner } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='mt-5 pt-5' style={{height:'80vh'}}>
           <div style={{marginTop:'10%',marginBottom:"10%"}}>
           <h1 className='fw-bold text-primary'>Blogs</h1>
            <br />
            <br />
            <br />
            <h4 className='fw-bold'>Study Tour Blog <span className='text-warning'>Loading</span>...</h4>
            <br />
            <div>
            <Spinner animation="grow" variant="primary" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
  <Spinner animation="grow" variant="light" />
  <Spinner animation="grow" variant="dark" />
            </div>
            <br />
            <h5 className='fw-bold'>Will knock you soon to read our blogs :)</h5>
           </div>

        </div>
    );
};

export default Blog;