function Product(name, price) {
	this.name = name;
	this.price = price;

	return this;
}

function Food(name, price) {
	Product.call(this, name, price);
	this.category = 'food';
}

Food.prototype = Object.create(Product.prototype);

function Toy(name, price) {
	Product.call(this, name, price);
	this.category = 'toy';
}

Toy.prototype = Object.create(Product.prototype);

var cheese = new Food('cheese', 30);
var fun = new Toy('fun', 45);

console.log(Toy.prototype);
