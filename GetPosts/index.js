const prisma = require('../lib/prisma')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const posts = await prisma.post.findMany({
        where: {
            published: true
        }
    })

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: posts
    };
}