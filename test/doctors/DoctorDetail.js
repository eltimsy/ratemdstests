const Nightmare = require('nightmare');
const should = require('chai').should();

describe('Doctor detail page', function() {
    this.timeout(15000);
    var nightmare;

    beforeEach(function() {
        nightmare = Nightmare();
    });
    afterEach(function(done) {
        nightmare.end(done);
    })
    const url = 'https://s.ratemds.com/doctor-ratings/dr-truedoctorman-toronto-on-ca'

    describe('Page loads', function () {
        it('Doctor name should exist', function (done) {
            nightmare
                .goto(url)
                .exists('h1')
                .then((exists) => {
                    exists.should.be.true;
                })
                .then(() => {
                    return nightmare.exists('a.blaksdfjlaskdfj')
                })
                .then((exists) => {
                    exists.should.be.false;
                })
                .then(() => done());
        });
    });
    describe('Doctor name', function () {
        it('should show doctor name', function (done) {
            const expected = 'Dr. Ultrasuper'
            const selector = 'h1'
            nightmare
                .goto(url)
                .evaluate(() => {
                    return document.querySelector('h1').innerText
                })
                .then((text) => {
                    text.should.equal(expected);
                })
                .then(() => done());
        });
    });
});