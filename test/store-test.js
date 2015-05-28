var expect = require('chai').expect,
    sinon = require('sinon');

describe('store handler', function() {
    var store,
        testObj = {
            key: 'foo',
            value: 'bar'
        },
        testObj2 = {
            key: 'foo',
            value: 'xyz'
        };

    before(function(done) {
        store = require('../handlers/store');

        var req = {
            params: {
                key: testObj.key
            }
        };

        var res = {
            status: sinon.stub().returns({
                end: done
            })
        };

        var next = sinon.spy();

        // make sure test key is deleted before test

        store.deleteKey(req, res, next);
    });

    it('201 add a key/value', function(done) {
        function end() {
            expect(res.status.calledWith(201)).to.be.true;
            done();
        }

        var req = {
            params: {},
            body: testObj
        };

        var res = {
            status: sinon.stub().returns({
                end: end
            })
        };

        var next = sinon.spy();

        store.addValue(req, res, next);
    });

    it('200 get a key/value', function(done) {
        function send(result) {
            expect(res.status.calledWith(200)).to.be.true;
            expect(result).to.eql(testObj);
            done();
        }

        var req = {
            params: {
                key: testObj.key
            }
        };

        var res = {
            status: sinon.stub().returns({
                send: send
            })
        };

        var next = sinon.spy();

        store.getValue(req, res, next);
    });

    it('204 update a key/value', function(done) {
        function end() {
            expect(res.status.calledWith(204)).to.be.true;
            done();
        }

        var req = {
            params: {
                key: testObj.key
            },
            body: testObj2
        };

        var res = {
            status: sinon.stub().returns({
                end: end
            })
        };

        var next = sinon.spy();

        store.updateValue(req, res, next);
    });

    it('200 get all key/values', function(done) {
        function send(result) {
            expect(res.status.calledWith(200)).to.be.true;
            expect(result).to.be.instanceOf(Array);
            expect(result).to.include(testObj2);
            done();
        }

        var req = {
            params: {}
        };

        var res = {
            status: sinon.stub().returns({
                send: send
            })
        };

        var next = sinon.spy();

        store.getAll(req, res, next);
    });

    it('204 delete a key/value', function(done) {
        function end() {
            expect(res.status.calledWith(204)).to.be.true;
            done();
        }

        var req = {
            params: {
                key: testObj.key
            }
        };

        var res = {
            status: sinon.stub().returns({
                end: end
            })
        };

        var next = sinon.spy();

        store.deleteKey(req, res, next);
    });

    it('404 get an unknown key/value', function(done) {
        function end() {
            expect(res.status.calledWith(404)).to.be.true;
            done();
        }

        var req = {
            params: {
                key: 'fizz'
            }
        };

        var res = {
            status: sinon.stub().returns({
                end: end
            })
        };

        var next = sinon.spy();

        store.getValue(req, res, next);
    });
});