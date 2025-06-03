module.exports = {
  apps: [
    {
      name: "excel-api",
      script: "index.js",
      env: {
        PORT: 3000,
        ALLOWED_ORIGIN: "http://10.10.10.47"
      }
    }
  ]
};
