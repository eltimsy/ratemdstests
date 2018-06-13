const Nightmare = require('nightmare');
const should = require('chai').should();

describe('Doctor detail page', function() {
    this.timeout(15000);
    var nightmare;

    beforeEach(function() {
        nightmare = Nightmare({ show: true });
    });
    afterEach(function(done) {
        nightmare.end(done);
    })
    const url = 'https://s.ratemds.com/doctor-ratings/dr-truedoctorman-toronto-on-ca'
    describe('Doctor name', function () {
        it('should show doctor name', function (done) {
            const expected = 'Dr. Ultrasuper'
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
    describe('Click Specialty Link', function () {
        it('should be able to go to specialty page', function (done) {
            const expected = 'The Best Perinatologists in Toronto, ON'
            nightmare
                .goto(url)
                .click('div.search-item-info a')
                .evaluate(() => {
                    return document.querySelector('h2').innerText
                })
                .then((text) => {
                    text.should.equal(expected);
                })
                .then(() => done());
        });
    });
    describe('Click Gender Link', function () {
        it('should be able to go gender page', function (done) {
            const expected = 'The Best Male Perinatologists in Toronto, ON'
            nightmare
                .goto(url)
                .click('a[href="/best-doctors/on/toronto/perinatologist-maternal-fetal-medicine/?gender=m"]')
                .evaluate(() => {
                    return document.querySelector('h2').innerText
                })
                .then((text) => {
                    text.should.equal(expected);
                })
                .then(() => done());
        });
    });
});