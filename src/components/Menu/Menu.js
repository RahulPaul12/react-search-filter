import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import {faLocationDot, faSearch} from '@fortawesome/free-solid-svg-icons'
import './Menu.css'
import logo from '../../assets/logo.svg'

const Menu = (props) => {


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/"><img src={logo} alt="" srcSet="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder='&#xf3c5; Location'
                className=""
                aria-label="Search"
                name='text'
                
                id='location'
              />
              
              <Form.Control
                type="search"
                placeholder="Add guests"
                className=""
                aria-label="Search"
                id='guest'
              />
              
              
            </Form>
            <Button onClick={props.onTrigger} ><FontAwesomeIcon icon={faSearch} /></Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;