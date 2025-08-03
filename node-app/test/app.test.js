const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return Hello message', (done) => {
    request(app)
      .get('/')
      .expect(200, 'Hello from Node.js App via Jenkins CI/CD!', done);
  });
});
