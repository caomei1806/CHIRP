import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = () => {
	return (
		<Navbar bg='dark' expand='lg' variant='dark' className='p-3'>
			<Container fluid>
				<Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='me-auto my-2 my-lg-0'
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<LinkContainer to='/sign-up'>
							<Nav.Link>Sign up</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/sign-in'>
							<Nav.Link>Sign in</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/post-add'>
							<Nav.Link>+</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/posts'>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
					</Nav>
					<Form className='d-flex'>
						<Form.Control
							type='search'
							placeholder='Search'
							className='me-2'
							aria-label='Search'
						/>
						<Button variant='outline-success'>Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
