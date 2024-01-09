/* eslint-disable */
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
    <div className="">
      <Navbar collapseOnSelect expand="lg" style={{backgroundColor: 'orangered'}} variant="dark">
      <Container>
        <Link passHref href="/movies/moviesPage">
          <Navbar.Brand> <img src="/whatwewatchin1.jpg" height={125} width={100} style={{ objectFit: 'cover', height: '100%' }}/></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            {/* <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link> */}
            {/* <Link className="ps-relative" passHref href="/movies/new">
              <Nav.Link className="nav-topic">Add Movie</Nav.Link>
            </Link> */}
            <Link className="ps-relative" passHref href="/movies/moviesPage">
              <Nav.Link className="nav-topic">All Movies</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/movies/movieGenerator">
              <Nav.Link className="nav-topic">Generator</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/directors/new">
              <Nav.Link className="nav-topic">Add Director</Nav.Link>
            </Link>
            {/* <Link className="ps-relative" passHref href="/movies/action">
              <Nav.Link className="nav-topic">Action Movies</Nav.Link>
            </Link> */}
            {/* <Link className="ps-relative" passHref href="/movies/drama">
              <Nav.Link className="nav-topic">Drama Movies</Nav.Link>
            </Link> */}
            {/* <Link className="ps-relative" passHref href="/movies/horror">
              <Nav.Link className="nav-topic">Horror Movies</Nav.Link>
            </Link> */}
            {/* <Link className="ps-relative" passHref href="/movies/mystery-thriller">
              <Nav.Link className="nav-topic">Mystery/Thiller Movies</Nav.Link>
            </Link> */}
            {/* <Link className="ps-relative" passHref href="/movies/romcom">
              <Nav.Link className="nav-topic">RomCom Movies</Nav.Link>
            </Link> */}
            {/* <Link className="ps-relative" passHref href="/movies/family">
              <Nav.Link className="nav-topic">Family Movies</Nav.Link>
            </Link> */}
            {/* <Link className="ps-relative" passHref href="/movies/documentary">
              <Nav.Link className="nav-topic">Documentary Movies</Nav.Link>
            </Link> */}
            {/* <Link className="ps-relative" passHref href="/movies/comedy">
              <Nav.Link className="nav-topic">Comedy Movies</Nav.Link>
            </Link> */}
            {/* <Link className="ps-relative" passHref href="/movies/sci-fi">
              <Nav.Link className="nav-topic">Sci-Fi Movies</Nav.Link>
            </Link> */}
            {/* <Link className="ps-relative" passHref href="/movies/holiday">
              <Nav.Link className="nav-topic">Holiday Movies</Nav.Link>
            </Link> */}
            {/* <Link className="ps-relative" passHref href="/movies/western">
              <Nav.Link className="nav-topic">Western Movies</Nav.Link>
            </Link> */}
            <Link className="ps-relative" passHref href="/genres/genresPage">
              <Nav.Link className="nav-topic">All Genres</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/directors/directorsPage">
              <Nav.Link className="nav-topic">All Directors</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
