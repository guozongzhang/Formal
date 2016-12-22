const url = require('url'),
      qs = require('querystring'),
      request = require('request')

exports.get_image = async (ctx, next) => {
  const PassThrough = require('stream').PassThrough
  let query = qs.parse(url.parse(ctx.request.url).query)
  ctx.body = request(query.src).pipe(PassThrough())
  return true
}