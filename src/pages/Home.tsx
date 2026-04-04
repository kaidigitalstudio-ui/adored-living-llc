import { Link } from 'react-router-dom'
import SectionHeader from '../components/ui/SectionHeader'
import CTABanner from '../components/ui/CTABanner'

const WHY_ITEMS = [
  {
    icon: '🤝',
    title: 'Intimate, Family Environment',
    desc: 'With a maximum of 6 residents, your loved one receives genuine individual attention — not just a bed in a crowd. Our caregivers know every resident\'s story, preferences, and needs.',
  },
  {
    icon: '🌱',
    title: 'Connected to Nature',
    desc: 'Our homes feature beautiful community gardens and inviting outdoor patios. Fresh air, greenery, and seasonal blooms are always close by — supporting both physical wellness and peace of mind.',
  },
  {
    icon: '💊',
    title: 'All-Inclusive, One Simple Rate',
    desc: 'No hidden fees, no surprise charges. All basic supplies, meals, housekeeping, medication management, and personal care are covered under one clear, cost-effective rate.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Owner-Involved Daily',
    desc: 'Our owners are hands-on, present every day, and personally invested in each resident\'s wellbeing. This isn\'t a corporate facility — it\'s a home run by people who truly care.',
  },
  {
    icon: '🍽️',
    title: 'Nourishing Home-Cooked Meals',
    desc: 'Three nutritious, delicious meals prepared fresh daily — including snacks and beverages — tailored to dietary needs and preferences so residents look forward to every meal.',
  },
  {
    icon: '🛡️',
    title: 'Safe, Licensed & Trusted',
    desc: 'Fully licensed by the State of Michigan with all health and safety standards met. Families can visit freely, and peace of mind comes standard with every aspect of our care.',
  },
]

const SERVICES = [
  {
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
    imgAlt: 'Fresh, colorful home-cooked meals',
    icon: '🍽️',
    title: 'Meals & Nutrition',
    desc: 'Three fresh, nutritious meals daily plus snacks — all dietary needs accommodated with care and attention.',
  },
  {
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    imgAlt: 'Caring professional assisting a resident',
    icon: '🤗',
    title: 'Personal Care Assistance',
    desc: 'Compassionate, dignified help with bathing, grooming, mobility, and daily living activities whenever needed.',
  },
  {
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
    imgAlt: 'Organized medication management',
    icon: '💊',
    title: 'Medication Management',
    desc: 'Secure medication administration following physician guidance, with accurate records and prescription support.',
  },
  {
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    imgAlt: 'Clean, bright residential home',
    icon: '🏠',
    title: 'Housing & Housekeeping',
    desc: 'Fully furnished private rooms with shared living spaces, plus routine cleaning, laundry, and all linens provided.',
  },
  {
    img: 'https://images.unsplash.com/photo-1609220136736-443140cfeaa8?w=600&q=80',
    imgAlt: 'Seniors enjoying social activities together',
    icon: '🌸',
    title: 'Companionship & Activities',
    desc: 'Meaningful social engagement, recreational activities, and emotional support to keep spirits bright every day.',
  },
  {
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    imgAlt: 'Beautiful community garden with blooming flowers',
    icon: '🌿',
    title: 'Community Gardens',
    desc: 'Enjoy our lush outdoor gardens and patios — peaceful spaces for relaxation, gentle activity, and connection with nature.',
  },
]

const TESTIMONIALS = [
  {
    quote: '"Moving mom into Adored Living was the best decision our family ever made. She has blossomed — she\'s happier, healthier, and she absolutely loves the garden. The staff treat her like their own family."',
    name: 'Sandra M.',
    role: 'Daughter of Resident',
    initial: 'S',
  },
  {
    quote: '"I toured several facilities before choosing Adored Living for my father. Nothing compared to the warmth here — it truly feels like a home. The owners are present, caring, and always communicate with us."',
    name: 'Robert K.',
    role: 'Son of Resident',
    initial: 'R',
  },
  {
    quote: '"The all-inclusive pricing was such a relief — no surprises or confusing bills. But more than that, my aunt is thriving. She loves the other residents, enjoys the meals, and sleeps peacefully every night."',
    name: 'Linda P.',
    role: 'Niece of Resident',
    initial: 'L',
  },
]

const LOCATIONS = [
  {
    id: 'rochester-hills',
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    imgAlt: 'Rochester Hills home exterior',
    badge: 'Rochester Hills',
    title: 'Rochester Hills Home',
    address: '185 E South Blvd, Rochester Hills, MI 48307',
    phone: '(248) 931-9009',
    phoneHref: 'tel:+12489319009',
    email: 'adoredlivingllc@gmail.com',
    feature: 'Community garden & outdoor patio',
  },
  {
    id: 'clarkston',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    imgAlt: 'Clarkston home exterior',
    badge: 'Clarkston',
    title: 'Clarkston Home',
    address: '5111 Heath Ave, Clarkston, MI 48346',
    phone: '(248) 931-9009',
    phoneHref: 'tel:+12489319009',
    email: 'adoredlivingllc@gmail.com',
    feature: 'Peaceful residential neighborhood',
  },
]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-bg" role="img" aria-label="Lush community garden in bloom" />
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow">Michigan's Home-Style Assisted Living</span>
            <h1 id="hero-heading">
              Where Every Day Feels<br />
              Like <em>Coming Home</em>
            </h1>
            <p className="hero-desc">
              A peaceful, family-like setting where compassionate caregivers support your loved one's
              independence — surrounded by beautiful community gardens and the warmth of a true home.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary btn-lg">Explore Our Care</Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Schedule a Visit</Link>
            </div>

            <div className="hero-trust" aria-label="Quick facts">
              {[
                { num: '6', label: 'Max Residents' },
                { num: '2', label: 'Michigan Locations' },
                { num: 'All‑Inclusive', label: 'Care & Services' },
                { num: 'Licensed', label: 'State of Michigan' },
              ].map(({ num, label }) => (
                <div className="trust-item" key={label}>
                  <span className="trust-number">{num}</span>
                  <span className="trust-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTRO BAND ===== */}
      <div className="intro-band">
        <div className="container">
          <div className="intro-band-inner">
            {[
              { icon: '🏡', text: 'Residential neighborhood setting' },
              { icon: '🌿', text: 'Community gardens & outdoor patios' },
              { icon: '❤️', text: 'Owner-operated, family-run care' },
              { icon: '✅', text: 'Michigan state licensed' },
            ].map(({ icon, text }) => (
              <div className="intro-pill" key={text}>
                <div className="pill-icon" aria-hidden="true">{icon}</div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== WHY ADORED ===== */}
      <section className="section" aria-labelledby="why-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Why Families Choose Us"
            title="A Different Kind of Care"
            description="We believe seniors deserve more than just assistance — they deserve a vibrant, joyful community where they are truly known and cherished."
            center
            id="why-heading"
          />
          <div className="why-grid" role="list">
            {WHY_ITEMS.map(({ icon, title, desc }) => (
              <div className="why-card" role="listitem" key={title}>
                <div className="why-icon" aria-hidden="true">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SPLIT ===== */}
      <section className="section section--alt" aria-labelledby="about-heading">
        <div className="container">
          <div className="grid-2">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80"
                alt="Caregiver gently holding hands with a senior resident in a sunny garden setting"
                loading="lazy"
              />
              <div className="about-badge">
                <div className="badge-icon" aria-hidden="true">🌿</div>
                <div className="badge-text">
                  <strong>Nature-Centered Living</strong>
                  <span>Gardens, patios &amp; fresh air — always</span>
                </div>
              </div>
            </div>

            <div className="about-content">
              <span className="eyebrow">Our Mission</span>
              <h2 id="about-heading">Care Built on Compassion, Dignity &amp; Respect</h2>
              <p>
                At Adored Living LLC, we operate two licensed residential care homes in Michigan — each
                designed to feel like exactly that: a home. We believe seniors shouldn't have to choose
                between independence and the support they need.
              </p>
              <p>
                Our residents are treated like family, because to us, they are. We love our residents and
                feel truly blessed to serve them and their families every single day.
              </p>

              <div className="values-list" role="list">
                {[
                  { icon: '💛', title: 'Compassion First', desc: 'Every interaction is guided by genuine warmth and empathy for each resident and their family.' },
                  { icon: '🌟', title: 'Dignity Always', desc: 'We support daily activities in ways that preserve independence and personal pride.' },
                  { icon: '🤲', title: 'Personalized Care', desc: 'No two residents are alike — our care plans are thoughtfully tailored to each person\'s unique needs.' },
                ].map(({ icon, title, desc }) => (
                  <div className="value-item" role="listitem" key={title}>
                    <div className="value-icon" aria-hidden="true">{icon}</div>
                    <p><strong>{title}</strong>{desc}</p>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn btn-primary">Learn Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <SectionHeader
            eyebrow="What We Offer"
            title="Comprehensive Care, Covered"
            description="From meals and medication to personal care and companionship, everything your loved one needs is thoughtfully provided."
            center
            id="services-heading"
          />
          <div className="services-grid" role="list">
            {SERVICES.map(({ img, imgAlt, icon, title, desc }) => (
              <article className="service-card" role="listitem" key={title}>
                <div
                  className="service-card-img"
                  style={{ backgroundImage: `url('${img}')` }}
                  role="img"
                  aria-label={imgAlt}
                />
                <div className="service-card-body">
                  <div className="service-icon" aria-hidden="true">{icon}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 48 }}>
            <Link to="/services" className="btn btn-primary btn-lg">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section" aria-labelledby="testimonials-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Family Stories"
            title="Voices of Those We Serve"
            description="The trust families place in us is the greatest honor we know. Here is what they say about life at Adored Living."
            center
            id="testimonials-heading"
          />
          <div className="testimonials-grid" role="list">
            {TESTIMONIALS.map(({ quote, name, role, initial }) => (
              <article className="testimonial-card" role="listitem" key={name}>
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p className="testimonial-text">{quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar" aria-hidden="true">{initial}</div>
                  <div className="author-info">
                    <strong>{name}</strong>
                    <span>{role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATIONS PREVIEW ===== */}
      <section className="section" aria-labelledby="locations-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Our Homes"
            title="Two Beautiful Michigan Locations"
            description="Serving the Rochester Hills and Clarkston communities with the same warm, personalized care at each home."
            center
            id="locations-heading"
          />
          <div className="locations-grid" role="list">
            {LOCATIONS.map(({ id, img, imgAlt, badge, title, address, phone, phoneHref, email, feature }) => (
              <article className="location-card" role="listitem" key={id}>
                <div
                  className="location-img"
                  style={{ backgroundImage: `url('${img}')` }}
                  role="img"
                  aria-label={imgAlt}
                >
                  <span className="location-badge">{badge}</span>
                </div>
                <div className="location-body">
                  <h3>{title}</h3>
                  <div className="location-address">
                    <span aria-hidden="true">📍</span>
                    <span>{address}</span>
                  </div>
                  <div className="location-details">
                    <div className="loc-detail">
                      <div className="detail-icon" aria-hidden="true">📞</div>
                      <a href={phoneHref}>{phone}</a>
                    </div>
                    <div className="loc-detail">
                      <div className="detail-icon" aria-hidden="true">✉️</div>
                      <a href={`mailto:${email}`}>{email}</a>
                    </div>
                    <div className="loc-detail">
                      <div className="detail-icon" aria-hidden="true">🌿</div>
                      <span>{feature}</span>
                    </div>
                  </div>
                  <Link to={`/locations#${id}`} className="btn btn-primary">Learn More</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTABanner
        eyebrow="Take the Next Step"
        title="We'd Love to Welcome Your Family"
        description="Schedule a personal tour, ask questions, or simply talk through your loved one's needs. We're here to help — with no pressure and all the warmth you'd expect."
        primaryLabel="Schedule a Tour"
        primaryTo="/contact"
        secondaryLabel="📞 Call Us Today"
        secondaryHref="tel:+12489319009"
      />
    </>
  )
}
