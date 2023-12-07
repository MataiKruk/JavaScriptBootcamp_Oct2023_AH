tempConverter = (temp, unit) => {
  switch (unit) {
    case "C":
      return ((temp - 32) * 5) / 9;
      break;
    case "F":
      return (temp * 9) / 5 + 32;
      break;
    case "K":
      return temp + 273.15;
      break;
    default:
      break;
  }
};

module.exports = tempConverter;
