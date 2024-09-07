<script>
	import Notepad from './Notepad.svelte';
	import * as Content from './content.js';

	let content = Content.create();

	content.append('hello');
	content.append('world');
</script>

<h1>Welcome to Notepad Editor</h1>

<Notepad {content} />

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
