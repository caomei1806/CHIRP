import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { createRef } from 'react'
import { useGlobalContext } from '../../context'

const Navigation = () => {
	const navbarCollapse = createRef<HTMLDivElement>()
	const { user } = useGlobalContext()

	const hideNavbarCollapse = () => {
		navbarCollapse.current?.classList.remove('show')
	}

	return (
		<Navbar bg='dark' expand='lg' variant='dark' className=' navbar p-3'>
			<Container fluid>
				<Navbar.Brand href='#'>CH!RP</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse
					id='navbarScroll'
					ref={navbarCollapse}
					onClick={hideNavbarCollapse}
				>
					<Nav
						className='me-auto my-2 my-lg-0'
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<LinkContainer to='/posts'>
							<Nav.Link data-bs-toggle='collapse'>Home</Nav.Link>
						</LinkContainer>
						{!user && (
							<>
								<LinkContainer to='/sign-up'>
									<Nav.Link>Sign up</Nav.Link>
								</LinkContainer>
								<LinkContainer to='/sign-in'>
									<Nav.Link>Sign in</Nav.Link>
								</LinkContainer>
							</>
						)}

						<LinkContainer to='/post-add'>
							<Nav.Link className='d-flex align-items-center'>
								Create
								<AiOutlinePlus />
							</Nav.Link>
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
