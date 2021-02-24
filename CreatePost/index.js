const prisma = require('../lib/prisma')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const post = await prisma.post.create({
        data: {
            title: req.body.title,
            content: req.body.content,
        }
    })

    context.res = {
        body: post
    };
}