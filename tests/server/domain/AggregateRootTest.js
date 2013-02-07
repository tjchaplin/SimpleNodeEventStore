var should = require('should');
var AggregateRoot = require('../../../server/domain/AggregateRoot');

var setup = function(){
    AggregateRoot.id = 1;
    AggregateRoot.version = 1;
    AggregateRoot.changes = [];
}

var tearDown = function(){

}

describe('AggregateRoot',function(){
    it("Should be able to set id",function(){
        setup();
        AggregateRoot.should.have.property('id',1);
    })
});

describe('AggregateRoot',function(){
    it("Should be able to set version",function(){
        setup();
        AggregateRoot.should.have.property('version',1);
    })
});

describe('AggregateRoot',function(){
    it("Should be able to add changes",function(){
        setup();
        AggregateRoot.changes.push('NewChange');
        AggregateRoot.changes.length.should.equal(1);
    })
});