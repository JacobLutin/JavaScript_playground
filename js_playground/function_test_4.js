function sum(a) {

	function add_to_sum(b) {
		return a + b;
	}

	return add_to_sum;
}

console.log(sum()(-1));