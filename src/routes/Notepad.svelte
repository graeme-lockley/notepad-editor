<script>
	import NotepadLine from './NotepadLine.svelte';

	export let content;
</script>

<div class="notepad">
	{#each content as line}
		<NotepadLine {line} />
	{/each}
</div>
