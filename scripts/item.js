const validateName = function(name){
  if (name == false){
    throw new TypeError('Name must not be blank');
  }
}

const create = function(name){
  let item = {
      id: cuid(),
      name: name,
      checked: false,
  };
  return item;
}

export default {
  validateName,
  create
};


