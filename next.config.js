module.exports = {
  async rewrites() {
    return [
      {
        source: '/g/:path*',
        destination: `https://nextetor.vercel.app/office/game/:path*`,
      },
      {
        source: '/api/graphql',
        destination: `https://nextetor.vercel.app/office/api/graphql`,
      },
      {
        source: '/office',
        destination: `https://nextetor.vercel.app/office`,
      },
      {
        source: '/office/:path*',
        destination: `https://nextetor.vercel.app/office/:path*`,
      },
    ]
  },
}
