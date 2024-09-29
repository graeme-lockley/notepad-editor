<script>
	import NotepadLine from './NotepadLine.svelte';

	export let notepadView;
</script>

<div class="notepad">
	{#each notepadView.content as line}
		<NotepadLine {line} />
	{/each}
</div>
