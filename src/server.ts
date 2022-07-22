import { createServer, Model, Factory } from "miragejs";
import { faker } from "@faker-js/faker";

createServer({
  environment: "development",

  models: {
    user: Model,
  },

  //   factories: {
  //     user: Factory.extend({
  //       name: faker.name.findName(),
  //     }),
  //   },

  factories: {
    user: Factory.extend({
      name() {
        return faker.name.findName();
      },
      email() {
        return faker.internet.email();
      },
      active() {
        return faker.datatype.boolean();
      },
    }),
  },

  seeds(server) {
    server.createList("user", 5);
  },

  routes() {
    this.namespace = "api";
    this.get("/users");
  },
});
