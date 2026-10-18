import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CalendarDays, Clock3, Search } from 'lucide-react';

type ArticleCategory = 'Education' | 'Exams & Results' | 'Student Life' | 'Institute Updates';

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  paragraphs: string[];
  bullets?: string[];
};

const ARTICLES: Article[] = [
  {
    slug: 'build-a-strong-study-routine',
    title: 'How to Build a Strong Daily Study Routine',
    excerpt: 'A practical guide for students to plan study time, revise consistently, and make room for rest.',
    category: 'Education',
    date: 'October 12, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=85',
    featured: true,
    paragraphs: [
      'A good study routine is not about sitting with books for the whole day. It is about using focused time well and repeating a realistic plan regularly.',
      'Start by writing down the subjects and topics you need to cover. Divide large topics into smaller tasks, and choose a clear goal for each study session. Short, focused sessions are often easier to maintain than an ambitious timetable that is difficult to follow.',
      'Keep revision in your schedule. Revisit what you learned earlier in the week, solve a few questions without looking at the answers, and note the concepts that need another explanation.',
      'Finally, protect your sleep and take short breaks. A routine should help you learn steadily—not leave you exhausted. Adjust the plan each week based on what is working.'
    ],
    bullets: ['Set 2–3 achievable goals for the day.', 'Study difficult topics when your focus is strongest.', 'Revise older topics and practise questions regularly.', 'Keep your phone away during focused study time.']
  },
  {
    slug: 'prepare-for-school-exams-without-last-minute-stress',
    title: 'Preparing for School Exams Without Last-Minute Stress',
    excerpt: 'Use a simple revision plan, practice questions, and small weekly targets to feel more prepared.',
    category: 'Exams & Results',
    date: 'October 8, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=1200&q=85',
    paragraphs: [
      'Exam preparation becomes easier when the syllabus is divided into manageable parts. Begin by checking the chapters included in the exam and marking the topics you understand well and the topics that need more practice.',
      'Make a revision calendar that leaves time for every subject. Use your textbook, class notes, and practice questions together. If you get an answer wrong, review the method and try a similar question later.',
      'In the final days, focus on revision and practice rather than trying to learn every topic from scratch. Ask a teacher to explain doubts you cannot resolve on your own, and keep a regular sleep schedule.'
    ],
    bullets: ['List the syllabus and exam dates.', 'Practise writing answers within a time limit.', 'Review mistakes instead of only counting marks.', 'Ask for help as soon as a topic feels unclear.']
  },
  {
    slug: 'why-regular-practice-matters',
    title: 'Why Regular Practice Matters More Than Cramming',
    excerpt: 'Small, repeated practice sessions can help students understand concepts and remember them longer.',
    category: 'Student Life',
    date: 'October 2, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85',
    paragraphs: [
      'Reading a chapter can make it feel familiar, but solving questions helps you check whether you can actually use what you learned. Regular practice also shows which steps or ideas need more attention.',
      'Try to practise a little soon after class, then return to the same topic after a few days. Mixing short revision with new learning can make it easier to spot connections between concepts.',
      'Progress does not need to be perfect every day. Keep track of questions you can now solve independently and celebrate the effort you put into understanding difficult ideas.'
    ]
  },
  {
    slug: 'welcome-to-toppers-classes-learning-updates',
    title: 'Learning Updates from Topper’s Classes',
    excerpt: 'A place for students and parents to find learning tips, academic announcements, and useful updates.',
    category: 'Institute Updates',
    date: 'September 25, 2026',
    readTime: '2 min read',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85',
    paragraphs: [
      'This articles section is designed to bring helpful academic information together in one place for students and parents.',
      'Check back for study guidance, exam preparation ideas, student-development topics, and institute announcements. For time-sensitive notices or admission questions, please continue to use the existing contact and notice options on the website.',
      'We aim to keep articles clear and practical so families can quickly find the information they need.'
    ]
  }
];

const CATEGORIES = ['All articles', 'Education', 'Exams & Results', 'Student Life', 'Institute Updates'] as const;

function formatDate(date: string) {
  return date;
}

function ArticleCard({ article, onOpen }: { article: Article; onOpen: (slug: string) => void }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#071B3A]">
      <button type="button" onClick={() => onOpen(article.slug)} className="block w-full text-left">
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img src={article.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <span className="absolute left-4 top-4 rounded-full bg-[#071B3A]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F4E8C1]">{article.category}</span>
        </div>
        <div className="space-y-3 p-5 md:p-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5"><CalendarDays size={13} />{formatDate(article.date)}</span>
            <span className="inline-flex items-center gap-1.5"><Clock3 size={13} />{article.readTime}</span>
          </div>
          <h3 className="font-display text-xl font-bold leading-snug text-[#071B3A] transition group-hover:text-amber-600 dark:text-white dark:group-hover:text-[#D4AF37]">{article.title}</h3>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{article.excerpt}</p>
          <span className="inline-flex items-center gap-2 pt-1 text-sm font-bold text-amber-700 dark:text-[#D4AF37]">Read article <ArrowRight size={15} /></span>
        </div>
      </button>
    </article>
  );
}

export function ArticlesPage({ onOpenArticle }: { onOpenArticle: (slug: string) => void }) {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>('All articles');
  const [search, setSearch] = useState('');
  const featured = ARTICLES.find((article) => article.featured) ?? ARTICLES[0];
  const filteredArticles = useMemo(() => ARTICLES.filter((article) => {
    const matchesCategory = category === 'All articles' || article.category === category;
    const term = search.trim().toLowerCase();
    const matchesSearch = !term || `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(term);
    return matchesCategory && matchesSearch && !(article.slug === featured.slug && category === 'All articles' && !search.trim());
  }), [category, search, featured.slug]);

  return (
    <section className="min-h-[70vh] bg-slate-50 px-4 py-10 md:px-6 md:py-16 dark:bg-[#041024]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 border-b border-slate-200 pb-8 dark:border-white/10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-[#D4AF37]"><BookOpen size={14} /> The learning journal</div>
          <h1 className="font-display text-4xl font-black tracking-tight text-[#071B3A] md:text-6xl dark:text-white">Articles & <span className="text-amber-600 dark:text-[#D4AF37]">Updates</span></h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">Study advice, exam preparation, student development, and news from Topper’s Classes—all in one place.</p>
        </div>

        <div className="mb-8 grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
          <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-500 focus-within:border-amber-500 dark:border-white/10 dark:bg-white/5">
            <Search size={18} />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search articles..." className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-white" />
          </label>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {CATEGORIES.map((item) => (
              <button key={item} type="button" onClick={() => setCategory(item)} className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition ${category === item ? 'border-[#071B3A] bg-[#071B3A] text-white dark:border-[#D4AF37] dark:bg-[#D4AF37] dark:text-[#071B3A]' : 'border-slate-200 bg-white text-slate-600 hover:border-amber-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300'}`}>{item}</button>
            ))}
          </div>
        </div>

        {category === 'All articles' && !search.trim() && (
          <div className="mb-12 grid overflow-hidden rounded-3xl bg-[#071B3A] shadow-xl md:grid-cols-2">
            <button type="button" onClick={() => onOpenArticle(featured.slug)} className="relative min-h-64 overflow-hidden text-left">
              <img src={featured.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041024]/90 via-[#041024]/20 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-[#D4AF37] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#071B3A]">Featured story</span>
            </button>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <div className="mb-3 flex items-center gap-3 text-xs text-[#F4E8C1]"><span>{featured.category}</span><span>•</span><span>{featured.readTime}</span></div>
              <h2 className="font-display text-2xl font-black leading-tight text-white md:text-4xl">{featured.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{featured.excerpt}</p>
              <button type="button" onClick={() => onOpenArticle(featured.slug)} className="btn-gold mt-6 inline-flex w-fit items-center gap-2 px-5 py-3 text-sm">Read featured article <ArrowRight size={16} /></button>
            </div>
          </div>
        )}

        <div className="mb-5 flex items-end justify-between gap-4">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-[#D4AF37]">Explore & learn</p><h2 className="mt-1 font-display text-2xl font-bold text-[#071B3A] dark:text-white">{search.trim() || category !== 'All articles' ? 'Matching articles' : 'Latest articles'}</h2></div>
          <span className="text-xs text-slate-500 dark:text-slate-400">{filteredArticles.length + (category === 'All articles' && !search.trim() ? 1 : 0)} articles</span>
        </div>
        {filteredArticles.length === 0 && (category !== 'All articles' || search.trim()) ? (
          <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-14 text-center dark:border-white/15"><Search className="mx-auto mb-3 text-slate-400" size={28} /><h3 className="font-display text-lg font-bold text-[#071B3A] dark:text-white">No articles found</h3><p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Try another search term or choose a different category.</p></div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(category === 'All articles' && !search.trim() ? [featured, ...filteredArticles] : ARTICLES.filter((article) => (category === 'All articles' || article.category === category) && (`${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(search.trim().toLowerCase())))).map((article) => <ArticleCard key={article.slug} article={article} onOpen={onOpenArticle} />)}
          </div>
        )}
        <p className="mt-10 text-center text-xs text-slate-500 dark:text-slate-400">New articles can be added to the ARTICLES list in <code>src/components/Articles.tsx</code>.</p>
      </div>
    </section>
  );
}

export function ArticleDetailPage({ slug, onBack, onOpenArticle }: { slug: string; onBack: () => void; onOpenArticle: (slug: string) => void }) {
  const article = ARTICLES.find((item) => item.slug === slug);
  if (!article) {
    return <section className="min-h-[60vh] px-4 py-20 text-center"><h1 className="font-display text-3xl font-bold text-[#071B3A] dark:text-white">Article not found</h1><p className="mt-3 text-slate-600 dark:text-slate-300">This article may have moved or the link may be incorrect.</p><button type="button" onClick={onBack} className="btn-gold mt-6 gap-2 px-5 py-3 text-sm"><ArrowLeft size={16} /> All articles</button></section>;
  }
  const related = ARTICLES.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 2);

  return (
    <article className="min-h-[70vh] bg-white px-4 py-8 md:px-6 md:py-12 dark:bg-[#041024]">
      <div className="mx-auto max-w-4xl">
        <button type="button" onClick={onBack} className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-amber-700 dark:text-slate-300 dark:hover:text-[#D4AF37]"><ArrowLeft size={16} /> Back to all articles</button>
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-[#D4AF37]"><span>{article.category}</span><span className="text-slate-300">/</span><span className="inline-flex items-center gap-1.5 font-medium normal-case tracking-normal text-slate-500 dark:text-slate-400"><CalendarDays size={13} />{article.date}</span><span className="inline-flex items-center gap-1.5 font-medium normal-case tracking-normal text-slate-500 dark:text-slate-400"><Clock3 size={13} />{article.readTime}</span></div>
        <h1 className="font-display text-3xl font-black leading-tight tracking-tight text-[#071B3A] md:text-5xl dark:text-white">{article.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{article.excerpt}</p>
        <div className="mt-8 aspect-[16/8] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800"><img src={article.image} alt="" className="h-full w-full object-cover" /></div>
        <div className="mx-auto max-w-3xl py-9">
          <div className="space-y-6 text-base leading-8 text-slate-700 dark:text-slate-200">{article.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
          {article.bullets && <div className="my-8 rounded-2xl border border-amber-500/20 bg-amber-50 p-6 dark:bg-amber-500/5"><h2 className="font-display text-xl font-bold text-[#071B3A] dark:text-white">Quick takeaways</h2><ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-200">{article.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div>}
          <div className="mt-10 border-t border-slate-200 pt-6 dark:border-white/10"><p className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-[#D4AF37]">From Topper’s Classes</p><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">Helpful learning information for students and families in Gorakhpur.</p></div>
        </div>
        {related.length > 0 && <section className="border-t border-slate-200 pt-8 dark:border-white/10"><h2 className="mb-5 font-display text-2xl font-bold text-[#071B3A] dark:text-white">More in {article.category}</h2><div className="grid gap-5 md:grid-cols-2">{related.map((item) => <ArticleCard key={item.slug} article={item} onOpen={onOpenArticle} />)}</div></section>}
      </div>
    </article>
  );
}
