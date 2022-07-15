import React from 'react';
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import s from './Header.module.sass';
import Image from 'next/image';

export const Header = () => {
  return (
    <Navbar className={s.navbar}>
      <Container fluid>
        <Navbar.Brand href='#home'>
          <Image
            alt=''
            src={logo}
            width='64'
            height='64'
            className='d-inline-block align-content-center'
          />
          Русская Пустошь
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='#home'>Главная страница</Nav.Link>
            <NavDropdown title='Статьи' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action3'>Переводы</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#action4'>Книги</Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder=''
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Поиск</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
