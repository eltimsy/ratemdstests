const Nightmare = require('nightmare');
const should = require('chai').should();


describe('Doctor list page', function() {
  this.timeout(15000);
  var nightmare;

  beforeEach(function() {
    nightmare = Nightmare({ show: true });
  });
  afterEach(function(done) {
    nightmare.end(done);
  });
  const urls = ['https://s.ratemds.com/best-doctors/on/toronto/']
  const pageData = [{}]
  urls.forEach(function(url, index) {
    const doctor = pageData[index]
    describe(`List Doctors`, function () {
      it('should have ad doctor', function (done) {
        nightmare
          .goto(url)
          .exists('div.ad-badge')
          .then((exists) =>{
            exists.should.be.true;
          })
          .then(() => done());
      });
    });
  });
});