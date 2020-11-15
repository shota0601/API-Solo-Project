import "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import { Application } from "express";
import { getRepository, Repository, Not, IsNull } from "typeorm";
import {UserController} from "../controller/UserController";
import "reflect-metadata";
import {createConnection} from "typeorm";
//import * as express from "express";
import * as bodyParser from "body-parser";
//import {Request, Response} from "express";
import {Routes} from "../routes";
import {UserRank} from "../entity/User";

chai.use(chaiHttp);

//const expect = chai.expect;

describe("Pokemon API Server", () => {

  let app: Application;
  it("should return /api/pokemon", async () => {
    //exercise
    const res = await chai.request(app).get("/users");
    res.should.be.json;
    //assert
    res.should.have.status(200);
  });
});