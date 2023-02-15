<script lang="ts">
    import { Form, FormGroup, Input, Label } from 'sveltestrap';    
    import { Col, Container, Row } from 'sveltestrap';    
    export let data;
    let title = data.data[0].attributes.title;
    let content = data.data[0].attributes.blogtext;
</script>

<svelte:head>
	<title>{title} - Blog</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<Container fluid class="blog-1 text-center">
    <Container>
        <h1>{title}</h1>
    </Container>
</Container>
<Container class="py-5">
    <div class="two-columns">
        {@html content}
    </div>
</Container>
