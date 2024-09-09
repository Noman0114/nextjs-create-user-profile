
import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: true,
    },
    blogValue: {
        type: String,
        required: true,
    }
});

const blogData = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default blogData;
