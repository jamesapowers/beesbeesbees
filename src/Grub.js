var Grub = function() {
	this.age = 0;
	this.color = 'pink';
	this.food = 'jelly';
};

Grub.prototype.eat = function(){
}

Function.prototype.inherits = function inherits2(BaseClass) {
  this.prototype = Object.create(BaseClass.prototype);
  this.prototype.constructor = this;
};