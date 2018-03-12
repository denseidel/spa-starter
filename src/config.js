const dev = {
  identitiesServices: {
    URL: "http://localhost:9090",
    CALLBACK_URL: "http://localhost:3000/callback"
  }
};

const prod = {
  identitiesServices: {
    URL: "http://localhost:9091",
    CALLBACK_URL: "http://localhost/callback"
  }
};

const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};