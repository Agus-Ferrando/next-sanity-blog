export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'id',
            type: 'number',
            title: 'Id'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'content',
            type: 'text',
            title: 'Content'
        },
        {
            name: 'author',
            type: 'string',
            title: 'Author'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'image',
            type: 'url',
            title: 'Image'
        },
        {
            name: 'comments',
            type: 'array',
            title: 'Comments',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Name',
                            type: 'string',
                            name: 'name'
                        },
                        {
                            title: 'Content',
                            type: 'text',
                            name: 'content'
                        },
                        {
                            title: 'Image',
                            type: 'url',
                            name: 'Image'
                        },
                    ]
                },
               
            ]
        },

    ]
}