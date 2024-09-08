const createEnum = (values) => {
	const enumObject = {};
	for (const val of values) {
		enumObject[val] = val;
	}
	return Object.freeze(enumObject);
};

export const Visibility = createEnum(['CLOSED', 'OPEN', 'PINNED']);

const mkLine = (output, source, visibility, previous, next) => ({
	output,
	source,
	visibility,
	previous,
	next
});

export const create = () => {
	let _head = null;
	let _tail = null;

	const append = (output, source, visibility = Visibility.CLOSED) => {
		const line = mkLine(output, source, visibility, _tail, null);

		if (_tail) {
			_tail.next = line;
		} else {
			_head = line;
		}
		_tail = line;

		return line;
	};

	const _self = {
		numberOfLines: () => {
			let count = 0;
			for (let line = _head; line; line = line.next) {
				count++;
			}
			return count;
		},
		head: () => _head,
		tail: () => _tail,

		append: append,

		[Symbol.iterator]: () => {
			let line = _head;
			return {
				next: () => {
					if (!line) {
						return { done: true };
					}
					const current = line;
					line = line.next;
					return { value: current, done: false };
				}
			};
		}
	};

	return _self;
};
