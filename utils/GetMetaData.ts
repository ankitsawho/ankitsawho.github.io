import fs from 'fs'
import matter from 'gray-matter'
import { PostMetaData } from './PostMetaData'

export const getProjectMetaData = () => {
    const folder = "projects/"
    const files = fs.readdirSync(folder)
    const mdPosts = files.filter(file => file.endsWith(".md"))
    const posts = mdPosts.map(filename => {
        const fileContent = fs.readFileSync(`projects/${filename}`, 'utf8')
        const matterResult = matter(fileContent)
        return {
            title: matterResult.data.title,
            subtitle: matterResult.data.subtitle,
            links: matterResult.data.links,
            slug: filename.replace(".md", "")
        }
    })
    return posts
}



export const getPostMetaData = () : PostMetaData[] => {
    const folder = "posts/"
    const files = fs.readdirSync(folder)
    const mdPosts = files.filter(file => file.endsWith(".md"))
    const posts = mdPosts.map(filename => {
      const fileContent = fs.readFileSync(`posts/${filename}`, 'utf8')
      const matterResult = matter(fileContent)
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: filename.replace(".md", "")
      }
    })
    return posts
  }
  


export const getHomePostMetaData = () => {
  const fileContent = fs.readFileSync("utils/latestPosts.txt", "utf8")
  var mdPosts = fileContent.toString().split("\n");  
  const posts = mdPosts.map(filename => {
    const fileContent = fs.readFileSync(`posts/${filename}`, 'utf8')
    const matterResult = matter(fileContent)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: filename.replace(".md", "")
    }
  })
  return posts
}


export const getHomeProjectMetaData = () => {
  const fileContent = fs.readFileSync("utils/mainProjects.txt", "utf8")
  var mdPosts = fileContent.toString().split("\n");
  const posts = mdPosts.map(filename => {
    const fileContent = fs.readFileSync(`projects/${filename}`, 'utf8')
    const matterResult = matter(fileContent)
    return {
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        links: matterResult.data.links,
        slug: filename.replace(".md", "")
    }
})
return posts
}
