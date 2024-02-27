const request  = require('supertest');

const app = require('./app');

describe("PRIMER TEST", () => {
  test("Probando el metodo GET", () => {
    return request(app).get("/").then((response) =>{
      expect(response.statusCode).toBe(302); // 200
    });
  });
});