const { APP_URL, GAME_ID } = process.env

module.exports = {
  env: {
    APP_URL: APP_URL,
    GAME_ID: GAME_ID
  },
  async rewrites() {
    return [
      {
        source: '/g/:path*',
        destination: `${APP_URL}/office/game/:path*`,
      },
      {
        source: '/api/graphql',
        destination: `${APP_URL}/office/api/graphql`,
      },
      {
        source: '/office',
        destination: `${APP_URL}/office`,
      },
      {
        source: '/office/:path*',
        destination: `${APP_URL}/office/:path*`,
      },
    ]
  }
}
