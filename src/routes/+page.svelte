<script>
	import Notepad from './Notepad.svelte';
	import * as Content from './content.js';

	let content = Content.create();

	content.append('hello');
	content.append('world');
</script>

<h1>Notepad Editor</h1>

<Notepad {content} />
