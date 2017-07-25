function isInteger (argument) {

  if (typeof argument === "number") {
    return isInteger(String(argument));
  }

  if (!(typeof argument === "string")) {
    return false;
  }

  if (/([a-zA-z]|[.,()[!?&\]:;])/.test(argument)) {

    return false;

  }

  if (/\d/.test(argument)) {
    return Number(argument);
  }
}
