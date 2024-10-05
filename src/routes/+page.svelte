<script>
	import Notepad from './Notepad.svelte';

	import * as Content from './content.js';

	let content = Content.create();

	content.append('output 1', 'source 1', Content.Visibility.CLOSED);
	content.append('output 2', 'source 2', Content.Visibility.OPEN);
	content.append('output 3', 'source 3', Content.Visibility.PINNED);
</script>

<h1>Notepad Editor</h1>

<Notepad {content} />
