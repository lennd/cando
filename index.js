module.exports = function can (role, roles) {
  return {
    do: action => {
      if (role in roles) {
        return roles[role].permissions.indexOf(action) > -1;
      }
      return false;
    }
  };
};
