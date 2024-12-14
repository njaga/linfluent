import { Calendar, Clock, Share2, BookmarkPlus, ChevronLeft } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { useState } from 'react';

const BlogPost = () => {
    const { id } = useParams<{ id: string }>();
    const [isBookmarked, setIsBookmarked] = useState(false);

    if (!id || !blogPosts[id]) {
        return <Navigate to="/blog" replace />;
    }

    const post = blogPosts[id];

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Erreur lors du partage:', error);
            }
        } else {
            // Fallback : copier le lien dans le presse-papier
            navigator.clipboard.writeText(window.location.href);
            alert('Lien copié dans le presse-papier !');
        }
    };

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
        // Ici vous pouvez ajouter la logique pour sauvegarder dans localStorage ou une API
        if (!isBookmarked) {
            // Sauvegarder
            const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
            bookmarks.push(id);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        } else {
            // Retirer
            const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
            const updatedBookmarks = bookmarks.filter((bookmarkId: string) => bookmarkId !== id);
            localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
        }
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            {/* Barre de navigation */}
            <nav className="sticky top-0 bg-white border-b border-gray-100 z-50">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link
                            to="/blog"
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                        >
                            <ChevronLeft className="h-5 w-5" />
                            <span>Retour</span>
                        </Link>

                        <div className="flex items-center space-x-2">
                            <button
                                onClick={handleShare}
                                className="hover:bg-gray-100 p-2 rounded-full transition-colors"
                            >
                                <Share2 className="h-5 w-5 text-gray-600" />
                            </button>
                            <button
                                onClick={handleBookmark}
                                className={`hover:bg-gray-100 p-2 rounded-full transition-colors ${isBookmarked ? 'text-blue-600' : 'text-gray-600'
                                    }`}
                            >
                                <BookmarkPlus className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto">
                    {/* En-tête de l'article */}
                    <div className="text-center mb-12">
                        <div className="mb-6">
                            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center space-x-6 text-gray-500">
                            <span className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                {post.date}
                            </span>
                            <span className="flex items-center">
                                <Clock className="w-5 h-5 mr-2" />
                                {post.readTime}
                            </span>
                        </div>
                    </div>

                    {/* Image principale */}
                    <div className="aspect-w-16 aspect-h-9 mb-12 rounded-2xl overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Auteur */}
                    <div className="flex items-center mb-12 p-6 bg-white rounded-xl shadow-sm">
                        <div className="flex items-center space-x-4">
                            <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <div className="font-medium text-gray-900">{post.author.name}</div>
                                <div className="text-sm text-gray-500">{post.author.role}</div>
                            </div>
                        </div>
                    </div>

                    {/* Contenu de l'article */}
                    <article className="prose prose-lg max-w-none">
                        <div
                            className="bg-white p-8 rounded-2xl shadow-sm"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>

                    {/* Tags */}
                    <div className="mt-12">
                        <h4 className="text-sm font-medium text-gray-900 mb-4">Tags associés</h4>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-4 py-2 rounded-lg text-sm 
                           bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Articles similaires */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Articles similaires</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {Object.entries(blogPosts)
                                .filter(([currentId]) => currentId !== id)
                                .slice(0, 2)
                                .map(([postId, relatedPost]) => (
                                    <Link 
                                        key={postId}
                                        to={`/blog/${postId}`}
                                        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img 
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-600 mb-4">
                                                {relatedPost.category}
                                            </span>
                                            <h4 className="font-semibold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                                {relatedPost.title}
                                            </h4>
                                            <p className="text-gray-500 text-sm mb-4">
                                                {relatedPost.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <img 
                                                        src={relatedPost.author.avatar} 
                                                        alt={relatedPost.author.name}
                                                        className="w-8 h-8 rounded-full"
                                                    />
                                                    <div className="text-sm">
                                                        <p className="text-gray-900 font-medium">{relatedPost.author.name}</p>
                                                        <p className="text-gray-500">{relatedPost.date}</p>
                                                    </div>
                                                </div>
                                                <span className="flex items-center text-sm text-gray-500">
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    {relatedPost.readTime}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BlogPost; 