'use strict';

module.exports = (sequelize, DataTypes) => {
  var <%= name %> = sequelize.define('<%= name %>', {
    <% attributes.forEach(function(attribute, index) { %>
      <%= attribute.fieldName %>: DataTypes.<%= attribute.dataFunction ? `${attribute.dataFunction.toUpperCase()}(DataTypes.${attribute.dataType.toUpperCase()})` : attribute.dataType.toUpperCase() %>
      <%= (Object.keys(attributes).length - 1) > index ? ',' : '' %>
    <% }) %>
  }, {
    <%= underscored ? 'underscored: true,' : '' %>
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return <%= name %>;
};
