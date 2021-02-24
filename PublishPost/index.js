const prisma = require('../lib/prisma')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const publishedPost = await prisma.post.update({
        where: {
            id: req.body.id
        },
        data: {
            published: true
        }
    })

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: publishedPost
    };
}