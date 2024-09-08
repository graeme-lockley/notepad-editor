<script>
	export let line;
	let hover = false;

	import * as Content from './content';

	import ChevronDown from './Icon.ChevronDown.svelte';
	import ChevronRight from './Icon.ChevronRight.svelte';

	const visibilityClick = () => {
		if (line.visibility === Content.Visibility.PINNED) {
			return;
		}

		if (line.visibility === Content.Visibility.CLOSED) {
			line.visibility = Content.Visibility.OPEN;
		} else {
			line.visibility = Content.Visibility.CLOSED;
		}
	};

	const hoverStart = () => {
		hover = true;
	};

	const hoverEnd = () => {
		hover = false;
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="line" on:mouseenter={hoverStart} on:mouseleave={hoverEnd}>
	<div class="output">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="marginl1" on:click={visibilityClick}>
			{#if line.visibility === Content.Visibility.PINNED}
				<ChevronDown />
			{:else if hover}
				{#if line.visibility === Content.Visibility.CLOSED}
					<ChevronRight />
				{:else}
					<ChevronDown />
				{/if}
			{/if}
		</div>
		<div class="marginl2">...</div>
		<div class="body">{line.output}</div>
		<div class="marginr1">X</div>
	</div>
	{#if line.visibility === Content.Visibility.PINNED || (hover && line.visibility === Content.Visibility.OPEN)}
		<div class="source">
			<div class="marginl1"></div>
			<div class="marginl2">[]</div>
			<div class="body">{line.source}</div>
			<div class="marginr1">X</div>
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
	}

	.source {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.marginl1 {
		width: 1em;
	}

	.output > .marginl1 {
		cursor: pointer;
	}

	.marginl2 {
		width: 1em;
	}

	.body {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.marginr1 {
		width: 1em;
	}
</style>
