import nunjucks from 'nunjucks';

function markSafe(html) {
  return new nunjucks.runtime.SafeString(html);
}

export const manageEnvironment = function(environment) {
  environment.addFilter('slug', function(str) {
    return str && str.replace(/\s/g, '-', str).toLowerCase();
  });

  environment.addGlobal('component', (template, context) => {
    return markSafe(environment.render(template, context));
  });
}