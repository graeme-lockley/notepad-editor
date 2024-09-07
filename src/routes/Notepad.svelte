<script>
	import NotepadLine from './NotepadLine.svelte';

	export let content;
</script>

<h1>Notepad</h1>

<div class="notepad">
	{#each content as line}
		<NotepadLine {line} />
	{/each}
</div>
