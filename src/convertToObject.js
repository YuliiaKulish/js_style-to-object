'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};

  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    if (!declaration.trim()) {
      continue;
    }

    const [property, value] = declaration.split(':');

    if (property && value) {
      cssObject[property.trim()] = value.trim();
    }
  }

  return cssObject;
}

module.exports = convertToObject;
