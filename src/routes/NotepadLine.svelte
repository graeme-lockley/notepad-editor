<script>
	export let line;

	import * as Content from './content';
</script>

<div class="line">
	<div class="output">
		<div class="marginl1">
			{#if line.visibility === Content.Visibility.CLOSED}
				&gt;
			{:else}
				v
			{/if}
		</div>
		<div class="marginl2">...</div>
		<div class="body">{line.output}</div>
		<div class="marginr1"></div>
	</div>
	{#if line.visibility !== Content.Visibility.CLOSED}
		<div class="source">
			<div class="marginl1"></div>
			<div class="marginl2">[]</div>
			<div class="body">{line.source}</div>
			<div class="marginr1"></div>
		</div>
	{/if}
</div>

<style>
	.line {
		margin: 0.5em 0;
	}

	.output {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 50%;
	}

	.source {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 50%;
	}

	.marginl1 {
		width: 1em;
	}

	.marginl2 {
		width: 1em;
	}

	.body {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		padding: 0.5em;
		border-radius: 0.5em;
	}

	.marginr1 {
		width: 1em;
	}
</style>
