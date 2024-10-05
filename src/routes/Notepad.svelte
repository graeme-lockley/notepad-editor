<script>
	import * as Content from './content';

	import ChevronDown from './Icon.ChevronDown.svelte';
	import ChevronRight from './Icon.ChevronRight.svelte';

	export let content;

	let hoverLine = undefined;

	const hoverStart = (line) => {
		hoverLine = line;
	};

	const hoverEnd = () => {
		hoverLine = undefined;
	};

	const visibilityClick = (line) => {
		if (line.visibility === Content.Visibility.PINNED) {
			return;
		}

		if (line.visibility === Content.Visibility.CLOSED) {
			line.visibility = Content.Visibility.OPEN;
		} else {
			line.visibility = Content.Visibility.CLOSED;
		}

		content = content;
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="notepad" on:mouseleave={hoverEnd}>
	{#each content as line}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="line" on:mouseenter={hoverStart(line)}>
			<div class="output">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="marginl1" on:click={visibilityClick(line)}>
					{#if line.visibility === Content.Visibility.PINNED}
						<ChevronDown />
					{:else if hoverLine === line}
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
			{#if line.visibility === Content.Visibility.PINNED || (hoverLine === line && line.visibility === Content.Visibility.OPEN)}
				<div class="source">
					<div class="marginl1"></div>
					<div class="marginl2">[]</div>
					<div class="body">{line.source}</div>
					<div class="marginr1">X</div>
				</div>
			{/if}
		</div>
	{/each}
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
