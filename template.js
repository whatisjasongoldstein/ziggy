const nunjucks = require('nunjucks');
const marked = require('marked');

/**
 * Mark a string as safe so we can include HTML in the template.
 * @param  {String} html    You're HTML that should not be escaped
 * @return {String}
 */
function markSafe(html) {
  return new nunjucks.runtime.SafeString(html);
}

module.exports.manageEnvironment = function(environment) {

  /**
   * Markdown filter
   * @param  {String} str  Markdown string
   * @return {String}      HTML, marked safe
   */
  environment.addFilter('markdown', (str) => {
    return markSafe(marked(String(str)));
  });

  /**
   * Render a template with keyword args passed as context.
   *
   * {{ component('my-template.html', title="Hello world", emoji="🐶") }}
   * 
   * @param  {String}  template   Path to a Nunjucks template
   * @param  {Object}  context    Nunjucks will roll all the keyword args
   *                              into an object automatically. This will
   *                              be the template's context.
   * @return {HTML}               Renders included component in the template.
   */
  environment.addGlobal('component', (template, context) => {
    return markSafe(environment.render(template, context));
  });

}