const validator = (fieldType, fieldValue) => {
  let error = false;
  switch (fieldType) {
    case "text":
      error = fieldValue.trim() === "";
      break;
    case "email":
      error = !fieldValue.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      break;

    case "phone":
      error = !fieldValue.match(
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
      );
      break;
    default:
  }
  return error;
};

export default validator;
