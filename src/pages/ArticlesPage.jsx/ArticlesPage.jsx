import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import NavSm from '../components/NavSm';
import Footer from '../components/Footer';

const articles = [
  {
    category: 'Ideas & Identity',
    date: 'Coming soon',
    title: 'The courage to create from our own truth',
    excerpt:
      'Placeholder copy for a reflection on original thought, creative confidence, and the ideas that help us see ourselves anew.',
    image: '/assets/imgs/about/echoes.jpg',
    imageAlt: 'A visual study of African history and influence',
  },
  {
    category: 'Leadership',
    date: 'Coming soon',
    title: 'Leadership begins with a different question',
    excerpt:
      'Placeholder copy for a thoughtful look at the questions, choices, and responsibilities that shape a new generation of leaders.',
    image: '/assets/imgs/leadership/awakenings.png',
    imageAlt: 'A visual from the Awakenings leadership series',
  },
  {
    category: 'Culture & Legacy',
    date: 'Coming soon',
    title: 'What we choose to carry forward',
    excerpt:
      'Placeholder copy for a story about living heritage, shared memory, and building a legacy with intention.',
    image: '/assets/imgs/movement/custodians_new.jpg',
    imageAlt: 'Community members gathered in conversation',
  },
];

const categories = ['All articles', 'Ideas & Identity', 'Leadership', 'Culture & Legacy'];

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState('All articles');
  const visibleArticles = activeCategory === 'All articles'
    ? articles
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="articles-page">
      <div className="hidden md:block">
        <Navbar isDark />
      </div>
      <div className="md:hidden">
        <NavSm isDark />
      </div>

      <main>
        <header className="articles-intro">
          <p className="articles-eyebrow">Ideas. Identity. Imagination.</p>
          <h1 className="articles-title">The <em>Articles</em></h1>
          <p className="articles-lede">
            A space for the ideas, stories, and conversations shaping the Africa we are becoming.
          </p>
        </header>

        {/* <section className="articles-feature" aria-labelledby="featured-article-title">
          <div className="articles-feature-copy">
            <p className="articles-eyebrow">A note from the journal</p>
            <h2 id="featured-article-title">A return to what is possible</h2>
            <p>
              Placeholder text for a featured article. Here, we will share perspectives on
              originality, African possibility, and the work of imagining a future on our own terms.
            </p>
            <span className="articles-coming-soon">Featured story coming soon</span>
          </div>
          <div className="articles-feature-image">
            <img src="/assets/imgs/about/vanguard.jpg" alt="A portrait from the Africa's Return story" />
            <span className="articles-image-caption">Ideas for a future of our own making</span>
          </div>
        </section> */}

        <section className="articles-library" id="articles" aria-labelledby="articles-library-title">
          <div className="articles-library-heading">
            <div>
              <p className="articles-eyebrow">From the journal</p>
              <h2 id="articles-library-title">Stories &amp; perspectives</h2>
            </div>
            <p>Thoughtful words for a people moving forward with purpose.</p>
          </div>

          <div className="articles-filters" aria-label="Filter articles by topic">
            {categories.map(category => (
              <button
                key={category}
                type="button"
                className={`articles-filter${activeCategory === category ? ' is-active' : ''}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="articles-grid" aria-live="polite">
            {visibleArticles.map(article => (
              <article className="article-card" key={article.title}>
                <div className="article-card-image">
                  <img src={article.image} alt={article.imageAlt} loading="lazy" />
                  <span>{article.category}</span>
                </div>
                <div className="article-card-copy">
                  <p className="article-card-date">{article.date}</p>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer color />
    </div>
  );
}
