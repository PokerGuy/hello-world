'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello node8 take 3 from sandbox'
    }),
  };
};
