var thinky = require('thinky')();
var type   = thinky.type;

var User = thinky.createModel("User", {
  id: String,
  name: String,
  username: String,
  email: type.string().email(),
  password_digest: type.string().max(60)
});
