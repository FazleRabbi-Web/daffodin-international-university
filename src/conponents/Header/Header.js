import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {color: "#FFBC42"}
    const styles ={textDecoration: 'none', marginRight:'30px',color:'black',fontWeight: "bold", fontSize:'20px'}
    return (
        <div >
             <Navbar fixed='top' className='my-3' >
                <Container>
                    <NavLink to="/home"><Image src="https://daffodilvarsity.edu.bd/template/images/diulogoside.png" width='170px'/></NavLink>
                    <Nav className="me-0">
                    <NavLink style={styles} activeStyle={activeStyle} to="/home">Home</NavLink>
                    <NavLink style={styles} activeStyle={activeStyle} to="/programs">Programs</NavLink>
                    <NavLink style={styles} activeStyle={activeStyle} to="/faculty">Faculty</NavLink>
                    <NavLink style={styles} activeStyle={activeStyle} to="/about">About</NavLink>
                    <NavLink style={styles} activeStyle={activeStyle} to="/blog">Blog</NavLink>
                    <NavLink style={styles} activeStyle={activeStyle} to="/contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;