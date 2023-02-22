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
		<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/">Home</a>
		</li>
		<li aria-current={$page.url.pathname === '/portfolio' ? 'page' : undefined}>
			<a href="/">Portfolio</a>
		</li>		
		<li aria-current={$page.url.pathname === '/our-team' ? 'page' : undefined}>
			<a href="/our-team">Our Team</a>
		</li>		
		<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
			<a href="/about">About</a>
		</li>
		<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
			<a href="/contact">Contact us</a>
		</li>
		<li aria-current={$page.url.pathname === '/blogs' ? 'page' : undefined}>
			<a href="/blog">Blog</a>
		</li>
	</ul>
</nav>