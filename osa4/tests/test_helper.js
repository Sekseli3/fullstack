const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'HTML is easy',
    author: 'sekseli',
    url : 'www.nakki3',
    likes: '69',
  },
  {
    title: 'ELEC is hard',
    author: 'sekseli',
    url : 'www.muusi',
    likes: '1',
  },
]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon' })
  await blog.save()
  await blog.remove()
  
  return blog._id.toString()
}
  
const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}
  
module.exports = {
  initialBlogs, nonExistingId, blogsInDb
}