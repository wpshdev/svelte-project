<script lang="ts">
    import { Col, Container, Row } from 'sveltestrap';
    import logo from '$lib/img/logo.svg';
</script>
<svelte:head>
	<title>News/Blogs</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<Container>
    <Row>
        <Col md="12"><h1 class="text-center">BLOG</h1></Col>
    </Row>
    <Row>
        <Col md="4">
            <a href="/blog" class="text-decoration-none text-black">
                <img src={logo} alt="blogtitle" class="w-100">
                <h4 class="text-center">Blog Title</h4>
                <h4 class="text-center">Blog description</h4>
            </a>
        </Col>
        <Col md="4">
            <a href="/blog" class="text-decoration-none text-black">
                <img src={logo} alt="blogtitle" class="w-100">
                <h4 class="text-center">Blog Title</h4>
                <h4 class="text-center">Blog description</h4>
            </a>
        </Col>
        <Col md="4">
            <a href="/blog" class="text-decoration-none text-black">
                <img src={logo} alt="blogtitle" class="w-100">
                <h4 class="text-center">Blog Title</h4>
                <h4 class="text-center">Blog description</h4>
            </a>
        </Col>
        <Col md="4">
            <a href="/blog" class="text-decoration-none text-black">
                <img src={logo} alt="blogtitle" class="w-100">
                <h4 class="text-center">Blog Title</h4>
                <h4 class="text-center">Blog description</h4>
            </a>
        </Col>
        <Col md="4">
            <a href="/blog" class="text-decoration-none text-black">
                <img src={logo} alt="blogtitle" class="w-100">
                <h4 class="text-center">Blog Title</h4>
                <h4 class="text-center">Blog description</h4>
            </a>
        </Col>
        <Col md="4">
            <a href="/blog" class="text-decoration-none text-black">
                <img src={logo} alt="blogtitle" class="w-100">
                <h4 class="text-center">Blog Title</h4>
                <h4 class="text-center">Blog description</h4>
            </a>
        </Col>
    </Row>
</Container>