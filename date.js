//jshint esversion:6

module.exports.getDate = function () {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  //   let day = today.toLocaleDateString("en-US", options);
  //   return day;
  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
  const today = new Date();
  const options = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-US", options);
  return day;
};
