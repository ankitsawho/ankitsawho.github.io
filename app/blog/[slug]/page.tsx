import React from 'react'
import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { getPostMetaData } from '@/utils/GetMetaData'

const getPostContent = (slug : string) => {
    const folder = "posts/"
    const file =   `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf8")
    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetaData()
    return posts.map(post => ({
        slug: post.slug
    }))
}

function BlogPost(props: any) {
    const slug = props.params.slug;
    const content = getPostContent(slug)
    return (
        <div className="flex items-center justify-center mt-14">
            <div className='w-full max-w-4xl px-4 space-y-8'>
                <h1 className='font-extrabold dark:text-slate-100 text-4xl text-center'>{content.data.title}</h1>
                <h1 className='font-bold text-xs dark:text-slate-400 text-slate-600 text-right'>{content.data.date}</h1>
                <h1 className='dark:text-slate-200 text-sm font-semibold pb-16'>{content.data.subtitle}</h1>
                <article className='prose lg:prose-lg dark:prose-invert prose-img:rounded-xl prose-a:text-blue-600'>
                    <Markdown>
                    {content.content}
                    </Markdown>
                </article>
            </div>
        </div>
    )
}

export default BlogPost