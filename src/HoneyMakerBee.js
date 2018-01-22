var HoneyMakerBee = function() {
	Bee.call(this)
	this.age = 10;
	this.job = 'make honey';
	this.honeyPot = 0;
};

HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot++;
};

HoneyMakerBee.inherits(Bee);

HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
	this.honeyPot--;
};