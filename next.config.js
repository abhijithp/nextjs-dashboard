// next.config.js

module.exports = {
    async rewrites() {
      return [
        {
          source: '/dashboard',
          destination: '/app/dashboard/page', // Path to the actual file
        },
      ];
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/dashboard', // The path you want users to be redirected to
          permanent: true, // Set to true if the redirect should be permanent
        },
      ];
    },
  };
  