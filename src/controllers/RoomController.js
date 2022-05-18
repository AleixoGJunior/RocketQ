module.exports = {
  create(request, response) {
    let roomId = 323243;

    response.redirect(`/room/${roomId}`);
  },
};
