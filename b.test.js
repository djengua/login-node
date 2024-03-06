const request = require("supertest");

const { app, login } = require("./app");

describe("SEGUNDO TEST (Módulo de users)", () => {
  test("Probando el metodo login", () => {
    //   return request(app).get("/").then((response) =>{
    //     expect(response.statusCode).toBe(302); // 200
    //   });

    const res = login("Admin", "Password@123");
    expect(res).toBe("Correct");
  });

  test("Probando el metodo login error", () => {
    const res = login("Admin2", "PassTest");
    expect(res).toBe("Error");
  });
});
