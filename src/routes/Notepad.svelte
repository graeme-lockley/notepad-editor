<script>
	export let content;
</script>

<h1>Notepad</h1>

<div class="notepad">
	{#each content as line}
		<div
			class="line"
			contenteditable="true"
			bind:textContent={line.text}
			oninput={() => (content = [...content])}
		></div>
	{/each}
</div>
