/*eslint no-undef: "error"*/
/*eslint-env node*/
module.exports = (nextjs) => (req, res, next) => {
    req.app = nextjs;
    next();
  };
  