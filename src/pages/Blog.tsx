
import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const blogPosts = [
    {
      title: "Advancing Autonomous Underwater Vehicle Technology",
      excerpt: "Exploring the latest developments in AUV navigation systems and their applications in marine research and environmental monitoring.",
      author: "Dr. Himabindu Allaka",
      date: "December 15, 2024",
      category: "Research",
      readTime: "5 min read",
      featured: true
    },
    {
      title: "Machine Learning Applications in Marine Robotics",
      excerpt: "How artificial intelligence is revolutionizing underwater exploration and autonomous decision-making in challenging marine environments.",
      author: "Dr. Himabindu Allaka",
      date: "November 28, 2024",
      category: "Technology",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "GNSS Integration for Precision Navigation",
      excerpt: "Latest advancements in Global Navigation Satellite Systems for enhanced positioning accuracy in unmanned surface vehicles.",
      author: "Research Team",
      date: "November 10, 2024",
      category: "Innovation",
      readTime: "4 min read",
      featured: false
    },
    {
      title: "Collaborative Robotics in Underwater Environments",
      excerpt: "Developing multi-robot systems for coordinated underwater missions and their potential impact on ocean exploration.",
      author: "Dr. Himabindu Allaka",
      date: "October 22, 2024",
      category: "Research",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Sustainable Technologies in Marine Systems",
      excerpt: "Exploring eco-friendly approaches to underwater robotics and their contribution to marine conservation efforts.",
      author: "Research Team",
      date: "October 5, 2024",
      category: "Sustainability",
      readTime: "5 min read",
      featured: false
    },
    {
      title: "Future of Autonomous Systems in Space Exploration",
      excerpt: "How technologies developed for marine environments are being adapted for planetary exploration missions.",
      author: "Dr. Himabindu Allaka",
      date: "September 18, 2024",
      category: "Space Tech",
      readTime: "8 min read",
      featured: false
    }
  ];

  const categories = ["All", "Research", "Technology", "Innovation", "Sustainability", "Space Tech"];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <h1 className="academic-heading">
                AstraM Lab Blog
              </h1>
              <p className="academic-body text-lg max-w-4xl mx-auto">
                Stay updated with the latest research insights, technological breakthroughs, and academic developments from our laboratory.
              </p>
            </div>

            {/* Interactive Tab Filter */}
            <div className="tab-container">
              <div className="tab-list">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`tab-button ${
                      activeCategory === category ? 'tab-button-active' : ''
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            {filteredPosts.filter(post => post.featured).map((post, index) => (
              <div key={index} className="academic-card p-8 mb-12 border-l-4 border-blue-800">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                  {post.title}
                </h2>
                
                <p className="academic-body text-lg mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-blue-600">
                    <div className="flex items-center space-x-1">
                      <User size={16} className="text-blue-800" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} className="text-blue-800" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <button className="academic-button-primary flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post, index) => (
                <div key={index} className="academic-card p-6 hover:scale-105 transition-transform duration-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-800 mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="academic-body mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-blue-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <User size={14} className="text-blue-800" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-blue-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} className="text-blue-800" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <button className="academic-button-secondary w-full flex items-center justify-center space-x-2">
                    <span>Read Article</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="academic-body text-lg">No posts found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
