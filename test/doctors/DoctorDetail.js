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
  });
  const urls = ['https://s.ratemds.com/doctor-ratings/dr-truedoctorman-toronto-on-ca']
                // 'https://s.ratemds.com/doctor-ratings/dr-david-homer-toronto-on-ca']
  const pageData = [{name: 'Dr. Ultrasuper',
                    phone: '(416) 231-4231\n',
                    specialty: 'The Best Perinatologists in Toronto, ON',
                    gender: 'The Best Male Perinatologists in Toronto, ON',
                    facility: "Dr. Ultrasuper\'s Credentials",
                    address: 'newdoctorplace',
                    ratings: 'Just to make sure this doc doesn\'t show up in actual results'},
                    {name: 'Dr. David Homer',
                    phone: '4169280003\n',
                    specialty: 'The Best Chiropractors in Toronto, ON',
                    gender:'The Best Male Chiropractors in Toronto, ON'}
                  ]
  urls.forEach(function(url, index) {
    const doctor = pageData[index]
    // describe(`Doctor Info Panel ${doctor['name']}`, function () {
    //   it('should show doctor name', function (done) {
    //     nightmare
    //       .goto(url)
    //       .evaluate(() => {
    //         return document.querySelector('h1').innerText
    //       })
    //       .then((text) => {
    //         text.should.equal(doctor['name']);
    //       })
    //       .then(() => done());
    //   });
    //   it('should show show facilities', function (done) {
    //     nightmare
    //       .goto(url)
    //       .click('div.col-sm-3.col-md-4.search-item-extra .search-item-info:nth-child(2) a')
    //       .evaluate(() => {
    //         console.log(document.querySelector('div.credentials[style]'))
    //         return document.querySelector('div.credentials[style="display: block;"] h2').innerText
    //       })
    //       .then((text) => {
    //         text.should.equal(doctor['facility']);
    //       })
    //       .then(() => done());
    //   });
    //   it('should show phone number', function (done) {
    //     nightmare
    //       .goto(url)
    //       .click('div.col-sm-3.col-md-4.search-item-extra .search-item-info:nth-child(3) a')
    //       .evaluate(() => {
    //         return document.querySelector('div.modal-body').innerText
    //       })
    //       .then((text) => {
    //         text.should.equal(doctor['phone']);
    //       })
    //       .then(() => done());
    //   });
    //   it('should show address', function (done) {
    //     nightmare
    //       .goto(url)
    //       .click('div.col-sm-3.col-md-4.search-item-extra .search-item-info:nth-child(4) a')
    //       .evaluate(() => {
    //         return document.querySelector('div.modal-body address strong').innerText
    //       })
    //       .then((text) => {
    //         text.should.equal(doctor['address']);
    //       })
    //       .then(() => done());
    //   });
    //   it('should be able to go to specialty page', function (done) {
    //     nightmare
    //       .goto(url)
    //       .click('div.search-item-info a')
    //       .evaluate(() => {
    //         return document.querySelector('h2').innerText
    //       })
    //       .then((text) => {
    //         text.should.equal(doctor['specialty']);
    //       })
    //       .then(() => done());
    //   });
    //   it('should be able to go gender page', function (done) {
    //     nightmare
    //       .goto(url)
    //       .click('div.col-sm-3.col-md-4.search-item-extra .search-item-info:nth-child(1) a')
    //       .evaluate(() => {
    //         return document.querySelector('h2').innerText
    //       })
    //       .then((text) => {
    //         text.should.equal(doctor['gender']);
    //       })
    //       .then(() => done());
    //   });
    // });
    describe(`Doctor detail body ${doctor['name']}`, function () {
      it('should show doctor ratings', function (done) {
        nightmare
          .goto(url)
          .evaluate(() => {
            return document.querySelector('div.rating-comment p').innerText
          })
          .then((text) => {
            text.should.equal(doctor['ratings']);
          })
          .then(() => done());
      });
    });
  })
});