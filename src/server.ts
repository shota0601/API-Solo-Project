const express = require("express");
//const createConnection = require("typeorm");
import { UserRank } from "./entity/User";
import DataBaseConnetionManager from "./database";
import { Repository, getRepository, DeleteResult,createConnection } from "typeorm";
//const express = require("express");

const setupServer = () => {
  /**
   * Create, set up and return your express server, split things into separate files if it becomes too long!
   */
  //express関数の戻り値をappに入れる

  const app = express();
  app.use(express.json());
  app.get("/users", (req, res) => {
    DataBaseConnetionManager.connect().then(async(connection) =>{
    const resu = await connection.manager.find(UserRank);
    res.status(200);
    res.send(resu);
    });
  });

  app.post("/users", async(req, res) => {
    const userRank = new UserRank();
    userRank.firstName = req.body.firstName;
    userRank.lastName = req.body.lastName;
    userRank.age = req.body.age;
    userRank.rank = req.body.rank;
    const userRankRepository = await getRepository(UserRank);
    const user = userRankRepository.create(userRank);
    await userRankRepository.save(user)
    res.status(201);
    res.send(user);
  });

  app.patch("/users/:id", async(req, res) => {
    const userRankRepository = await getRepository(UserRank);
    const userR = await userRankRepository.findOne(req.params.id)
    userR.firstName = req.body.firstName;
    userR.lastName = req.body.lastName;
    userR.age = req.body.age;
    userR.rank = req.body.rank;
    await userRankRepository.save(userR)
    const userUppAfter = await userRankRepository.findOne(req.params.id)
    res.status(200);
    res.send(userUppAfter);
  }); 

  app.delete("/users/:id", async(req, res) => {
    const userRankRepository = await getRepository(UserRank);
    const userR = await userRankRepository.findOne(req.params.id)
    await userRankRepository.remove(userR)
    const resAccount = await getRepository(UserRank).find();
    res.status(200);
    res.send(resAccount);
  }); 
  return app;
};

module.exports = { setupServer };

