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

	import axios from 'axios';
	import { onMount } from 'svelte';
	let promise = fetchMenu()

	async function fetchMenu(){
		const url = 'https://strapi.ulfbuilt.com:1337/api/menus/1?populate=deep,4';
		const headers = {
			Authorization: 'Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072'
		};

		try {
			const response = await axios.get(url, { headers });
			return response.data.data.attributes.items;
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	onMount(() => {
    	promise = fetchMenu();
	});	

	function log(d){
		console.log(d);
	}


	let isOpen = false;
  
	function handleUpdate(event) {
	  isOpen = event.detail.isOpen;
	}	
</script>
  {#await promise}
thi
  {:then navs}
	{log(navs)}
  {/await}
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