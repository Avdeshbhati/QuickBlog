// blogController.js
import Blog from '../models/blog.js'
export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = req.body;
    const image = req.file ? req.file.filename : null;
    const newBlog = new Blog({
      title,
      subTitle,
      description,
      category,
      isPublished,
      image
    });
    await newBlog.save();
    res.status(201).json({ success: true, message: 'Blog created successfully', blog: newBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true })
    res.json({ success: true, blogs })
  }
  catch (error) {
    res.json({ success: false, message: error.message })
  }
}
export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.json({ success: false, message: "Blog not found" })
    }
    res.json({ success: true, blog })
  }
  catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;
    await Blog.findByIdAndDelete(id);


    //Delete all comments associated with blog

    await Comment.deleteMany({blog:id})

    res.json({ success: true, message: "Blog Deleted SuccessFully" })
  }
  catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id)
    if (!blog) {
      return res.json({ success: false, message: "Blog not found" });
    }
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json({ success: true, message: "Blog Status Updated" })
  }
  catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;
    await Comment.create({ blog, name, content })
    res.json({ success: true, message: 'Comment added for review' })
  }
  catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export const getBlogComment = async (req, res) => {
  try {
    const { blogId } = req.body
    const comments = await Comment.find({ blog: blogId, isApproved: true }).sort(
      { craetedAt: -1 })
    res.json({ success: true, comments })

  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}