import { describe, it, expect } from 'vitest';

import * as Content from './content';

describe('create', () => {
	const content = Content.create();

	it('has no lines', () => {
		expect(content.numberOfLines()).toBe(0);
	});

	it('is iterable with no lines', () => {
		expect([...content]).toEqual([]);
	});

	it('links are correctly set', () => {
		expect(content.head()).toBe(null);
		expect(content.tail()).toBe(null);
	});
});

describe('create with one line', () => {
	const content = Content.create();

	const line = content.append('test', 'source');

	it('has one line', () => {
		expect(content.numberOfLines()).toBe(1);
	});

	it('is iterable with one line', () => {
		expect([...content]).toEqual([line]);
	});

	it ('links are correctly set', () => {
		expect(line.previous).toBe(null);
		expect(line.next).toBe(null);

		expect(content.head()).toBe(line);
		expect(content.tail()).toBe(line);
	});

	it('text is correct', () => {
		expect(line.output).toBe('test');
		expect(line.source).toBe('source');
	});

	it('validate line visibility', () => {
		expect(line.visibility).toBe(Content.Visibility.CLOSED);
	});
});

describe('create with multiple lines', () => {
	const content = Content.create();

	const line1 = content.append('test1', 'source1', Content.Visibility.OPEN);
	const line2 = content.append('test2', 'source2', Content.Visibility.PINNED);
	const line3 = content.append('test3', 'source3', Content.Visibility.CLOSED);

	it('has many lines', () => {
		expect(content.numberOfLines()).toBe(3);
	});

	it('is iterable over many lines', () => {
		expect([...content]).toEqual([line1, line2, line3]);
	});

	it('links are correctly set', () => {
		expect(line1.previous).toBe(null);
		expect(line1.next).toBe(line2);
		expect(line2.previous).toBe(line1);
		expect(line2.next).toBe(line3);
		expect(line3.previous).toBe(line2);
		expect(line3.next).toBe(null);

		expect(content.head()).toBe(line1);
		expect(content.tail()).toBe(line3);
	});

	it('text is correct', () => {
		expect(line1.output).toBe('test1');
		expect(line1.source).toBe('source1');
		expect(line2.output).toBe('test2');
		expect(line2.source).toBe('source2');
		expect(line3.output).toBe('test3');
		expect(line3.source).toBe('source3');
	});

	it('validate lines visibility', () => {
		expect(line1.visibility).toBe(Content.Visibility.OPEN);
		expect(line2.visibility).toBe(Content.Visibility.PINNED);
		expect(line3.visibility).toBe(Content.Visibility.CLOSED);
	});
});
