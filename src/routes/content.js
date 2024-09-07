const mkLine = (content, text, previous, next) => ({ content, text, previous, next });

export const create = () => {
	let _head = null;
	let _tail = null;

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

		append: (text) => append(text),

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

	const append = (text) => {
		const line = mkLine(text, text, _tail, null);

		if (_tail) {
			_tail.next = line;
		} else {
			_head = line;
		}
		_tail = line;

		return line;
	};

	return _self;
};
