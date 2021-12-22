const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/hw_random_movie_gen"
);
const { STRING, INTEGER } = Sequelize;
const faker = require("faker");

const Movie = db.define("movies", {
  name: {
    type: STRING,
  },
  stars: {
    type: INTEGER,
    validate: {
      max: 5,
      min: 1,
    },
  },
});

const syncAndSeed = async () => {
  await db.sync({ force: true });

  // const movies = Array(3)
  //   .fill("")
  //   .map((_) => {
  //     return faker.company.companyName();
  //   });

  // await Promise.all(movies.map((name) => Movie.create({ name, stars: 3 })));
};

module.exports = {
  syncAndSeed,
  models: { Movie },
};
