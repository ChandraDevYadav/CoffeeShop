import React from 'react';
import BlogForm from '../../components/Blog/BlogForm';
import BlogList from '../../components/Blog/BlogList';

const BlogsPage = () => {
    const [refresh, setRefresh] = React.useState(false);

    const triggerRefresh = () => setRefresh(!refresh);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <BlogForm onBlogAdded={triggerRefresh} />
            <BlogList key={refresh} />
        </div>
    );
};

export default BlogsPage;
