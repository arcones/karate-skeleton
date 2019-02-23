function fn() {    
  var env = karate.env;
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
	myVarName: 'someValue'
  }
  if (env == 'dev') {
        config.foo = 'bar';
  } else if (env == 'e2e') {
        config.bar = 'foo';
  }
  return config;
}