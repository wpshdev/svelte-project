<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { page } from '$app/stores';
    import logo from '$lib/img/logo.svg';  
	import "../styles/fonts.scss";
    import "../styles/style.scss";		
	import {
	  Collapse,
	  Navbar,
	  NavbarToggler,
	  NavbarBrand,
	  Nav,
	  NavItem,
	  NavLink,
	  Dropdown,
	  DropdownToggle,
	  DropdownMenu,
	  DropdownItem
	} from 'sveltestrap';
  
	let isOpen = false;
  
	function handleUpdate(event) {
	  isOpen = event.detail.isOpen;
	}	
</script>
  
  <Navbar expand="md">
	<NavbarBrand href="/">
		<a href="/">
			<img src={logo} alt="ULFBUILT" class="logo" />
		</a>	
	</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
	  <Nav class="ms-auto" navbar>
		<NavItem>
		  <NavLink data-sveltekit-preload-data="tap" href="/portfolio">PORTFOLIO</NavLink>
		</NavItem>
		<Dropdown nav inNavbar>
			<DropdownToggle nav caret href="about">ABOUT US</DropdownToggle>
			<DropdownMenu end>
			  <DropdownItem href="portfolio">PORTFOLIO</DropdownItem>
			  <DropdownItem href="about">ABOUT US</DropdownItem>		
			  <DropdownItem href="our-team">OUR TEAM</DropdownItem>
			  <DropdownItem href="contact">CONTACT US</DropdownItem>				
			</DropdownMenu>
		  </Dropdown>		
		<NavItem>
			<NavLink href="/our-team/">OUR TEAM</NavLink>
		</NavItem>		  		
	  </Nav>
	</Collapse>
  </Navbar>