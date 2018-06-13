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
  describe('Doctor Info Panel', function () {
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
    it('should show phone number', function (done) {
      const expected = '(416) 231-4231\n'
      nightmare
        .goto(url)
        .click('div.col-sm-3.col-md-4.search-item-extra .search-item-info:nth-child(3) a')
        .evaluate(() => {
          return document.querySelector('div.modal-body').innerText
        })
        .then((text) => {
          text.should.equal(expected);
        })
        .then(() => done());
    });
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
    it('should be able to go gender page', function (done) {
      const expected = 'The Best Male Perinatologists in Toronto, ON'
      nightmare
        .goto(url)
        .click('div.col-sm-3.col-md-4.search-item-extra .search-item-info:nth-child(1) a')
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