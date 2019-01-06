var events = require('events');

var util = require('util');

var Person = function(name){
    this.name  = name;
};

util.inherits(Person, events.EventEmitter); // inherit EventEmitter from events module on our Person constructor

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james,mary,ryu];

people.forEach(function(person){
    // Attach the event
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' +  mssg);        
    });
});

// create and emit the event

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry');