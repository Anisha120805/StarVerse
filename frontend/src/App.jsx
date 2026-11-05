
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Camera,
  ChevronDown,
  Film,
  Home as HomeIcon,
  MapPin,
  Menu,
  Play,
  Rocket,
  Sparkles,
  Star,
  User,
  X,
  GraduationCap,
  Heart,
  Telescope,
} from "lucide-react";

import "./App.css";

/* ==================================================
   MOVIE POSTER IMAGES
   Put these files inside:
   public/movies/
================================================== */

const movieImages = {
  "Kai Po Che!": "/movies/kai-po-che.jpg",
  "Shuddh Desi Romance": "/movies/shuddh-desi-romance.jpg",
  "PK": "/movies/pk.jpg",
  "Detective Byomkesh Bakshy!":
    "/movies/detective-byomkesh-bakshy.jpg",
  "M.S. Dhoni: The Untold Story": "/movies/ms-dhoni.jpg",
  "Raabta": "/movies/raabta.jpg",
  "Kedarnath": "/movies/kedarnath.jpg",
  "Sonchiriya": "/movies/sonchiriya.jpg",
  "Chhichhore": "/movies/chhichhore.jpg",
  "Drive": "/movies/drive.jpg",
  "Dil Bechara": "/movies/dil-bechara.jpg",
};


/* ==================================================
   FALLBACK PHOTOS
================================================== */

const photos = [
  "https://tse2.mm.bing.net/th/id/OIP.KxPbsp8qS4ryNl4ELA8PDgHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",

  "https://c.ndtvimg.com/2023-07/idoespag_sushant-singh-rajput_625x300_04_July_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",

  "https://images.news9live.com/wp-content/uploads/2025/01/1-11.jpg",

  "https://i.pinimg.com/736x/4d/9b/5f/4d9b5fbd307d1e452ea7c32c1d7b3d72.jpg",

  "https://i.pinimg.com/736x/47/2a/85/472a8573a533936f527e15b4d30e104e.jpg",
];


/* ==================================================
   APP
================================================== */

function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (newPage) => {
    setPage(newPage);
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="starverse">

      {/* =========================
          HEADER
      ========================= */}

      <header className="topbar">

        <div
          className="brand"
          onClick={() => navigate("home")}
        >
          <div className="brand-mark">
            <Sparkles size={18} />
          </div>

          <div>
            <strong>STAR</strong>
            <span>VERSE</span>
          </div>
        </div>


        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>

          <button
            className={page === "home" ? "active" : ""}
            onClick={() => navigate("home")}
          >
            <HomeIcon size={16} />
            Home
          </button>


          <button
            className={page === "profile" ? "active" : ""}
            onClick={() => navigate("profile")}
          >
            <User size={16} />
            Profile
          </button>


          <button
            className={page === "career" ? "active" : ""}
            onClick={() => navigate("career")}
          >
            <Rocket size={16} />
            Career
          </button>


          <button
            className={page === "movies" ? "active" : ""}
            onClick={() => navigate("movies")}
          >
            <Film size={16} />
            Movies
          </button>


          <button
            className={page === "gallery" ? "active" : ""}
            onClick={() => navigate("gallery")}
          >
            <Camera size={16} />
            Gallery
          </button>

        </nav>


        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </header>


      {/* =========================
          PAGES
      ========================= */}

      {page === "home" && (
        <HomePage navigate={navigate} />
      )}

      {page === "profile" && (
        <ProfilePage navigate={navigate} />
      )}

      {page === "career" && (
        <CareerPage navigate={navigate} />
      )}

      {page === "movies" && (
        <MoviesPage navigate={navigate} />
      )}

      {page === "gallery" && (
        <GalleryPage navigate={navigate} />
      )}


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="footer-brand">

          <div className="brand-mark">
            <Sparkles size={17} />
          </div>

          <div>
            <strong>STARVERSE</strong>

            <p>
              A cinematic tribute to Sushant Singh Rajput.
            </p>
          </div>

        </div>


        <div className="footer-line"></div>


        <div className="footer-end">

          <span>LEGACY</span>

          <Star
            size={16}
            fill="currentColor"
          />

          <span>REMEMBERED</span>

        </div>

      </footer>

    </div>
  );
}


/* ==================================================
   BACK BUTTON
================================================== */

function BackButton({
  navigate,
  text = "Back to Home",
}) {
  return (
    <button
      className="back-button"
      onClick={() => navigate("home")}
    >
      <ArrowLeft size={17} />
      {text}
    </button>
  );
}


/* ==================================================
   HOME PAGE
================================================== */

function HomePage({ navigate }) {
  return (
    <main>

      <section className="hero">

        <div className="hero-bg"></div>
        <div className="hero-glow"></div>
        <div className="hero-noise"></div>


        <div className="hero-content">

          <div className="hero-kicker">
            <span></span>
            THE STARVERSE COLLECTION
            <span></span>
          </div>


          <p className="hero-mini">
            ACTOR • DREAMER • EXPLORER
          </p>


          <h1>
            Sushant
            <br />
            <span>Singh Rajput</span>
          </h1>


          <div className="hero-divider">
            <i></i>

            <Star
              size={17}
              fill="currentColor"
            />

            <i></i>
          </div>


          <p className="hero-description">
            A cinematic journey through the life,
            <br />
            career, characters and dreams of a remarkable star.
          </p>


          <div className="hero-actions">

            <button
              className="gold-button"
              onClick={() => navigate("profile")}
            >
              ENTER HIS STORY
              <ArrowRight size={18} />
            </button>


            <button
              className="outline-button"
              onClick={() => navigate("movies")}
            >
              <Play
                size={16}
                fill="currentColor"
              />
              EXPLORE FILMS
            </button>

          </div>

        </div>


        <div className="hero-bottom">

          <div>
            <span>1986</span>
            <small>THE BEGINNING</small>
          </div>

          <div className="hero-line"></div>

          <div>
            <span>2020</span>
            <small>A LEGACY</small>
          </div>

        </div>


        <div className="scroll-indicator">
          <span>DISCOVER</span>
          <ChevronDown size={17} />
        </div>

      </section>


      <section className="luxury-section intro">

        <SectionTitle
          number="01"
          label="THE PERSON"
          title="Beyond The Spotlight"
          subtitle="There was much more to him than the characters he played."
        />


        <div className="intro-layout">

          <div className="intro-image-wrap">

            <div className="gold-frame"></div>

            <img
              src={photos[1]}
              alt="Sushant Singh Rajput"
            />

            <div className="image-label">
              <span>01</span>
              <strong>THE STAR</strong>
            </div>

          </div>


          <div className="intro-copy">

            <span className="gold-small">
              SUSHANT SINGH RAJPUT
            </span>


            <h2>
              A curious mind
              <br />
              <em>with limitless dreams.</em>
            </h2>


            <p>
              Sushant Singh Rajput was an Indian actor whose
              journey from television to Hindi cinema captured
              the imagination of millions.
            </p>


            <p>
              His interests extended beyond acting. He was
              fascinated by science, astronomy, technology,
              learning and the mysteries of the universe.
            </p>


            <button
              className="gold-text-button"
              onClick={() => navigate("profile")}
            >
              READ HIS COMPLETE STORY
              <ArrowRight size={17} />
            </button>

          </div>

        </div>

      </section>


      <section className="stats-section">

        <div className="stat">
          <strong>1986</strong>
          <span>BORN</span>
        </div>

        <div className="stat">
          <strong>2008</strong>
          <span>ACTING JOURNEY</span>
        </div>

        <div className="stat">
          <strong>11</strong>
          <span>MAJOR FILMS</span>
        </div>

        <div className="stat">
          <strong>∞</strong>
          <span>LEGACY</span>
        </div>

      </section>


      <section className="luxury-section explore">

        <SectionTitle
          number="02"
          label="EXPLORE"
          title="Enter His Universe"
          subtitle="Choose a chapter and discover more."
        />


        <div className="explore-grid">

          <ExploreCard
            number="01"
            title="PROFILE"
            text="Life, education, personality and passions."
            image={photos[1]}
            icon={<User />}
            onClick={() => navigate("profile")}
          />


          <ExploreCard
            number="02"
            title="CAREER"
            text="From television beginnings to cinematic milestones."
            image={photos[2]}
            icon={<Rocket />}
            onClick={() => navigate("career")}
          />


          <ExploreCard
            number="03"
            title="MOVIES"
            text="Characters, films and unforgettable performances."
            image={photos[3]}
            icon={<Film />}
            onClick={() => navigate("movies")}
          />


          <ExploreCard
            number="04"
            title="GALLERY"
            text="A collection of memorable visual moments."
            image={photos[4]}
            icon={<Camera />}
            onClick={() => navigate("gallery")}
          />

        </div>

      </section>


      <section className="quote-banner">

        <div className="quote-stars">
          ✦ ✦ ✦
        </div>

        <p>
          SOME STARS SHINE ON SCREEN.
          <br />
          <span>SOME REMAIN IN THE HEART.</span>
        </p>

        <small>— STARVERSE</small>

      </section>

    </main>
  );
}


/* ==================================================
   SECTION TITLE
================================================== */

function SectionTitle({
  number,
  label,
  title,
  subtitle,
}) {
  return (
    <div className="section-title">

      <div className="section-number">
        {number}
      </div>

      <div>

        <span>{label}</span>

        <h2>{title}</h2>

        <p>{subtitle}</p>

      </div>

    </div>
  );
}


/* ==================================================
   EXPLORE CARD
================================================== */

function ExploreCard({
  number,
  title,
  text,
  image,
  icon,
  onClick,
}) {
  return (
    <button
      className="explore-card"
      onClick={onClick}
    >

      <img
        src={image}
        alt={title}
      />

      <div className="card-dark"></div>

      <div className="explore-number">
        {number}
      </div>

      <div className="explore-icon">
        {icon}
      </div>

      <div className="explore-info">

        <span>DISCOVER</span>

        <h3>{title}</h3>

        <p>{text}</p>

        <div className="explore-arrow">
          <ArrowRight size={17} />
        </div>

      </div>

    </button>
  );
}


/* ==================================================
   PROFILE PAGE
================================================== */

function ProfilePage({ navigate }) {
  return (
    <main className="inner-page">

      <div className="page-hero profile-hero">

        <BackButton navigate={navigate} />

        <div className="page-title">

          <span>01 / PROFILE</span>

          <h1>
            The Person
            <br />
            <em>Behind The Star</em>
          </h1>

          <p>
            Actor. Dreamer. Explorer.
          </p>

        </div>

      </div>


      <section className="profile-main luxury-section">

        <div className="profile-photo">

          <img
            src={photos[1]}
            alt="Sushant Singh Rajput"
          />

          <div className="photo-corner top"></div>
          <div className="photo-corner bottom"></div>

        </div>


        <div className="profile-details">

          <span className="gold-small">
            THE ESSENTIALS
          </span>


          <h2>
            A life driven by
            <br />
            <em>curiosity & dreams.</em>
          </h2>


          <p>
            Sushant Singh Rajput was born on 21 January 1986
            in Patna, Bihar. He developed an interest in
            engineering, science and technology before
            eventually finding his path in performing arts.
          </p>


          <p>
            His transition from television to Bollywood
            demonstrated his determination to build a career
            on his own terms.
          </p>


          <div className="details-grid">

            <Info
              icon={<Calendar />}
              label="Born"
              value="21 January 1986"
            />

            <Info
              icon={<MapPin />}
              label="Birthplace"
              value="Patna, Bihar"
            />

            <Info
              icon={<User />}
              label="Profession"
              value="Actor"
            />

            <Info
              icon={<GraduationCap />}
              label="Education"
              value="Engineering Studies"
            />

          </div>

        </div>

      </section>


      <section className="profile-cards luxury-section">

        <div className="mini-card">
          <Telescope />

          <span>PASSION</span>

          <h3>Science & Astronomy</h3>

          <p>
            His curiosity extended far beyond cinema into
            science, space and the universe.
          </p>
        </div>


        <div className="mini-card">

          <Rocket />

          <span>SPIRIT</span>

          <h3>Dream Driven</h3>

          <p>
            His journey reflected ambition, persistence and
            a willingness to chase unconventional dreams.
          </p>

        </div>


        <div className="mini-card">

          <Heart />

          <span>LEGACY</span>

          <h3>Remembered</h3>

          <p>
            His performances continue to be remembered by
            audiences around the world.
          </p>

        </div>

      </section>

    </main>
  );
}


/* ==================================================
   INFO
================================================== */

function Info({
  icon,
  label,
  value,
}) {
  return (
    <div className="info-box">

      <div className="info-icon">
        {icon}
      </div>

      <div>

        <span>{label}</span>

        <strong>{value}</strong>

      </div>

    </div>
  );
}


/* ==================================================
   CAREER PAGE
================================================== */

function CareerPage({ navigate }) {

  const [career, setCareer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    fetch("http://localhost:5000/api/career")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch career data");
        }

        return response.json();

      })

      .then((result) => {

        if (result.success && Array.isArray(result.data)) {
          setCareer(result.data);
        } else {
          setError("Career data could not be loaded.");
        }

      })

      .catch((err) => {

        console.error("Career API Error:", err);

        setError(
          "Unable to connect to backend. Make sure backend server is running."
        );

      })

      .finally(() => {
        setLoading(false);
      });

  }, []);


  return (
    <main className="inner-page">

      <div className="page-hero career-hero">

        <BackButton navigate={navigate} />

        <div className="page-title">

          <span>02 / CAREER</span>

          <h1>
            The Journey
            <br />
            <em>Through Time</em>
          </h1>

          <p>
            Every chapter became part of the story.
          </p>

        </div>

      </div>


      <section className="timeline-section luxury-section">

        <div className="timeline-line"></div>


        {loading && (
          <p>Loading career timeline...</p>
        )}


        {!loading && error && (
          <p>{error}</p>
        )}


        {!loading &&
          !error &&
          career.length === 0 && (
            <p>No career data found.</p>
          )}


        {!loading &&
          !error &&
          career.map((item, index) => (

            <div
              className="timeline-row"
              key={item.timeline_id || index}
            >

              <div className="timeline-year">
                {item.year || ""}
              </div>

              <div className="timeline-marker">
                <Rocket size={17} />
              </div>

              <div className="timeline-content">

                <span>
                  CHAPTER{" "}
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2>
                  {item.title || "Career Chapter"}
                </h2>

                <p>
                  {item.description || ""}
                </p>

              </div>

            </div>

          ))}

      </section>

    </main>
  );
}


/* ==================================================
   MOVIES PAGE
================================================== */

function MoviesPage({ navigate }) {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {

    fetch("http://localhost:5000/api/movies")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        return response.json();

      })

      .then((result) => {

        console.log("Movies API Response:", result);

        if (
          result.success &&
          Array.isArray(result.data)
        ) {

          /*
             IMPORTANT:
             Clean and normalize every movie.
          */

          const cleanedMovies = result.data.map(
            (movie) => {

              const title =
                movie.title ||
                movie.movie_name ||
                "";

              return {
                ...movie,

                title: title,

                year:
                  movie.year ||
                  movie.release_year ||
                  "",

                role:
                  movie.role ||
                  movie.role_name ||
                  "",

                genre:
                  movie.genre ||
                  "",

                description:
                  movie.description ||
                  "",

                rating:
                  movie.rating !== null &&
                  movie.rating !== undefined
                    ? movie.rating
                    : "",

                image:
                  movie.image ||
                  movie.poster_image ||
                  movieImages[title] ||
                  "",
              };

            }
          );

          setMovies(cleanedMovies);

        } else {

          setError(
            "Movie data could not be loaded."
          );

        }

      })

      .catch((err) => {

        console.error(
          "Movies API Error:",
          err
        );

        setError(
          "Unable to connect to backend. Make sure backend server is running."
        );

      })

      .finally(() => {

        setLoading(false);

      });

  }, []);


  /* ==================================================
     MOVIE DETAIL
  ================================================== */

  if (selectedMovie) {

    return (
      <MovieDetail
        movie={selectedMovie}
        onBack={() => setSelectedMovie(null)}
        navigate={navigate}
      />
    );

  }


  return (
    <main className="inner-page">

      {/* =========================
          MOVIE HERO
      ========================= */}

      <div className="page-hero movies-hero">

        <BackButton navigate={navigate} />

        <div className="page-title">

          <span>
            03 / FILMOGRAPHY
          </span>

          <h1>
            Stories
            <br />
            <em>He Brought Alive</em>
          </h1>

          <p>
            Characters that became unforgettable.
          </p>

        </div>

      </div>


      {/* =========================
          MOVIES SECTION
      ========================= */}

      <section className="movies-section luxury-section">

        <div className="movies-intro">

          <span>
            SELECT A FILM
          </span>

          <p>
            Tap any movie to enter its dedicated detail view.
          </p>

        </div>


        {/* LOADING */}

        {loading && (
          <div className="movie-status">
            <p>Loading movies...</p>
          </div>
        )}


        {/* ERROR */}

        {!loading && error && (
          <div className="movie-status">
            <p>{error}</p>
          </div>
        )}


        {/* EMPTY */}

        {!loading &&
          !error &&
          movies.length === 0 && (

            <div className="movie-status">
              <p>
                No movies available in database.
              </p>
            </div>

          )}


        {/* MOVIE CARDS */}

        {!loading &&
          !error &&
          movies.length > 0 && (

            <div className="movies-grid">

              {movies.map((movie, index) => {

                /*
                   Exact image lookup.
                */

                const movieImage =
                  movie.image ||
                  movieImages[movie.title] ||
                  "";


                return (

                  <button
                    className="movie-card"
                    key={movie.id || index}
                    onClick={() =>
                      setSelectedMovie(movie)
                    }
                  >

                    {/* POSTER */}

                    <div className="movie-poster">

                      {movieImage ? (

                        <img
                          src={movieImage}
                          alt={
                            movie.title ||
                            "Sushant Singh Rajput movie"
                          }
                          onError={(event) => {

                            /*
                              If image fails,
                              hide broken image.
                            */

                            event.currentTarget.style.display =
                              "none";

                          }}
                        />

                      ) : (

                        <div className="no-poster">

                          <Film size={35} />

                          <span>
                            NO POSTER
                          </span>

                        </div>

                      )}


                      <div className="poster-overlay"></div>


                      <span className="movie-index">

                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}

                      </span>


                      <div className="play-circle">

                        <Play
                          size={17}
                          fill="currentColor"
                        />

                      </div>

                    </div>


                    {/* MOVIE INFORMATION */}

                    <div className="movie-info">

                      <div className="movie-top">

                        <span>
                          {movie.year || "—"}
                        </span>

                        <span>

                          ★{" "}

                          {movie.rating !== "" &&
                          movie.rating !== null &&
                          movie.rating !== undefined
                            ? movie.rating
                            : "—"}

                        </span>

                      </div>


                      {/* MOVIE TITLE */}

                      <h3>

                        {movie.title ||
                          "Movie"}

                      </h3>


                      {/* CHARACTER */}

                      <p>

                        {movie.role ||
                          "Character"}

                      </p>


                      {/* GENRE */}

                      <small>

                        {movie.genre ||
                          "Drama"}

                      </small>

                    </div>

                  </button>

                );

              })}

            </div>

          )}

      </section>

    </main>
  );
}


/* ==================================================
   MOVIE DETAIL
================================================== */

function MovieDetail({
  movie,
  onBack,
  navigate,
}) {

  const movieImage =
    movie.image ||
    movieImages[movie.title] ||
    "";


  return (
    <main className="inner-page">

      {/* TOP BAR */}

      <div className="movie-detail-top">

        <button
          className="back-button"
          onClick={onBack}
        >

          <ArrowLeft size={17} />

          Back to Movies

        </button>


        <span>
          03 / FILMOGRAPHY /{" "}
          {movie.year || ""}
        </span>

      </div>


      {/* DETAIL */}

      <section className="movie-detail">

        {/* IMAGE */}

        <div className="movie-detail-image">

          {movieImage ? (

            <img
              src={movieImage}
              alt={
                movie.title ||
                "Sushant Singh Rajput movie"
              }
            />

          ) : (

            <div className="detail-no-image">

              <Film size={50} />

              <span>
                NO POSTER AVAILABLE
              </span>

            </div>

          )}


          <div className="detail-image-shine"></div>

        </div>


        {/* CONTENT */}

        <div className="movie-detail-copy">

          <span className="gold-small">

            {movie.year || ""}

            {" • "}

            {movie.genre || ""}

          </span>


          <h1>
            {movie.title || "Movie"}
          </h1>


          {/* CHARACTER */}

          <div className="movie-role">

            <span>
              CHARACTER
            </span>


            <strong>

              {movie.role ||
                "Character"}

            </strong>


            <p>

              {movie.description ||
                "A memorable performance by Sushant Singh Rajput."}

            </p>

          </div>


          {/* STATS */}

          <div className="detail-stats">

            <div>

              <span>
                YEAR
              </span>

              <strong>
                {movie.year || "—"}
              </strong>

            </div>


            <div>

              <span>
                RATING
              </span>

              <strong>

                ★{" "}

                {movie.rating !== "" &&
                movie.rating !== null &&
                movie.rating !== undefined
                  ? movie.rating
                  : "—"}

              </strong>

            </div>


            <div>

              <span>
                ROLE
              </span>

              <strong>
                {movie.role || "—"}
              </strong>

            </div>

          </div>


          {/* GALLERY */}

          <button
            className="gold-button"
            onClick={() => navigate("gallery")}
          >

            VIEW GALLERY

            <ArrowRight size={17} />

          </button>

        </div>

      </section>

    </main>
  );
}


/* ==================================================
   GALLERY PAGE
================================================== */

function GalleryPage({ navigate }) {

  const [selectedImage, setSelectedImage] =
    useState(null);


  return (
    <main className="inner-page">

      <div className="page-hero gallery-hero">

        <BackButton navigate={navigate} />

        <div className="page-title">

          <span>
            04 / VISUAL ARCHIVE
          </span>

          <h1>
            Moments
            <br />
            <em>Captured Forever</em>
          </h1>

          <p>
            A visual journey through memorable moments.
          </p>

        </div>

      </div>


      <section className="gallery-section luxury-section">

        <div className="gallery-heading">

          <span>
            THE COLLECTION
          </span>

          <p>
            Click any photograph to experience it in full view.
          </p>

        </div>


        <div className="gallery-grid">

          {photos.map((photo, index) => (

            <button
              className={`gallery-item gallery-${index + 1}`}
              key={photo}
              onClick={() =>
                setSelectedImage(photo)
              }
            >

              <img
                src={photo}
                alt={`Sushant Singh Rajput ${index + 1}`}
              />


              <div className="gallery-overlay">

                <Camera size={24} />

                <span>

                  VIEW{" "}

                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}

                </span>

              </div>

            </button>

          ))}

        </div>

      </section>


      {/* LIGHTBOX */}

      {selectedImage && (

        <div
          className="lightbox"
          onClick={() =>
            setSelectedImage(null)
          }
        >

          <button
            className="lightbox-close"
            onClick={() =>
              setSelectedImage(null)
            }
          >
            <X />
          </button>


          <img
            src={selectedImage}
            alt="Sushant Singh Rajput"
            onClick={(e) =>
              e.stopPropagation()
            }
          />

        </div>

      )}

    </main>
  );
}


export default App;