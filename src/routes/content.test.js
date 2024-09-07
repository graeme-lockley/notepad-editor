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
	const line = content.append('test');

	it('has one line', () => {
		expect(content.numberOfLines()).toBe(1);
	});

	it('is iterable with one line', () => {
		expect([...content]).toEqual([line]);
	});

	it('links are correctly set', () => {
		expect(line.previous).toBe(null);
		expect(line.next).toBe(null);

		expect(content.head()).toBe(line);
		expect(content.tail()).toBe(line);
	});

	it('text is correct', () => {
		expect(line.text).toBe('test');
	});
});

describe('create with multiple lines', () => {
	const content = Content.create();
	const line1 = content.append('test1');
	const line2 = content.append('test2');
	const line3 = content.append('test3');

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
		expect(line1.text).toBe('test1');
		expect(line2.text).toBe('test2');
		expect(line3.text).toBe('test3');
	});
});
