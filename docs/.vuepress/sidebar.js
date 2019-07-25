var fs = require("fs");

module.exports = function(path, rel) {
  var files = fs.readdirSync(path);
  var list = [""];
  for (var i in files) {
    var filename = files[i]
      .split(".")
      .slice(0, -1)
      .join(".");
    if (filename.toLowerCase() !== "readme") list.push(filename);
  }

  list = list.map(f => {
    return `${rel}${f}`;
  });
  return list;
};
