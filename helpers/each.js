module.exports.register = function (Handlebars, options)  {
  Handlebars.registerHelper('each', function (opts)  {
    return  'bob' + opts.fn();
  });
};
