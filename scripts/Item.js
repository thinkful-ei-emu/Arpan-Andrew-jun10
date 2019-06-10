'use strict';
/* global cuid */


const Item = (function() {
  function validateName(name) {
    if (!name) throw new TypeError('Name does not exist.');
  }

  function create(name) {
    return {
      name,
      id: cuid(),
      checked: false
    };
  }

  return {
    create,
    validateName
  };
}());