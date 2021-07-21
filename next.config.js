module.exports = {
  async rewrites() {
    return [
      {
        source: '/team',
        destination: '/about',
      },
      {
        source: '/about-us',
        destination: '/about',
      },
      // Path Matching - will match `/post/a` but not `/post/a/b`
      {
        source: '/post/:slug',
        destination: '/news/:slug',
      },
      // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
      {
        source: '/blog/:slug*',
        destination: '/news/:slug*',
      },
      // Rewriting to an external URL
      {
        source: '/g/:id',
        destination: 'https://nextetor.vercel.app/office/games/:id',
      },
    ]
  },
}
