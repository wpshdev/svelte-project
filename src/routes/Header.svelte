<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { page } from '$app/stores';
    import logo from '$lib/img/logo.svg';  
	import "../styles/fonts.scss";
    import "../styles/style.scss";		
</script>

<div class="logo">
	<a href="/">
		<img src={logo} alt="ULFBUILT" />
	</a>
</div>
<nav>
	<ul>
		<li aria-current={$page.url.pathname === '/portfolio' ? 'page' : undefined}>
			<a href="/portfolio">PORTFOLIO</a>
		</li>	
		<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
			<a href="/about">ABOUT US</a>
		</li>
		<li aria-current={$page.url.pathname === '/our-team' ? 'page' : undefined}>
			<a href="/our-team">OUR TEAM</a>
		</li>
		<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
			<a href="/contact">CONTACT US</a>
		</li>
	</ul>
</nav>
