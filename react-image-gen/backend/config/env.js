export default {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET_KEY,
  replicateApiToken: process.env.REPLICATE_API_TOKEN,
};
