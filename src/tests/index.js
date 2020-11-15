const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../server");
chai.should();

/*
 * This sprint you will have to create all tests yourself, TDD style.
 * For this you will want to get familiar with chai-http https://www.chaijs.com/plugins/chai-http/
 * The same kind of structure that you encountered in lecture.express will be provided here.
 */
const server = setupServer();
describe("API Server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  it("should return GET /users", async () => {
    //exercise
    const res = await request.get("/users");
    //assert
    res.should.have.status(200);
    //(JSON.parse(res.text).length).should.deep.equal(11);
  });


  it("should return POST /users", async () => {
    //exercise
    const res = await request.post("/users").send({
      "firstName": "Phantom",
      "lastName": "Assassin",
      "age": 30,
      "rank": 10
    });
    res.should.be.json;
    //assert
    res.should.have.status(201);
    JSON.parse(res.text).firstName.should.deep.equal("Phantom");
    JSON.parse(res.text).lastName.should.deep.equal("Assassin");
    JSON.parse(res.text).age.should.deep.equal(30);
    JSON.parse(res.text).rank.should.deep.equal(10);
  });

  it("should return Patch /users/id", async () => {
    //exercise
    const res = await request.patch("/users/18").send({
      "firstName": "Phantom",
      "lastName": "Assassin",
      "age": 30,
      "rank": 50
    });
    res.should.be.json;
    //assert
    res.should.have.status(200);
    JSON.parse(res.text).firstName.should.deep.equal("Phantom");
    JSON.parse(res.text).lastName.should.deep.equal("Assassin");
    JSON.parse(res.text).age.should.deep.equal(30);
    JSON.parse(res.text).rank.should.deep.equal(50);
  });

  it("should return Delete /users/id", async () => {
    //exercise
    const res = await request.delete("/users/18");
    res.should.be.json;
    //assert
    res.should.have.status(200);
    JSON.parse(res.text).length.should.deep.equal(36);
  });
});
