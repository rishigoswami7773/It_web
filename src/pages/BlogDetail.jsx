import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, Clock, User, Share2, 
  Sparkles, CheckCircle2, ArrowRight, MessageCircle 
} from 'lucide-react';
import { blogPosts } from '../data/blogsData';

export default function BlogDetail({ onOpenQuote }) {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id) || blogPosts[0];

  const otherPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header Banner */}
      <section className="relative py-20 sm:py-28 bg-[#071A38] text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#19B5C4] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] text-xs font-bold uppercase">
              {post.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-6 pt-6 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#19B5C4]" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#19B5C4]" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#19B5C4]" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl mb-12 border-4 border-white">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div className="p-4 bg-[#E8F9FB] rounded-2xl border border-[#19B5C4]/30 text-[#0A8895] text-sm font-medium italic">
              "{post.summary}"
            </div>

            <div className="space-y-4">
              {post.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-xl sm:text-2xl font-bold font-heading text-[#0B2A5B] pt-4">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                return (
                  <p key={idx} className="text-slate-600">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold font-heading text-[#0B2A5B] mb-6">
              More Engineering Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <div key={p.id} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#19B5C4] uppercase">{p.category}</span>
                    <h4 className="text-base font-bold font-heading text-[#0B2A5B] mt-1 mb-2">
                      {p.title}
                    </h4>
                  </div>
                  <Link to={`/blog/${p.id}`} className="text-xs font-bold text-[#0B2A5B] hover:text-[#19B5C4] inline-flex items-center gap-1 mt-4">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
