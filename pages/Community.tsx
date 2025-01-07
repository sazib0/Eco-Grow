import React from 'react';
import { MessageCircle, ThumbsUp, Share2 } from 'lucide-react';

const posts = [
  {
    author: "Sarah Green",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    content: "Just finished planting 20 trees with the local community! Amazing turnout today! 🌳",
    likes: 45,
    comments: 12,
    image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    author: "Mike Rivers",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    content: "Check out my new composting setup! Happy to share tips with fellow gardeners.",
    likes: 32,
    comments: 8,
    image: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function Community() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Community Feed</h1>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <img src={post.avatar} alt={post.author} className="h-12 w-12 rounded-full" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{post.author}</h3>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{post.content}</p>
              {post.image && (
                <img src={post.image} alt="Post content" className="mt-4 w-full rounded-lg" />
              )}
              <div className="mt-6 flex items-center space-x-6 text-gray-500">
                <button className="flex items-center space-x-2 hover:text-green-600">
                  <ThumbsUp className="h-5 w-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-green-600">
                  <MessageCircle className="h-5 w-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-green-600">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}