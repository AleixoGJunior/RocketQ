const Database = require("../db/config");

module.exports = {
  async create(request, response) {
    const pass = request.body.password;
    const db = await Database();

    let roomId = "";

    for (var i = 0; i < 6; i++) {
      roomId += Math.floor(Math.random() * 10).toString();
    }

    await db.run(`INSERT INTO rooms VALUES (${parseInt(roomId)}, "${pass}")`);

    await db.close();

    response.redirect(`/room/${roomId}`);
  },
};
