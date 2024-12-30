import { defineType,defineField,defineArrayMember } from "sanity"

export const post = defineType({
    name:'post',
    type:'document',
    title:'Post',
    fields:[
        defineField(
        {
            name:'title',
            type:'string',
            title:'Post Title',
            description:'Title of the post',
            validation:Rule => Rule.required(), 
        }),

        //slug field
        defineField(
            {
                name:'slug',
                type:'slug',
                title:'Slug',
                options:{
                    source:'title',
                    maxLength:96
                },
                validation:Rule => Rule.required()
            },
        ),
        defineField(
            {
            name:'summary',
            type:'text',
            title:'Summary',
            validation:Rule => Rule.required()
        }),
        defineField({
            name:'image',
            type:'image',
            title:'Image'
        }),
        defineField({
            name:'content',
            type:'array',
            title:'Content',
            of:[
                defineArrayMember({
                    type:'block'
                })
            ]
        }),
        defineField({
            name:'author',
            type:'reference',//give reference that we donot need to create new author
            title:'Author',
            to:[{
                type:'author'
            }]
        })

       //  IF YOU WANT TO ADD GENDER SO YOU CAN ADD THIS THIS IS FOR LEARNING
        // {
        //     name:'gender',
        //     type:'string',
        //     title:'gender',
        //     options:{
        //         list:[
        //             {title:'male',value:'male'},
        //             {title:'female',value:'female'}
        //         ],
        //         layout:'radio',//circle which is filled when we select
        //         direction:'horizontal'//only done when layout is radio
        //     }
        // }


    ]
}
)