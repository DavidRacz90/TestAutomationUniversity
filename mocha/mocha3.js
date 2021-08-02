describe('Mocha hooks', () => {
  before('Execute before all tests', () => {
    console.log('Execute before all tests');
  });
  after('Execute after all tests', () => {
    console.log('Execute after all tests');
  });
  beforeEach('Execute tests before each test', () => {
    console.log('Execute before each test');
  });
  afterEach('Execute after each test', () => {
    console.log('Execute after each test');
  });
  it('Mocha hooks test', () => {
    console.log('Mocha hook test')
  })
});
