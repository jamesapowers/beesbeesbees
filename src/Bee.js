var Bee = function(food) {
	Grub.call(this, food);
	this.age = 5;
	this.color = 'yellow';
	this.job = 'keep on growing';
};

Bee.inherits(Grub);

// Bee.inherits1(Grub);
