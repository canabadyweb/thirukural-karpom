import { React } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { ABOUT_WEBSITE, APP_NAME, CLASS_SUFFIX, FIND_EXPLANATION, FIND_KURAL, GENERAL, SAMACHEER_EDUCATION } from "../constants"
import { getClassNumbers } from "../service/Samacheer"

const Header = () => {

  const renderSamacheerClasses = (route) => {
    return (
      <>
        <NavDropdown.Header>{SAMACHEER_EDUCATION}</NavDropdown.Header>
        {
          getClassNumbers()
            .map(classNo =>
              <NavDropdown.Item
                key={classNo}
                href={`${route}/${classNo}`}>
                {`${classNo}-${CLASS_SUFFIX}`}
              </NavDropdown.Item>
            )
        }
      </>
    )
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">{APP_NAME}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/samacheer-kalvi">
               {SAMACHEER_EDUCATION}
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavDropdown title={FIND_EXPLANATION}>
                <NavDropdown.Item href="/quiz/find-explanation">{GENERAL}</NavDropdown.Item>
                <NavDropdown.Divider />
                {renderSamacheerClasses("/quiz/samacheer/find-explanation")}
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title={FIND_KURAL}>
                <NavDropdown.Item href="/quiz/find-kural">{GENERAL}</NavDropdown.Item>
                <NavDropdown.Divider />
                {renderSamacheerClasses("/quiz/samacheer/find-kural")}
              </NavDropdown>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="/about">
                {ABOUT_WEBSITE}
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                target="_blank"
                href="https://github.com/canabadyweb/thirukural-karpom"
                className="py-0">
                <i className="bi bi-github fs-4"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
