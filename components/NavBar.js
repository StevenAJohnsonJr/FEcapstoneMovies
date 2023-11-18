/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>CHANGE ME</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/delete-me">
              <Nav.Link>Delete Me</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/movies/moviesPage">
              <Nav.Link className="nav-topic">Movies</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/movies/actionMoviePage">
              <Nav.Link className="nav-topic">Action Movies</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/movies/dramaMoviePage">
              <Nav.Link className="nav-topic">Drama Movies</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/movies/horrorMoviePage">
              <Nav.Link className="nav-topic">Horror Movies</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/movies/mtMoviesPage">
              <Nav.Link className="nav-topic">Mystery/Thiller Movies</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/movies/romComMoviePage">
              <Nav.Link className="nav-topic">RomCom Movies</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/movies/familyMoviePage">
              <Nav.Link className="nav-topic">Family Movies</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/movies/documentaryMoviePage">
              <Nav.Link className="nav-topic">Documentary Movies</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/movies/comedyMoviePage">
              <Nav.Link className="nav-topic">Comedy Movies</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/movies/sciFiMoviePage">
              <Nav.Link className="nav-topic">Sci-Fi Movies</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/movies/holidayMoviePage">
              <Nav.Link className="nav-topic">Holiday Movies</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/movies/westernMoviePage">
              <Nav.Link className="nav-topic">Western</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/movies/westernMoviePage">
              <Nav.Link className="nav-topic">Western</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
