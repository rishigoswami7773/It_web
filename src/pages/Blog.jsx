import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Search, ArrowRight, Clock, User, Calendar, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { blogPosts, blogCategories } from '../data/blogsData';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-[#071A38] text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#19B5C4]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ru-kEm Engineering Blog</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Insights on Modern <span className="text-[#19B5C4]">Software Architecture</span> & Cloud
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Practical tutorials, architectural case studies, and engineering benchmarks curated by our Ahmedabad developers.
          </p>
        </div>
      </section>

      {/* Filter Chips & Search */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0B2A5B] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#19B5C4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#0B2A5B] font-heading">No articles found</h3>
              <p className="text-xs text-slate-500 mt-1">Try switching categories or clearing search keywords.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card-hover-unique bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B2A5B]/85 backdrop-blur-sm text-white text-xs font-bold">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6 sm:p-7">
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold font-heading text-[#0B2A5B] group-hover:text-[#19B5C4] transition-colors line-clamp-2 mb-3">
                        {post.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        {post.summary}
                      </p>

                      <div className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 pt-4">
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-xs font-bold text-[#0B2A5B] group-hover:text-[#19B5C4] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
