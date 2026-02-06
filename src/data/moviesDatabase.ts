export interface Movie {
  id: string;
  title: string;
  year: number;
  rating: number; // Out of 100
  genre: string[];
  director: string;
  cast: string[];
  posterSearch: string; // Search term for Unsplash
  reviews: {
    text: string;
    sentiment: 'positive' | 'negative' | 'neutral';
    author: string;
    source: string;
  }[];
  audienceScore: number;
  criticsScore: number;
  industry: 'Hollywood' | 'Bollywood';
}

export const moviesDatabase: Movie[] = [
  // ===== HOLLYWOOD BLOCKBUSTERS =====
  {
    id: 'inception',
    title: 'Inception',
    year: 2010,
    rating: 87,
    genre: ['Sci-Fi', 'Thriller', 'Action'],
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    posterSearch: 'inception movie poster',
    reviews: [
      { text: 'A masterpiece of modern cinema', sentiment: 'positive', author: 'Roger Ebert', source: 'Critics' },
      { text: 'Mind-bending and brilliant', sentiment: 'positive', author: 'Peter Travers', source: 'Critics' },
      { text: 'Absolutely stunning visual effects', sentiment: 'positive', author: 'John Smith', source: 'Audience' }
    ],
    audienceScore: 91,
    criticsScore: 87,
    industry: 'Hollywood'
  },
  {
    id: 'interstellar',
    title: 'Interstellar',
    year: 2014,
    rating: 86,
    genre: ['Sci-Fi', 'Drama', 'Adventure'],
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    posterSearch: 'interstellar movie space',
    reviews: [
      { text: 'Visually spectacular and emotionally powerful', sentiment: 'positive', author: 'James Cameron', source: 'Critics' },
      { text: 'A journey through space and time', sentiment: 'positive', author: 'Sarah Lee', source: 'Audience' },
      { text: 'Outstanding performances', sentiment: 'positive', author: 'Mark Davis', source: 'Critics' }
    ],
    audienceScore: 86,
    criticsScore: 73,
    industry: 'Hollywood'
  },
  {
    id: 'titanic',
    title: 'Titanic',
    year: 1997,
    rating: 88,
    genre: ['Romance', 'Drama', 'History'],
    director: 'James Cameron',
    cast: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane'],
    posterSearch: 'titanic movie ship',
    reviews: [
      { text: 'Epic romance and tragedy beautifully told', sentiment: 'positive', author: 'Lisa Anderson', source: 'Critics' },
      { text: 'Unforgettable love story', sentiment: 'positive', author: 'Mike Johnson', source: 'Audience' },
      { text: 'Masterful direction by James Cameron', sentiment: 'positive', author: 'Film Review', source: 'Critics' }
    ],
    audienceScore: 88,
    criticsScore: 88,
    industry: 'Hollywood'
  },
  {
    id: 'avatar',
    title: 'Avatar',
    year: 2009,
    rating: 82,
    genre: ['Sci-Fi', 'Action', 'Adventure'],
    director: 'James Cameron',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
    posterSearch: 'avatar movie pandora',
    reviews: [
      { text: 'Revolutionary visual effects', sentiment: 'positive', author: 'Tech Times', source: 'Critics' },
      { text: 'A new world brought to life', sentiment: 'positive', author: 'Emma Wilson', source: 'Audience' },
      { text: 'Groundbreaking cinema experience', sentiment: 'positive', author: 'David Chen', source: 'Critics' }
    ],
    audienceScore: 82,
    criticsScore: 82,
    industry: 'Hollywood'
  },
  {
    id: 'avengers-endgame',
    title: 'Avengers: Endgame',
    year: 2019,
    rating: 94,
    genre: ['Action', 'Sci-Fi', 'Adventure'],
    director: 'Russo Brothers',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    posterSearch: 'avengers endgame poster',
    reviews: [
      { text: 'Perfect conclusion to an epic saga', sentiment: 'positive', author: 'Marvel Fan', source: 'Audience' },
      { text: 'Emotionally satisfying and action-packed', sentiment: 'positive', author: 'Comic Review', source: 'Critics' },
      { text: 'A triumphant finale', sentiment: 'positive', author: 'Jane Cooper', source: 'Critics' }
    ],
    audienceScore: 90,
    criticsScore: 94,
    industry: 'Hollywood'
  },
  {
    id: 'avengers-infinity-war',
    title: 'Avengers: Infinity War',
    year: 2018,
    rating: 85,
    genre: ['Action', 'Sci-Fi', 'Adventure'],
    director: 'Russo Brothers',
    cast: ['Robert Downey Jr.', 'Chris Hemsworth', 'Mark Ruffalo'],
    posterSearch: 'avengers infinity war thanos',
    reviews: [
      { text: 'Epic scale and stunning action', sentiment: 'positive', author: 'Action Films', source: 'Critics' },
      { text: 'Best Marvel movie yet', sentiment: 'positive', author: 'Tom Harris', source: 'Audience' },
      { text: 'Thanos is an incredible villain', sentiment: 'positive', author: 'Character Study', source: 'Critics' }
    ],
    audienceScore: 91,
    criticsScore: 85,
    industry: 'Hollywood'
  },
  {
    id: 'the-dark-knight',
    title: 'The Dark Knight',
    year: 2008,
    rating: 94,
    genre: ['Action', 'Crime', 'Drama'],
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    posterSearch: 'dark knight batman joker',
    reviews: [
      { text: 'Heath Ledger delivers a legendary performance', sentiment: 'positive', author: 'Oscar Review', source: 'Critics' },
      { text: 'The greatest superhero film ever made', sentiment: 'positive', author: 'Batman Fans', source: 'Audience' },
      { text: 'Dark, intense, and brilliant', sentiment: 'positive', author: 'Cinema Today', source: 'Critics' }
    ],
    audienceScore: 94,
    criticsScore: 94,
    industry: 'Hollywood'
  },
  {
    id: 'the-shawshank-redemption',
    title: 'The Shawshank Redemption',
    year: 1994,
    rating: 91,
    genre: ['Drama'],
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman'],
    posterSearch: 'shawshank redemption prison',
    reviews: [
      { text: 'One of the greatest films ever made', sentiment: 'positive', author: 'IMDB Top', source: 'Audience' },
      { text: 'Powerful story of hope and friendship', sentiment: 'positive', author: 'Classic Films', source: 'Critics' },
      { text: 'Morgan Freeman at his finest', sentiment: 'positive', author: 'Actor\'s Guild', source: 'Critics' }
    ],
    audienceScore: 98,
    criticsScore: 91,
    industry: 'Hollywood'
  },
  {
    id: 'the-godfather',
    title: 'The Godfather',
    year: 1972,
    rating: 97,
    genre: ['Crime', 'Drama'],
    director: 'Francis Ford Coppola',
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    posterSearch: 'godfather movie poster',
    reviews: [
      { text: 'The definitive crime saga', sentiment: 'positive', author: 'Classic Cinema', source: 'Critics' },
      { text: 'Perfect in every aspect', sentiment: 'positive', author: 'Film Institute', source: 'Critics' },
      { text: 'Brando\'s most iconic role', sentiment: 'positive', author: 'Legacy Review', source: 'Audience' }
    ],
    audienceScore: 98,
    criticsScore: 97,
    industry: 'Hollywood'
  },
  {
    id: 'pulp-fiction',
    title: 'Pulp Fiction',
    year: 1994,
    rating: 92,
    genre: ['Crime', 'Drama'],
    director: 'Quentin Tarantino',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    posterSearch: 'pulp fiction poster',
    reviews: [
      { text: 'Tarantino\'s masterpiece', sentiment: 'positive', author: 'Indie Films', source: 'Critics' },
      { text: 'Revolutionary storytelling', sentiment: 'positive', author: 'Screenplay Awards', source: 'Critics' },
      { text: 'Unforgettable dialogue and scenes', sentiment: 'positive', author: 'Movie Buff', source: 'Audience' }
    ],
    audienceScore: 96,
    criticsScore: 92,
    industry: 'Hollywood'
  },
  {
    id: 'forrest-gump',
    title: 'Forrest Gump',
    year: 1994,
    rating: 71,
    genre: ['Drama', 'Romance'],
    director: 'Robert Zemeckis',
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    posterSearch: 'forrest gump bench',
    reviews: [
      { text: 'Tom Hanks delivers an Oscar-worthy performance', sentiment: 'positive', author: 'Academy Review', source: 'Critics' },
      { text: 'Heartwarming and inspiring', sentiment: 'positive', author: 'Family Films', source: 'Audience' },
      { text: 'A journey through American history', sentiment: 'positive', author: 'Historical Cinema', source: 'Critics' }
    ],
    audienceScore: 95,
    criticsScore: 71,
    industry: 'Hollywood'
  },
  {
    id: 'the-matrix',
    title: 'The Matrix',
    year: 1999,
    rating: 87,
    genre: ['Sci-Fi', 'Action'],
    director: 'Wachowski Sisters',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    posterSearch: 'matrix movie neo',
    reviews: [
      { text: 'Revolutionary action sequences', sentiment: 'positive', author: 'Action Cinema', source: 'Critics' },
      { text: 'Mind-blowing philosophical sci-fi', sentiment: 'positive', author: 'Sci-Fi Fans', source: 'Audience' },
      { text: 'Changed cinema forever', sentiment: 'positive', author: 'Film History', source: 'Critics' }
    ],
    audienceScore: 85,
    criticsScore: 87,
    industry: 'Hollywood'
  },
  {
    id: 'gladiator',
    title: 'Gladiator',
    year: 2000,
    rating: 77,
    genre: ['Action', 'Drama', 'History'],
    director: 'Ridley Scott',
    cast: ['Russell Crowe', 'Joaquin Phoenix'],
    posterSearch: 'gladiator movie rome',
    reviews: [
      { text: 'Epic historical drama', sentiment: 'positive', author: 'History Today', source: 'Critics' },
      { text: 'Russell Crowe commands the screen', sentiment: 'positive', author: 'Performance Review', source: 'Critics' },
      { text: 'Are you not entertained?', sentiment: 'positive', author: 'Action Fan', source: 'Audience' }
    ],
    audienceScore: 87,
    criticsScore: 77,
    industry: 'Hollywood'
  },
  {
    id: 'joker',
    title: 'Joker',
    year: 2019,
    rating: 68,
    genre: ['Crime', 'Drama', 'Thriller'],
    director: 'Todd Phillips',
    cast: ['Joaquin Phoenix', 'Robert De Niro'],
    posterSearch: 'joker movie joaquin phoenix',
    reviews: [
      { text: 'Joaquin Phoenix gives the performance of a lifetime', sentiment: 'positive', author: 'Oscar Watch', source: 'Critics' },
      { text: 'Dark and disturbing masterpiece', sentiment: 'positive', author: 'Thriller Fans', source: 'Audience' },
      { text: 'A character study unlike any other', sentiment: 'positive', author: 'Psychology Today', source: 'Critics' }
    ],
    audienceScore: 88,
    criticsScore: 68,
    industry: 'Hollywood'
  },
  {
    id: 'spider-man-no-way-home',
    title: 'Spider-Man: No Way Home',
    year: 2021,
    rating: 93,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    director: 'Jon Watts',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
    posterSearch: 'spider-man no way home',
    reviews: [
      { text: 'The ultimate Spider-Man experience', sentiment: 'positive', author: 'Marvel Universe', source: 'Audience' },
      { text: 'Nostalgic and emotionally powerful', sentiment: 'positive', author: 'Comic Books', source: 'Critics' },
      { text: 'Best Spider-Man film ever', sentiment: 'positive', author: 'Superhero Fans', source: 'Audience' }
    ],
    audienceScore: 98,
    criticsScore: 93,
    industry: 'Hollywood'
  },
  {
    id: 'top-gun-maverick',
    title: 'Top Gun: Maverick',
    year: 2022,
    rating: 96,
    genre: ['Action', 'Drama'],
    director: 'Joseph Kosinski',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
    posterSearch: 'top gun maverick fighter jet',
    reviews: [
      { text: 'A perfect action sequel', sentiment: 'positive', author: 'Action Films', source: 'Critics' },
      { text: 'Tom Cruise at his best', sentiment: 'positive', author: 'Star Power', source: 'Audience' },
      { text: 'Breathtaking aerial sequences', sentiment: 'positive', author: 'Aviation Weekly', source: 'Critics' }
    ],
    audienceScore: 99,
    criticsScore: 96,
    industry: 'Hollywood'
  },
  {
    id: 'parasite',
    title: 'Parasite',
    year: 2019,
    rating: 98,
    genre: ['Thriller', 'Drama'],
    director: 'Bong Joon-ho',
    cast: ['Song Kang-ho', 'Lee Sun-kyun'],
    posterSearch: 'parasite movie poster',
    reviews: [
      { text: 'A masterpiece of social commentary', sentiment: 'positive', author: 'World Cinema', source: 'Critics' },
      { text: 'Perfectly crafted thriller', sentiment: 'positive', author: 'International Films', source: 'Critics' },
      { text: 'Deserved every award', sentiment: 'positive', author: 'Awards Season', source: 'Audience' }
    ],
    audienceScore: 93,
    criticsScore: 98,
    industry: 'Hollywood'
  },
  {
    id: 'dune',
    title: 'Dune',
    year: 2021,
    rating: 83,
    genre: ['Sci-Fi', 'Adventure', 'Drama'],
    director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Zendaya', 'Oscar Isaac'],
    posterSearch: 'dune movie desert',
    reviews: [
      { text: 'Visually stunning sci-fi epic', sentiment: 'positive', author: 'Sci-Fi Chronicles', source: 'Critics' },
      { text: 'Denis Villeneuve brings Dune to life', sentiment: 'positive', author: 'Book Adaptations', source: 'Audience' },
      { text: 'Epic in every sense', sentiment: 'positive', author: 'Cinema Scope', source: 'Critics' }
    ],
    audienceScore: 90,
    criticsScore: 83,
    industry: 'Hollywood'
  },
  {
    id: 'oppenheimer',
    title: 'Oppenheimer',
    year: 2023,
    rating: 93,
    genre: ['Biography', 'Drama', 'History'],
    director: 'Christopher Nolan',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Robert Downey Jr.'],
    posterSearch: 'oppenheimer movie poster',
    reviews: [
      { text: 'Nolan\'s most mature work', sentiment: 'positive', author: 'Film Critics', source: 'Critics' },
      { text: 'Cillian Murphy delivers a tour de force', sentiment: 'positive', author: 'Oscar Buzz', source: 'Critics' },
      { text: 'A powerful historical epic', sentiment: 'positive', author: 'History Buffs', source: 'Audience' }
    ],
    audienceScore: 91,
    criticsScore: 93,
    industry: 'Hollywood'
  },
  {
    id: 'barbie',
    title: 'Barbie',
    year: 2023,
    rating: 88,
    genre: ['Comedy', 'Fantasy', 'Adventure'],
    director: 'Greta Gerwig',
    cast: ['Margot Robbie', 'Ryan Gosling'],
    posterSearch: 'barbie movie pink',
    reviews: [
      { text: 'Surprisingly deep and entertaining', sentiment: 'positive', author: 'Pop Culture', source: 'Critics' },
      { text: 'Ryan Gosling steals the show', sentiment: 'positive', author: 'Comedy Central', source: 'Audience' },
      { text: 'Smart, funny, and visually stunning', sentiment: 'positive', author: 'Modern Cinema', source: 'Critics' }
    ],
    audienceScore: 83,
    criticsScore: 88,
    industry: 'Hollywood'
  },
  {
    id: 'the-lion-king',
    title: 'The Lion King',
    year: 1994,
    rating: 93,
    genre: ['Animation', 'Adventure', 'Drama'],
    director: 'Roger Allers',
    cast: ['Matthew Broderick', 'Jeremy Irons', 'James Earl Jones'],
    posterSearch: 'lion king simba',
    reviews: [
      { text: 'Disney\'s crowning achievement', sentiment: 'positive', author: 'Animation Guild', source: 'Critics' },
      { text: 'Timeless classic for all ages', sentiment: 'positive', author: 'Family Entertainment', source: 'Audience' },
      { text: 'Unforgettable music and story', sentiment: 'positive', author: 'Soundtrack Review', source: 'Critics' }
    ],
    audienceScore: 93,
    criticsScore: 93,
    industry: 'Hollywood'
  },

  // ===== BOLLYWOOD BLOCKBUSTERS =====
  {
    id: '3-idiots',
    title: '3 Idiots',
    year: 2009,
    rating: 100,
    genre: ['Comedy', 'Drama'],
    director: 'Rajkumar Hirani',
    cast: ['Aamir Khan', 'R. Madhavan', 'Sharman Joshi'],
    posterSearch: 'three idiots bollywood',
    reviews: [
      { text: 'A perfect blend of comedy and social message', sentiment: 'positive', author: 'Bollywood Today', source: 'Critics' },
      { text: 'Aamir Khan at his finest', sentiment: 'positive', author: 'Indian Cinema', source: 'Audience' },
      { text: 'Changed Indian cinema forever', sentiment: 'positive', author: 'Film Companion', source: 'Critics' }
    ],
    audienceScore: 100,
    criticsScore: 100,
    industry: 'Bollywood'
  },
  {
    id: 'dangal',
    title: 'Dangal',
    year: 2016,
    rating: 97,
    genre: ['Biography', 'Drama', 'Sport'],
    director: 'Nitesh Tiwari',
    cast: ['Aamir Khan', 'Fatima Sana Shaikh', 'Sanya Malhotra'],
    posterSearch: 'dangal wrestling movie',
    reviews: [
      { text: 'Inspiring true story brilliantly told', sentiment: 'positive', author: 'Sports Weekly', source: 'Critics' },
      { text: 'Empowering and emotional', sentiment: 'positive', author: 'Women in Film', source: 'Audience' },
      { text: 'Aamir Khan\'s transformation is remarkable', sentiment: 'positive', author: 'Bollywood Life', source: 'Critics' }
    ],
    audienceScore: 97,
    criticsScore: 97,
    industry: 'Bollywood'
  },
  {
    id: 'pk',
    title: 'PK',
    year: 2014,
    rating: 86,
    genre: ['Comedy', 'Drama', 'Sci-Fi'],
    director: 'Rajkumar Hirani',
    cast: ['Aamir Khan', 'Anushka Sharma', 'Sushant Singh Rajput'],
    posterSearch: 'pk movie aamir khan',
    reviews: [
      { text: 'Bold social commentary wrapped in entertainment', sentiment: 'positive', author: 'Social Cinema', source: 'Critics' },
      { text: 'Thought-provoking and hilarious', sentiment: 'positive', author: 'Movie Goers', source: 'Audience' },
      { text: 'Hirani and Aamir magic again', sentiment: 'positive', author: 'Box Office India', source: 'Critics' }
    ],
    audienceScore: 86,
    criticsScore: 86,
    industry: 'Bollywood'
  },
  {
    id: 'baahubali-the-beginning',
    title: 'Baahubali: The Beginning',
    year: 2015,
    rating: 88,
    genre: ['Action', 'Adventure', 'Drama'],
    director: 'S. S. Rajamouli',
    cast: ['Prabhas', 'Rana Daggubati', 'Anushka Shetty'],
    posterSearch: 'baahubali movie epic',
    reviews: [
      { text: 'Epic Indian cinema at its grandest', sentiment: 'positive', author: 'Epic Films', source: 'Critics' },
      { text: 'Visually spectacular', sentiment: 'positive', author: 'VFX Today', source: 'Critics' },
      { text: 'Prabhas is phenomenal', sentiment: 'positive', author: 'South Indian Cinema', source: 'Audience' }
    ],
    audienceScore: 88,
    criticsScore: 88,
    industry: 'Bollywood'
  },
  {
    id: 'baahubali-2',
    title: 'Baahubali 2: The Conclusion',
    year: 2017,
    rating: 89,
    genre: ['Action', 'Adventure', 'Drama'],
    director: 'S. S. Rajamouli',
    cast: ['Prabhas', 'Rana Daggubati', 'Anushka Shetty'],
    posterSearch: 'baahubali 2 movie poster',
    reviews: [
      { text: 'A satisfying conclusion to the epic saga', sentiment: 'positive', author: 'Indian Express', source: 'Critics' },
      { text: 'Even better than the first', sentiment: 'positive', author: 'Film Fans', source: 'Audience' },
      { text: 'Indian cinema\'s biggest achievement', sentiment: 'positive', author: 'Trade Analyst', source: 'Critics' }
    ],
    audienceScore: 89,
    criticsScore: 89,
    industry: 'Bollywood'
  },
  {
    id: 'rrr',
    title: 'RRR',
    year: 2022,
    rating: 95,
    genre: ['Action', 'Drama'],
    director: 'S. S. Rajamouli',
    cast: ['N. T. Rama Rao Jr.', 'Ram Charan', 'Alia Bhatt'],
    posterSearch: 'rrr movie indian',
    reviews: [
      { text: 'A spectacular action extravaganza', sentiment: 'positive', author: 'Global Cinema', source: 'Critics' },
      { text: 'Rajamouli outdoes himself', sentiment: 'positive', author: 'Regional Films', source: 'Critics' },
      { text: 'The Naatu Naatu sequence is legendary', sentiment: 'positive', author: 'Music & Dance', source: 'Audience' }
    ],
    audienceScore: 95,
    criticsScore: 95,
    industry: 'Bollywood'
  },
  {
    id: 'pathaan',
    title: 'Pathaan',
    year: 2023,
    rating: 75,
    genre: ['Action', 'Thriller'],
    director: 'Siddharth Anand',
    cast: ['Shah Rukh Khan', 'Deepika Padukone', 'John Abraham'],
    posterSearch: 'pathaan movie shah rukh khan',
    reviews: [
      { text: 'SRK\'s action-packed comeback', sentiment: 'positive', author: 'Bollywood Hungama', source: 'Critics' },
      { text: 'High-octane entertainment', sentiment: 'positive', author: 'Action Lovers', source: 'Audience' },
      { text: 'Stylish and slick', sentiment: 'positive', author: 'Spy Thrillers', source: 'Critics' }
    ],
    audienceScore: 75,
    criticsScore: 75,
    industry: 'Bollywood'
  },
  {
    id: 'lagaan',
    title: 'Lagaan',
    year: 2001,
    rating: 95,
    genre: ['Drama', 'Musical', 'Sport'],
    director: 'Ashutosh Gowariker',
    cast: ['Aamir Khan', 'Gracy Singh', 'Rachel Shelley'],
    posterSearch: 'lagaan cricket bollywood',
    reviews: [
      { text: 'An Oscar-nominated masterpiece', sentiment: 'positive', author: 'Academy Watch', source: 'Critics' },
      { text: 'Cricket and patriotism perfectly blended', sentiment: 'positive', author: 'Sports Cinema', source: 'Audience' },
      { text: 'Epic storytelling', sentiment: 'positive', author: 'Period Films', source: 'Critics' }
    ],
    audienceScore: 95,
    criticsScore: 95,
    industry: 'Bollywood'
  },
  {
    id: 'taare-zameen-par',
    title: 'Taare Zameen Par',
    year: 2007,
    rating: 96,
    genre: ['Drama', 'Family'],
    director: 'Aamir Khan',
    cast: ['Aamir Khan', 'Darsheel Safary'],
    posterSearch: 'taare zameen par stars earth',
    reviews: [
      { text: 'A touching story about childhood and learning', sentiment: 'positive', author: 'Education Review', source: 'Critics' },
      { text: 'Will make you cry', sentiment: 'positive', author: 'Family Films', source: 'Audience' },
      { text: 'Aamir Khan\'s directorial brilliance', sentiment: 'positive', author: 'Director\'s Cut', source: 'Critics' }
    ],
    audienceScore: 96,
    criticsScore: 96,
    industry: 'Bollywood'
  },
  {
    id: 'gully-boy',
    title: 'Gully Boy',
    year: 2019,
    rating: 79,
    genre: ['Drama', 'Music'],
    director: 'Zoya Akhtar',
    cast: ['Ranveer Singh', 'Alia Bhatt'],
    posterSearch: 'gully boy rap movie',
    reviews: [
      { text: 'Ranveer Singh delivers a powerful performance', sentiment: 'positive', author: 'Performance Art', source: 'Critics' },
      { text: 'Hip-hop culture beautifully portrayed', sentiment: 'positive', author: 'Music Scene', source: 'Audience' },
      { text: 'Zoya Akhtar\'s best work', sentiment: 'positive', author: 'Women Directors', source: 'Critics' }
    ],
    audienceScore: 79,
    criticsScore: 79,
    industry: 'Bollywood'
  },
  {
    id: 'andhadhun',
    title: 'Andhadhun',
    year: 2018,
    rating: 92,
    genre: ['Thriller', 'Crime', 'Comedy'],
    director: 'Sriram Raghavan',
    cast: ['Ayushmann Khurrana', 'Tabu', 'Radhika Apte'],
    posterSearch: 'andhadhun blind pianist',
    reviews: [
      { text: 'A masterclass in thriller filmmaking', sentiment: 'positive', author: 'Thriller Central', source: 'Critics' },
      { text: 'Unpredictable and brilliant', sentiment: 'positive', author: 'Mystery Fans', source: 'Audience' },
      { text: 'Tabu is terrifying', sentiment: 'positive', author: 'Character Analysis', source: 'Critics' }
    ],
    audienceScore: 92,
    criticsScore: 92,
    industry: 'Bollywood'
  },
  {
    id: 'dilwale-dulhania-le-jayenge',
    title: 'Dilwale Dulhania Le Jayenge',
    year: 1995,
    rating: 89,
    genre: ['Romance', 'Drama', 'Musical'],
    director: 'Aditya Chopra',
    cast: ['Shah Rukh Khan', 'Kajol'],
    posterSearch: 'ddlj bollywood romance',
    reviews: [
      { text: 'The ultimate Bollywood romance', sentiment: 'positive', author: 'Romance Films', source: 'Critics' },
      { text: 'Still running in theaters!', sentiment: 'positive', author: 'Cinema History', source: 'Audience' },
      { text: 'SRK and Kajol\'s chemistry is legendary', sentiment: 'positive', author: 'On-Screen Pairs', source: 'Critics' }
    ],
    audienceScore: 89,
    criticsScore: 89,
    industry: 'Bollywood'
  },
  {
    id: 'sholay',
    title: 'Sholay',
    year: 1975,
    rating: 100,
    genre: ['Action', 'Adventure', 'Drama'],
    director: 'Ramesh Sippy',
    cast: ['Dharmendra', 'Amitabh Bachchan', 'Sanjeev Kumar'],
    posterSearch: 'sholay bollywood classic',
    reviews: [
      { text: 'The greatest Indian film ever made', sentiment: 'positive', author: 'Film Institute', source: 'Critics' },
      { text: 'Gabbar Singh is iconic', sentiment: 'positive', author: 'Villain Study', source: 'Audience' },
      { text: 'Timeless classic', sentiment: 'positive', author: 'Legacy Films', source: 'Critics' }
    ],
    audienceScore: 100,
    criticsScore: 100,
    industry: 'Bollywood'
  },
  {
    id: 'kgf-chapter-2',
    title: 'KGF: Chapter 2',
    year: 2022,
    rating: 83,
    genre: ['Action', 'Drama'],
    director: 'Prashanth Neel',
    cast: ['Yash', 'Sanjay Dutt', 'Raveena Tandon'],
    posterSearch: 'kgf chapter 2 yash',
    reviews: [
      { text: 'Mass entertainer at its peak', sentiment: 'positive', author: 'Action Central', source: 'Critics' },
      { text: 'Yash is a phenomenon', sentiment: 'positive', author: 'Star Power', source: 'Audience' },
      { text: 'Bigger and better than Chapter 1', sentiment: 'positive', author: 'Sequels Review', source: 'Critics' }
    ],
    audienceScore: 83,
    criticsScore: 83,
    industry: 'Bollywood'
  },
  {
    id: 'kabir-singh',
    title: 'Kabir Singh',
    year: 2019,
    rating: 50,
    genre: ['Romance', 'Drama'],
    director: 'Sandeep Reddy Vanga',
    cast: ['Shahid Kapoor', 'Kiara Advani'],
    posterSearch: 'kabir singh movie poster',
    reviews: [
      { text: 'Problematic but powerful performance', sentiment: 'neutral', author: 'Gender Studies', source: 'Critics' },
      { text: 'Shahid Kapoor is intense', sentiment: 'positive', author: 'Performance Watch', source: 'Audience' },
      { text: 'Controversial storytelling', sentiment: 'negative', author: 'Social Commentary', source: 'Critics' }
    ],
    audienceScore: 67,
    criticsScore: 50,
    industry: 'Bollywood'
  },
  {
    id: 'zindagi-na-milegi-dobara',
    title: 'Zindagi Na Milegi Dobara',
    year: 2011,
    rating: 95,
    genre: ['Drama', 'Comedy', 'Adventure'],
    director: 'Zoya Akhtar',
    cast: ['Hrithik Roshan', 'Farhan Akhtar', 'Abhay Deol'],
    posterSearch: 'zindagi na milegi dobara spain',
    reviews: [
      { text: 'A celebration of life and friendship', sentiment: 'positive', author: 'Travel Films', source: 'Critics' },
      { text: 'Makes you want to go on a road trip', sentiment: 'positive', author: 'Adventure Seekers', source: 'Audience' },
      { text: 'Feel-good cinema at its best', sentiment: 'positive', author: 'Uplifting Films', source: 'Critics' }
    ],
    audienceScore: 95,
    criticsScore: 95,
    industry: 'Bollywood'
  },
  {
    id: 'chennai-express',
    title: 'Chennai Express',
    year: 2013,
    rating: 63,
    genre: ['Comedy', 'Action', 'Romance'],
    director: 'Rohit Shetty',
    cast: ['Shah Rukh Khan', 'Deepika Padukone'],
    posterSearch: 'chennai express train',
    reviews: [
      { text: 'Mindless entertainment', sentiment: 'neutral', author: 'Comedy Watch', source: 'Critics' },
      { text: 'SRK and Deepika have great chemistry', sentiment: 'positive', author: 'Star Pairs', source: 'Audience' },
      { text: 'Typical Rohit Shetty fare', sentiment: 'neutral', author: 'Masala Films', source: 'Critics' }
    ],
    audienceScore: 63,
    criticsScore: 63,
    industry: 'Bollywood'
  },
  {
    id: 'war',
    title: 'War',
    year: 2019,
    rating: 77,
    genre: ['Action', 'Thriller'],
    director: 'Siddharth Anand',
    cast: ['Hrithik Roshan', 'Tiger Shroff'],
    posterSearch: 'war movie hrithik tiger',
    reviews: [
      { text: 'Stunning action choreography', sentiment: 'positive', author: 'Action Scenes', source: 'Critics' },
      { text: 'Hrithik vs Tiger is epic', sentiment: 'positive', author: 'Action Stars', source: 'Audience' },
      { text: 'High-budget spectacle', sentiment: 'positive', author: 'Box Office', source: 'Critics' }
    ],
    audienceScore: 77,
    criticsScore: 77,
    industry: 'Bollywood'
  },
  {
    id: 'padmaavat',
    title: 'Padmaavat',
    year: 2018,
    rating: 70,
    genre: ['Drama', 'History', 'Romance'],
    director: 'Sanjay Leela Bhansali',
    cast: ['Deepika Padukone', 'Ranveer Singh', 'Shahid Kapoor'],
    posterSearch: 'padmaavat deepika ranveer',
    reviews: [
      { text: 'Visually opulent', sentiment: 'positive', author: 'Visual Arts', source: 'Critics' },
      { text: 'Ranveer Singh as Khilji is menacing', sentiment: 'positive', author: 'Villain Roles', source: 'Audience' },
      { text: 'Bhansali\'s grand vision', sentiment: 'positive', author: 'Period Cinema', source: 'Critics' }
    ],
    audienceScore: 70,
    criticsScore: 70,
    industry: 'Bollywood'
  },
  {
    id: 'article-15',
    title: 'Article 15',
    year: 2019,
    rating: 88,
    genre: ['Crime', 'Drama', 'Thriller'],
    director: 'Anubhav Sinha',
    cast: ['Ayushmann Khurrana'],
    posterSearch: 'article 15 movie social',
    reviews: [
      { text: 'Hard-hitting social drama', sentiment: 'positive', author: 'Social Justice', source: 'Critics' },
      { text: 'Ayushmann takes brave roles', sentiment: 'positive', author: 'Actor\'s Choice', source: 'Audience' },
      { text: 'Important and timely', sentiment: 'positive', author: 'Political Cinema', source: 'Critics' }
    ],
    audienceScore: 88,
    criticsScore: 88,
    industry: 'Bollywood'
  },
  {
    id: 'rockstar',
    title: 'Rockstar',
    year: 2011,
    rating: 77,
    genre: ['Drama', 'Music', 'Romance'],
    director: 'Imtiaz Ali',
    cast: ['Ranbir Kapoor', 'Nargis Fakhri'],
    posterSearch: 'rockstar ranbir kapoor music',
    reviews: [
      { text: 'Ranbir Kapoor\'s career-best performance', sentiment: 'positive', author: 'Acting School', source: 'Critics' },
      { text: 'Soulful music by A.R. Rahman', sentiment: 'positive', author: 'Music Lovers', source: 'Audience' },
      { text: 'Imtiaz Ali\'s artistry', sentiment: 'positive', author: 'Auteur Cinema', source: 'Critics' }
    ],
    audienceScore: 77,
    criticsScore: 77,
    industry: 'Bollywood'
  },

  // ===== MORE HOLLYWOOD HITS =====
  {
    id: 'black-panther',
    title: 'Black Panther',
    year: 2018,
    rating: 96,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    director: 'Ryan Coogler',
    cast: ['Chadwick Boseman', 'Michael B. Jordan', 'Lupita Nyong\'o'],
    posterSearch: 'black panther wakanda',
    reviews: [
      { text: 'A cultural phenomenon', sentiment: 'positive', author: 'Cultural Studies', source: 'Critics' },
      { text: 'Killmonger is a complex villain', sentiment: 'positive', author: 'Character Depth', source: 'Audience' },
      { text: 'Wakanda forever!', sentiment: 'positive', author: 'Marvel Fans', source: 'Audience' }
    ],
    audienceScore: 79,
    criticsScore: 96,
    industry: 'Hollywood'
  },
  {
    id: 'jurassic-park',
    title: 'Jurassic Park',
    year: 1993,
    rating: 91,
    genre: ['Adventure', 'Sci-Fi', 'Thriller'],
    director: 'Steven Spielberg',
    cast: ['Sam Neill', 'Laura Dern', 'Jeff Goldblum'],
    posterSearch: 'jurassic park dinosaur',
    reviews: [
      { text: 'Revolutionary CGI and practical effects', sentiment: 'positive', author: 'VFX History', source: 'Critics' },
      { text: 'Still thrilling after all these years', sentiment: 'positive', author: 'Classic Adventures', source: 'Audience' },
      { text: 'Spielberg at his finest', sentiment: 'positive', author: 'Director Studies', source: 'Critics' }
    ],
    audienceScore: 91,
    criticsScore: 91,
    industry: 'Hollywood'
  },
  {
    id: 'star-wars-a-new-hope',
    title: 'Star Wars: A New Hope',
    year: 1977,
    rating: 93,
    genre: ['Sci-Fi', 'Adventure', 'Fantasy'],
    director: 'George Lucas',
    cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
    posterSearch: 'star wars original poster',
    reviews: [
      { text: 'The film that changed cinema forever', sentiment: 'positive', author: 'Film History', source: 'Critics' },
      { text: 'A timeless space opera', sentiment: 'positive', author: 'Sci-Fi Legends', source: 'Audience' },
      { text: 'May the Force be with you', sentiment: 'positive', author: 'Pop Culture', source: 'Critics' }
    ],
    audienceScore: 96,
    criticsScore: 93,
    industry: 'Hollywood'
  },
  {
    id: 'the-lord-of-the-rings-fellowship',
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    rating: 91,
    genre: ['Fantasy', 'Adventure', 'Drama'],
    director: 'Peter Jackson',
    cast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
    posterSearch: 'lord of the rings fellowship',
    reviews: [
      { text: 'Epic fantasy brought to life', sentiment: 'positive', author: 'Fantasy Films', source: 'Critics' },
      { text: 'A journey you\'ll never forget', sentiment: 'positive', author: 'Adventure Lovers', source: 'Audience' },
      { text: 'Peter Jackson\'s masterwork', sentiment: 'positive', author: 'Trilogy Review', source: 'Critics' }
    ],
    audienceScore: 95,
    criticsScore: 91,
    industry: 'Hollywood'
  },
  {
    id: 'harry-potter-sorcerers-stone',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    year: 2001,
    rating: 81,
    genre: ['Fantasy', 'Adventure', 'Family'],
    director: 'Chris Columbus',
    cast: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
    posterSearch: 'harry potter sorcerers stone',
    reviews: [
      { text: 'Magical introduction to the wizarding world', sentiment: 'positive', author: 'Fantasy Worlds', source: 'Critics' },
      { text: 'Perfect casting of the trio', sentiment: 'positive', author: 'Book Adaptations', source: 'Audience' },
      { text: 'The beginning of a phenomenon', sentiment: 'positive', author: 'Franchise Films', source: 'Critics' }
    ],
    audienceScore: 82,
    criticsScore: 81,
    industry: 'Hollywood'
  },
  {
    id: 'back-to-the-future',
    title: 'Back to the Future',
    year: 1985,
    rating: 96,
    genre: ['Sci-Fi', 'Comedy', 'Adventure'],
    director: 'Robert Zemeckis',
    cast: ['Michael J. Fox', 'Christopher Lloyd'],
    posterSearch: 'back to the future delorean',
    reviews: [
      { text: 'Perfect time-travel adventure', sentiment: 'positive', author: 'Time Travel Films', source: 'Critics' },
      { text: 'Endlessly rewatchable', sentiment: 'positive', author: 'Classic Cinema', source: 'Audience' },
      { text: '1.21 gigawatts of fun', sentiment: 'positive', author: 'Sci-Fi Comedy', source: 'Critics' }
    ],
    audienceScore: 96,
    criticsScore: 96,
    industry: 'Hollywood'
  },
  {
    id: 'the-social-network',
    title: 'The Social Network',
    year: 2010,
    rating: 96,
    genre: ['Biography', 'Drama'],
    director: 'David Fincher',
    cast: ['Jesse Eisenberg', 'Andrew Garfield', 'Justin Timberlake'],
    posterSearch: 'social network facebook movie',
    reviews: [
      { text: 'Defining film of the digital age', sentiment: 'positive', author: 'Tech Culture', source: 'Critics' },
      { text: 'Sorkin\'s screenplay is flawless', sentiment: 'positive', author: 'Screenwriting', source: 'Critics' },
      { text: 'Jesse Eisenberg is brilliant', sentiment: 'positive', author: 'Performance Art', source: 'Audience' }
    ],
    audienceScore: 95,
    criticsScore: 96,
    industry: 'Hollywood'
  },
  {
    id: 'whiplash',
    title: 'Whiplash',
    year: 2014,
    rating: 94,
    genre: ['Drama', 'Music'],
    director: 'Damien Chazelle',
    cast: ['Miles Teller', 'J.K. Simmons'],
    posterSearch: 'whiplash drumming movie',
    reviews: [
      { text: 'Intense and unforgettable', sentiment: 'positive', author: 'Intense Drama', source: 'Critics' },
      { text: 'J.K. Simmons is terrifying', sentiment: 'positive', author: 'Oscar Performances', source: 'Audience' },
      { text: 'A masterclass in tension', sentiment: 'positive', author: 'Film School', source: 'Critics' }
    ],
    audienceScore: 94,
    criticsScore: 94,
    industry: 'Hollywood'
  },
  {
    id: 'la-la-land',
    title: 'La La Land',
    year: 2016,
    rating: 91,
    genre: ['Musical', 'Romance', 'Drama'],
    director: 'Damien Chazelle',
    cast: ['Ryan Gosling', 'Emma Stone'],
    posterSearch: 'la la land musical',
    reviews: [
      { text: 'A love letter to Los Angeles and musicals', sentiment: 'positive', author: 'Musical Theater', source: 'Critics' },
      { text: 'Emma Stone shines', sentiment: 'positive', author: 'Leading Ladies', source: 'Audience' },
      { text: 'Visually stunning musical', sentiment: 'positive', author: 'Cinematography', source: 'Critics' }
    ],
    audienceScore: 81,
    criticsScore: 91,
    industry: 'Hollywood'
  },
  {
    id: 'eternal-sunshine',
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
    rating: 93,
    genre: ['Drama', 'Romance', 'Sci-Fi'],
    director: 'Michel Gondry',
    cast: ['Jim Carrey', 'Kate Winslet'],
    posterSearch: 'eternal sunshine spotless mind',
    reviews: [
      { text: 'Brilliantly original love story', sentiment: 'positive', author: 'Original Screenplays', source: 'Critics' },
      { text: 'Jim Carrey\'s most dramatic role', sentiment: 'positive', author: 'Actor Range', source: 'Audience' },
      { text: 'Heartbreaking and beautiful', sentiment: 'positive', author: 'Romance Films', source: 'Critics' }
    ],
    audienceScore: 94,
    criticsScore: 93,
    industry: 'Hollywood'
  },
  {
    id: 'fight-club',
    title: 'Fight Club',
    year: 1999,
    rating: 79,
    genre: ['Drama', 'Thriller'],
    director: 'David Fincher',
    cast: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
    posterSearch: 'fight club movie poster',
    reviews: [
      { text: 'Subversive and mind-bending', sentiment: 'positive', author: 'Cult Classics', source: 'Critics' },
      { text: 'The twist still shocks', sentiment: 'positive', author: 'Plot Twists', source: 'Audience' },
      { text: 'Cultural touchstone of the 90s', sentiment: 'positive', author: 'Decade Cinema', source: 'Critics' }
    ],
    audienceScore: 96,
    criticsScore: 79,
    industry: 'Hollywood'
  },
  {
    id: 'no-country-for-old-men',
    title: 'No Country for Old Men',
    year: 2007,
    rating: 93,
    genre: ['Crime', 'Drama', 'Thriller'],
    director: 'Coen Brothers',
    cast: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin'],
    posterSearch: 'no country for old men',
    reviews: [
      { text: 'Coen Brothers at their darkest', sentiment: 'positive', author: 'Auteur Study', source: 'Critics' },
      { text: 'Javier Bardem is chilling', sentiment: 'positive', author: 'Villain Portrayals', source: 'Audience' },
      { text: 'Perfectly paced thriller', sentiment: 'positive', author: 'Thriller Analysis', source: 'Critics' }
    ],
    audienceScore: 85,
    criticsScore: 93,
    industry: 'Hollywood'
  },
  {
    id: 'twelve-angry-men',
    title: '12 Angry Men',
    year: 1957,
    rating: 100,
    genre: ['Drama'],
    director: 'Sidney Lumet',
    cast: ['Henry Fonda', 'Lee J. Cobb'],
    posterSearch: '12 angry men jury',
    reviews: [
      { text: 'The greatest courtroom drama ever', sentiment: 'positive', author: 'Legal Drama', source: 'Critics' },
      { text: 'Timeless and powerful', sentiment: 'positive', author: 'Classic Films', source: 'Audience' },
      { text: 'A masterclass in filmmaking', sentiment: 'positive', author: 'Film School', source: 'Critics' }
    ],
    audienceScore: 97,
    criticsScore: 100,
    industry: 'Hollywood'
  },
  {
    id: 'schindlers-list',
    title: 'Schindler\'s List',
    year: 1993,
    rating: 97,
    genre: ['Biography', 'Drama', 'History'],
    director: 'Steven Spielberg',
    cast: ['Liam Neeson', 'Ben Kingsley', 'Ralph Fiennes'],
    posterSearch: 'schindlers list movie',
    reviews: [
      { text: 'Spielberg\'s masterpiece', sentiment: 'positive', author: 'Historical Cinema', source: 'Critics' },
      { text: 'Essential viewing', sentiment: 'positive', author: 'Holocaust Education', source: 'Audience' },
      { text: 'Powerful and haunting', sentiment: 'positive', author: 'War Films', source: 'Critics' }
    ],
    audienceScore: 98,
    criticsScore: 97,
    industry: 'Hollywood'
  },
  {
    id: 'the-departed',
    title: 'The Departed',
    year: 2006,
    rating: 90,
    genre: ['Crime', 'Drama', 'Thriller'],
    director: 'Martin Scorsese',
    cast: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'],
    posterSearch: 'the departed movie boston',
    reviews: [
      { text: 'Scorsese\'s return to crime cinema', sentiment: 'positive', author: 'Crime Films', source: 'Critics' },
      { text: 'Incredible ensemble cast', sentiment: 'positive', author: 'Cast Chemistry', source: 'Audience' },
      { text: 'Perfectly executed thriller', sentiment: 'positive', author: 'Remake Success', source: 'Critics' }
    ],
    audienceScore: 94,
    criticsScore: 90,
    industry: 'Hollywood'
  },
  {
    id: 'good-will-hunting',
    title: 'Good Will Hunting',
    year: 1997,
    rating: 97,
    genre: ['Drama'],
    director: 'Gus Van Sant',
    cast: ['Matt Damon', 'Robin Williams', 'Ben Affleck'],
    posterSearch: 'good will hunting movie',
    reviews: [
      { text: 'Robin Williams delivers an Oscar-winning performance', sentiment: 'positive', author: 'Supporting Actors', source: 'Critics' },
      { text: 'It\'s not your fault', sentiment: 'positive', author: 'Iconic Scenes', source: 'Audience' },
      { text: 'Brilliant screenplay by Damon and Affleck', sentiment: 'positive', author: 'Screenwriting', source: 'Critics' }
    ],
    audienceScore: 96,
    criticsScore: 97,
    industry: 'Hollywood'
  },

  // ===== MORE BOLLYWOOD HITS =====
  {
    id: 'mughal-e-azam',
    title: 'Mughal-E-Azam',
    year: 1960,
    rating: 100,
    genre: ['Drama', 'Romance', 'History'],
    director: 'K. Asif',
    cast: ['Prithviraj Kapoor', 'Dilip Kumar', 'Madhubala'],
    posterSearch: 'mughal e azam classic bollywood',
    reviews: [
      { text: 'The crown jewel of Indian cinema', sentiment: 'positive', author: 'Classic Bollywood', source: 'Critics' },
      { text: 'Madhubala\'s legendary performance', sentiment: 'positive', author: 'Golden Era', source: 'Audience' },
      { text: 'Timeless epic romance', sentiment: 'positive', author: 'Period Films', source: 'Critics' }
    ],
    audienceScore: 100,
    criticsScore: 100,
    industry: 'Bollywood'
  },
  {
    id: 'mother-india',
    title: 'Mother India',
    year: 1957,
    rating: 100,
    genre: ['Drama', 'Family'],
    director: 'Mehboob Khan',
    cast: ['Nargis', 'Sunil Dutt', 'Rajendra Kumar'],
    posterSearch: 'mother india nargis',
    reviews: [
      { text: 'India\'s first Oscar nominee', sentiment: 'positive', author: 'International Recognition', source: 'Critics' },
      { text: 'Nargis defines strength', sentiment: 'positive', author: 'Women in Cinema', source: 'Audience' },
      { text: 'A landmark in world cinema', sentiment: 'positive', author: 'Global Films', source: 'Critics' }
    ],
    audienceScore: 100,
    criticsScore: 100,
    industry: 'Bollywood'
  },
  {
    id: 'swades',
    title: 'Swades',
    year: 2004,
    rating: 95,
    genre: ['Drama'],
    director: 'Ashutosh Gowariker',
    cast: ['Shah Rukh Khan', 'Gayatri Joshi'],
    posterSearch: 'swades shah rukh khan village',
    reviews: [
      { text: 'SRK\'s most understated performance', sentiment: 'positive', author: 'Actor Performances', source: 'Critics' },
      { text: 'A film that grows on you', sentiment: 'positive', author: 'Slow Burn Classics', source: 'Audience' },
      { text: 'Patriotic without being preachy', sentiment: 'positive', author: 'Social Films', source: 'Critics' }
    ],
    audienceScore: 95,
    criticsScore: 95,
    industry: 'Bollywood'
  },
  {
    id: 'rang-de-basanti',
    title: 'Rang De Basanti',
    year: 2006,
    rating: 95,
    genre: ['Drama', 'History'],
    director: 'Rakeysh Omprakash Mehra',
    cast: ['Aamir Khan', 'Siddharth', 'Kunal Kapoor'],
    posterSearch: 'rang de basanti patriotic',
    reviews: [
      { text: 'Awakened a generation', sentiment: 'positive', author: 'Youth Movement', source: 'Critics' },
      { text: 'Powerful social message', sentiment: 'positive', author: 'Political Cinema', source: 'Audience' },
      { text: 'A.R. Rahman\'s iconic music', sentiment: 'positive', author: 'Soundtracks', source: 'Critics' }
    ],
    audienceScore: 95,
    criticsScore: 95,
    industry: 'Bollywood'
  },
  {
    id: 'gangs-of-wasseypur',
    title: 'Gangs of Wasseypur',
    year: 2012,
    rating: 100,
    genre: ['Crime', 'Drama', 'Action'],
    director: 'Anurag Kashyap',
    cast: ['Manoj Bajpayee', 'Nawazuddin Siddiqui', 'Richa Chadda'],
    posterSearch: 'gangs of wasseypur indian crime',
    reviews: [
      { text: 'India\'s answer to The Godfather', sentiment: 'positive', author: 'Crime Sagas', source: 'Critics' },
      { text: 'Nawazuddin Siddiqui is a revelation', sentiment: 'positive', author: 'Character Actors', source: 'Audience' },
      { text: 'Anurag Kashyap\'s magnum opus', sentiment: 'positive', author: 'Indie Directors', source: 'Critics' }
    ],
    audienceScore: 100,
    criticsScore: 100,
    industry: 'Bollywood'
  },
  {
    id: 'queen',
    title: 'Queen',
    year: 2014,
    rating: 96,
    genre: ['Comedy', 'Drama'],
    director: 'Vikas Bahl',
    cast: ['Kangana Ranaut', 'Rajkummar Rao'],
    posterSearch: 'queen kangana ranaut paris',
    reviews: [
      { text: 'Kangana\'s career-defining role', sentiment: 'positive', author: 'Female Leads', source: 'Critics' },
      { text: 'A journey of self-discovery', sentiment: 'positive', author: 'Coming of Age', source: 'Audience' },
      { text: 'Empowering and hilarious', sentiment: 'positive', author: 'Women\'s Stories', source: 'Critics' }
    ],
    audienceScore: 96,
    criticsScore: 96,
    industry: 'Bollywood'
  },
  {
    id: 'pink',
    title: 'Pink',
    year: 2016,
    rating: 80,
    genre: ['Drama', 'Thriller'],
    director: 'Aniruddha Roy Chowdhury',
    cast: ['Amitabh Bachchan', 'Taapsee Pannu'],
    posterSearch: 'pink movie no means no',
    reviews: [
      { text: '"No means No" - a powerful message', sentiment: 'positive', author: 'Social Issues', source: 'Critics' },
      { text: 'Amitabh Bachchan\'s courtroom brilliance', sentiment: 'positive', author: 'Legal Drama', source: 'Audience' },
      { text: 'Important film for modern India', sentiment: 'positive', author: 'Contemporary Issues', source: 'Critics' }
    ],
    audienceScore: 80,
    criticsScore: 80,
    industry: 'Bollywood'
  },
  {
    id: 'barfi',
    title: 'Barfi!',
    year: 2012,
    rating: 90,
    genre: ['Comedy', 'Drama', 'Romance'],
    director: 'Anurag Basu',
    cast: ['Ranbir Kapoor', 'Priyanka Chopra', 'Ileana D\'Cruz'],
    posterSearch: 'barfi ranbir kapoor silent',
    reviews: [
      { text: 'Ranbir\'s silent performance speaks volumes', sentiment: 'positive', author: 'Physical Comedy', source: 'Critics' },
      { text: 'Priyanka shines as Jhilmil', sentiment: 'positive', author: 'Supporting Roles', source: 'Audience' },
      { text: 'A beautiful love story', sentiment: 'positive', author: 'Romance Cinema', source: 'Critics' }
    ],
    audienceScore: 90,
    criticsScore: 90,
    industry: 'Bollywood'
  },
  {
    id: 'tumbbad',
    title: 'Tumbbad',
    year: 2018,
    rating: 92,
    genre: ['Fantasy', 'Horror', 'Thriller'],
    director: 'Rahi Anil Barve',
    cast: ['Sohum Shah'],
    posterSearch: 'tumbbad indian horror fantasy',
    reviews: [
      { text: 'Visually stunning horror-fantasy', sentiment: 'positive', author: 'Horror Cinema', source: 'Critics' },
      { text: 'India\'s best horror film', sentiment: 'positive', author: 'Genre Films', source: 'Audience' },
      { text: 'Atmospheric and original', sentiment: 'positive', author: 'World Building', source: 'Critics' }
    ],
    audienceScore: 92,
    criticsScore: 92,
    industry: 'Bollywood'
  },
  {
    id: 'udaan',
    title: 'Udaan',
    year: 2010,
    rating: 88,
    genre: ['Drama'],
    director: 'Vikramaditya Motwane',
    cast: ['Rajat Barmecha', 'Ronit Roy'],
    posterSearch: 'udaan coming of age india',
    reviews: [
      { text: 'A raw coming-of-age masterpiece', sentiment: 'positive', author: 'Independent Cinema', source: 'Critics' },
      { text: 'Ronit Roy is terrifying as the father', sentiment: 'positive', author: 'Antagonists', source: 'Audience' },
      { text: 'Honest and heartbreaking', sentiment: 'positive', author: 'Family Drama', source: 'Critics' }
    ],
    audienceScore: 88,
    criticsScore: 88,
    industry: 'Bollywood'
  },
  {
    id: 'kahaani',
    title: 'Kahaani',
    year: 2012,
    rating: 86,
    genre: ['Mystery', 'Thriller'],
    director: 'Sujoy Ghosh',
    cast: ['Vidya Balan'],
    posterSearch: 'kahaani vidya balan kolkata',
    reviews: [
      { text: 'Vidya Balan carries the film on her shoulders', sentiment: 'positive', author: 'Solo Performances', source: 'Critics' },
      { text: 'The twist is phenomenal', sentiment: 'positive', author: 'Mystery Lovers', source: 'Audience' },
      { text: 'Kolkata becomes a character', sentiment: 'positive', author: 'Location as Character', source: 'Critics' }
    ],
    audienceScore: 86,
    criticsScore: 86,
    industry: 'Bollywood'
  },
  {
    id: 'dil-chahta-hai',
    title: 'Dil Chahta Hai',
    year: 2001,
    rating: 85,
    genre: ['Comedy', 'Drama', 'Romance'],
    director: 'Farhan Akhtar',
    cast: ['Aamir Khan', 'Saif Ali Khan', 'Akshaye Khanna'],
    posterSearch: 'dil chahta hai friends goa',
    reviews: [
      { text: 'Defined a generation of young India', sentiment: 'positive', author: 'Youth Culture', source: 'Critics' },
      { text: 'Friendship goals', sentiment: 'positive', author: 'Bromance Films', source: 'Audience' },
      { text: 'Farhan Akhtar\'s brilliant debut', sentiment: 'positive', author: 'First Films', source: 'Critics' }
    ],
    audienceScore: 85,
    criticsScore: 85,
    industry: 'Bollywood'
  },
  {
    id: 'bajrangi-bhaijaan',
    title: 'Bajrangi Bhaijaan',
    year: 2015,
    rating: 84,
    genre: ['Action', 'Adventure', 'Comedy'],
    director: 'Kabir Khan',
    cast: ['Salman Khan', 'Harshaali Malhotra', 'Nawazuddin Siddiqui'],
    posterSearch: 'bajrangi bhaijaan salman khan',
    reviews: [
      { text: 'Salman\'s most heartfelt performance', sentiment: 'positive', author: 'Star Performances', source: 'Critics' },
      { text: 'The little girl steals hearts', sentiment: 'positive', author: 'Child Actors', source: 'Audience' },
      { text: 'Cross-border emotions', sentiment: 'positive', author: 'Humanity Films', source: 'Critics' }
    ],
    audienceScore: 84,
    criticsScore: 84,
    industry: 'Bollywood'
  },
  {
    id: 'masaan',
    title: 'Masaan',
    year: 2015,
    rating: 90,
    genre: ['Drama', 'Romance'],
    director: 'Neeraj Ghaywan',
    cast: ['Richa Chadda', 'Vicky Kaushal', 'Shweta Tripathi'],
    posterSearch: 'masaan varanasi indian cinema',
    reviews: [
      { text: 'Vicky Kaushal announces his arrival', sentiment: 'positive', author: 'New Talent', source: 'Critics' },
      { text: 'Poetic and heartbreaking', sentiment: 'positive', author: 'Art House', source: 'Audience' },
      { text: 'Cannes-worthy Indian cinema', sentiment: 'positive', author: 'Festival Films', source: 'Critics' }
    ],
    audienceScore: 90,
    criticsScore: 90,
    industry: 'Bollywood'
  },
  {
    id: 'aligarh',
    title: 'Aligarh',
    year: 2016,
    rating: 82,
    genre: ['Biography', 'Drama'],
    director: 'Hansal Mehta',
    cast: ['Manoj Bajpayee', 'Rajkummar Rao'],
    posterSearch: 'aligarh movie lgbtq',
    reviews: [
      { text: 'Manoj Bajpayee\'s most sensitive performance', sentiment: 'positive', author: 'LGBTQ Cinema', source: 'Critics' },
      { text: 'A brave and important film', sentiment: 'positive', author: 'Social Justice', source: 'Audience' },
      { text: 'Quiet and powerful', sentiment: 'positive', author: 'Biography Films', source: 'Critics' }
    ],
    audienceScore: 82,
    criticsScore: 82,
    industry: 'Bollywood'
  },
  {
    id: 'chhichhore',
    title: 'Chhichhore',
    year: 2019,
    rating: 78,
    genre: ['Comedy', 'Drama'],
    director: 'Nitesh Tiwari',
    cast: ['Sushant Singh Rajput', 'Shraddha Kapoor'],
    posterSearch: 'chhichhore college friends',
    reviews: [
      { text: 'A message about success and failure', sentiment: 'positive', author: 'Life Lessons', source: 'Critics' },
      { text: 'Sushant Singh Rajput\'s legacy', sentiment: 'positive', author: 'Tribute Films', source: 'Audience' },
      { text: 'Nostalgia done right', sentiment: 'positive', author: 'College Films', source: 'Critics' }
    ],
    audienceScore: 78,
    criticsScore: 78,
    industry: 'Bollywood'
  },
  {
    id: 'URI',
    title: 'Uri: The Surgical Strike',
    year: 2019,
    rating: 76,
    genre: ['Action', 'Drama', 'War'],
    director: 'Aditya Dhar',
    cast: ['Vicky Kaushal', 'Paresh Rawal', 'Mohit Raina'],
    posterSearch: 'uri surgical strike indian army',
    reviews: [
      { text: '"How\'s the josh?" - High Sir!', sentiment: 'positive', author: 'Patriotic Films', source: 'Audience' },
      { text: 'Gripping war drama', sentiment: 'positive', author: 'Military Cinema', source: 'Critics' },
      { text: 'Vicky Kaushal in top form', sentiment: 'positive', author: 'Action Heroes', source: 'Audience' }
    ],
    audienceScore: 76,
    criticsScore: 76,
    industry: 'Bollywood'
  },
  {
    id: 'stree',
    title: 'Stree',
    year: 2018,
    rating: 82,
    genre: ['Comedy', 'Horror'],
    director: 'Amar Kaushik',
    cast: ['Rajkummar Rao', 'Shraddha Kapoor'],
    posterSearch: 'stree horror comedy indian',
    reviews: [
      { text: 'Horror-comedy done right', sentiment: 'positive', author: 'Genre Blending', source: 'Critics' },
      { text: 'Hilarious and spooky', sentiment: 'positive', author: 'Comedy Horror', source: 'Audience' },
      { text: 'Fresh take on folklore', sentiment: 'positive', author: 'Indian Mythology', source: 'Critics' }
    ],
    audienceScore: 82,
    criticsScore: 82,
    industry: 'Bollywood'
  },
  {
    id: 'lunchbox',
    title: 'The Lunchbox',
    year: 2013,
    rating: 96,
    genre: ['Drama', 'Romance'],
    director: 'Ritesh Batra',
    cast: ['Irrfan Khan', 'Nimrat Kaur'],
    posterSearch: 'lunchbox irrfan khan mumbai',
    reviews: [
      { text: 'Irrfan Khan\'s subtle brilliance', sentiment: 'positive', author: 'Character Study', source: 'Critics' },
      { text: 'A love story told through food', sentiment: 'positive', author: 'Unconventional Romance', source: 'Audience' },
      { text: 'Mumbai\'s dabbawalas become romantic', sentiment: 'positive', author: 'Cultural Cinema', source: 'Critics' }
    ],
    audienceScore: 96,
    criticsScore: 96,
    industry: 'Bollywood'
  },
  {
    id: 'piku',
    title: 'Piku',
    year: 2015,
    rating: 84,
    genre: ['Comedy', 'Drama'],
    director: 'Shoojit Sircar',
    cast: ['Deepika Padukone', 'Amitabh Bachchan', 'Irrfan Khan'],
    posterSearch: 'piku deepika amitabh',
    reviews: [
      { text: 'A slice-of-life masterpiece', sentiment: 'positive', author: 'Realistic Cinema', source: 'Critics' },
      { text: 'Deepika and Amitabh\'s chemistry', sentiment: 'positive', author: 'Father-Daughter Films', source: 'Audience' },
      { text: 'Humor in everyday life', sentiment: 'positive', author: 'Comedy Drama', source: 'Critics' }
    ],
    audienceScore: 84,
    criticsScore: 84,
    industry: 'Bollywood'
  },
  {
    id: 'shahid',
    title: 'Shahid',
    year: 2013,
    rating: 88,
    genre: ['Biography', 'Drama'],
    director: 'Hansal Mehta',
    cast: ['Rajkummar Rao'],
    posterSearch: 'shahid movie rajkummar rao',
    reviews: [
      { text: 'Rajkummar Rao\'s breakthrough performance', sentiment: 'positive', author: 'Method Acting', source: 'Critics' },
      { text: 'Inspiring true story', sentiment: 'positive', author: 'Real Life Heroes', source: 'Audience' },
      { text: 'Hansal Mehta\'s realistic approach', sentiment: 'positive', author: 'Documentary Style', source: 'Critics' }
    ],
    audienceScore: 88,
    criticsScore: 88,
    industry: 'Bollywood'
  },

  // ===== ADDITIONAL HOLLYWOOD FILMS =====
  {
    id: 'shutter-island',
    title: 'Shutter Island',
    year: 2010,
    rating: 68,
    genre: ['Mystery', 'Thriller'],
    director: 'Martin Scorsese',
    cast: ['Leonardo DiCaprio', 'Mark Ruffalo'],
    posterSearch: 'shutter island lighthouse',
    reviews: [
      { text: 'Mind-bending psychological thriller', sentiment: 'positive', author: 'Psychological Films', source: 'Critics' },
      { text: 'DiCaprio is haunting', sentiment: 'positive', author: 'Tortured Souls', source: 'Audience' },
      { text: 'Twist ending stays with you', sentiment: 'positive', author: 'Plot Twists', source: 'Critics' }
    ],
    audienceScore: 77,
    criticsScore: 68,
    industry: 'Hollywood'
  },
  {
    id: 'django-unchained',
    title: 'Django Unchained',
    year: 2012,
    rating: 87,
    genre: ['Western', 'Drama'],
    director: 'Quentin Tarantino',
    cast: ['Jamie Foxx', 'Christoph Waltz', 'Leonardo DiCaprio'],
    posterSearch: 'django unchained western',
    reviews: [
      { text: 'Tarantino\'s take on the Western', sentiment: 'positive', author: 'Western Revival', source: 'Critics' },
      { text: 'Christoph Waltz steals every scene', sentiment: 'positive', author: 'Supporting Actors', source: 'Audience' },
      { text: 'Bold and entertaining', sentiment: 'positive', author: 'Revisionist Westerns', source: 'Critics' }
    ],
    audienceScore: 91,
    criticsScore: 87,
    industry: 'Hollywood'
  },
  {
    id: 'mad-max-fury-road',
    title: 'Mad Max: Fury Road',
    year: 2015,
    rating: 97,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    director: 'George Miller',
    cast: ['Tom Hardy', 'Charlize Theron'],
    posterSearch: 'mad max fury road desert',
    reviews: [
      { text: 'Action cinema perfected', sentiment: 'positive', author: 'Action Masterclass', source: 'Critics' },
      { text: 'Charlize Theron is a badass', sentiment: 'positive', author: 'Female Action Heroes', source: 'Audience' },
      { text: 'One long chase scene - and it\'s perfect', sentiment: 'positive', author: 'Stunt Work', source: 'Critics' }
    ],
    audienceScore: 97,
    criticsScore: 97,
    industry: 'Hollywood'
  },
  {
    id: 'blade-runner-2049',
    title: 'Blade Runner 2049',
    year: 2017,
    rating: 87,
    genre: ['Sci-Fi', 'Thriller'],
    director: 'Denis Villeneuve',
    cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas'],
    posterSearch: 'blade runner 2049 cyberpunk',
    reviews: [
      { text: 'Visually stunning sequel', sentiment: 'positive', author: 'Cinematography', source: 'Critics' },
      { text: 'Worthy successor to the original', sentiment: 'positive', author: 'Sci-Fi Classics', source: 'Audience' },
      { text: 'Villeneuve\'s vision is breathtaking', sentiment: 'positive', author: 'Visual Storytelling', source: 'Critics' }
    ],
    audienceScore: 81,
    criticsScore: 87,
    industry: 'Hollywood'
  },
  {
    id: 'wonder-woman',
    title: 'Wonder Woman',
    year: 2017,
    rating: 93,
    genre: ['Action', 'Adventure', 'Fantasy'],
    director: 'Patty Jenkins',
    cast: ['Gal Gadot', 'Chris Pine'],
    posterSearch: 'wonder woman gal gadot',
    reviews: [
      { text: 'Gal Gadot IS Wonder Woman', sentiment: 'positive', author: 'Superhero Casting', source: 'Audience' },
      { text: 'Patty Jenkins delivers a DC hit', sentiment: 'positive', author: 'Female Directors', source: 'Critics' },
      { text: 'Empowering and exciting', sentiment: 'positive', author: 'Female Superheroes', source: 'Critics' }
    ],
    audienceScore: 83,
    criticsScore: 93,
    industry: 'Hollywood'
  },
  {
    id: 'get-out',
    title: 'Get Out',
    year: 2017,
    rating: 98,
    genre: ['Horror', 'Mystery', 'Thriller'],
    director: 'Jordan Peele',
    cast: ['Daniel Kaluuya', 'Allison Williams'],
    posterSearch: 'get out movie horror',
    reviews: [
      { text: 'Jordan Peele\'s masterful debut', sentiment: 'positive', author: 'Horror Innovation', source: 'Critics' },
      { text: 'Social commentary wrapped in horror', sentiment: 'positive', author: 'Smart Horror', source: 'Audience' },
      { text: 'Daniel Kaluuya is incredible', sentiment: 'positive', author: 'Leading Men', source: 'Critics' }
    ],
    audienceScore: 86,
    criticsScore: 98,
    industry: 'Hollywood'
  },
  {
    id: 'gravity',
    title: 'Gravity',
    year: 2013,
    rating: 96,
    genre: ['Sci-Fi', 'Drama', 'Thriller'],
    director: 'Alfonso Cuarón',
    cast: ['Sandra Bullock', 'George Clooney'],
    posterSearch: 'gravity space movie',
    reviews: [
      { text: 'Technical achievement in filmmaking', sentiment: 'positive', author: 'Visual Effects', source: 'Critics' },
      { text: 'Sandra Bullock carries the film', sentiment: 'positive', author: 'Solo Performances', source: 'Audience' },
      { text: 'Space has never been more terrifying', sentiment: 'positive', author: 'Survival Films', source: 'Critics' }
    ],
    audienceScore: 80,
    criticsScore: 96,
    industry: 'Hollywood'
  },
  {
    id: 'coco',
    title: 'Coco',
    year: 2017,
    rating: 97,
    genre: ['Animation', 'Adventure', 'Family'],
    director: 'Lee Unkrich',
    cast: ['Anthony Gonzalez', 'Gael García Bernal'],
    posterSearch: 'coco pixar mexico',
    reviews: [
      { text: 'Pixar\'s most emotional film', sentiment: 'positive', author: 'Animation Studios', source: 'Critics' },
      { text: 'Remember Me will make you cry', sentiment: 'positive', author: 'Movie Songs', source: 'Audience' },
      { text: 'Beautiful celebration of Mexican culture', sentiment: 'positive', author: 'Cultural Representation', source: 'Critics' }
    ],
    audienceScore: 94,
    criticsScore: 97,
    industry: 'Hollywood'
  },
  {
    id: 'toy-story-3',
    title: 'Toy Story 3',
    year: 2010,
    rating: 98,
    genre: ['Animation', 'Adventure', 'Comedy'],
    director: 'Lee Unkrich',
    cast: ['Tom Hanks', 'Tim Allen', 'Joan Cusack'],
    posterSearch: 'toy story 3 andy',
    reviews: [
      { text: 'Perfect conclusion to the trilogy', sentiment: 'positive', author: 'Animation History', source: 'Critics' },
      { text: 'The ending destroys everyone', sentiment: 'positive', author: 'Emotional Moments', source: 'Audience' },
      { text: 'Pixar at their finest', sentiment: 'positive', author: 'Family Entertainment', source: 'Critics' }
    ],
    audienceScore: 90,
    criticsScore: 98,
    industry: 'Hollywood'
  },
  {
    id: 'up',
    title: 'Up',
    year: 2009,
    rating: 98,
    genre: ['Animation', 'Adventure', 'Comedy'],
    director: 'Pete Docter',
    cast: ['Ed Asner', 'Jordan Nagai'],
    posterSearch: 'up pixar balloons house',
    reviews: [
      { text: 'The first 10 minutes are perfection', sentiment: 'positive', author: 'Emotional Storytelling', source: 'Critics' },
      { text: 'Heartwarming adventure', sentiment: 'positive', author: 'Family Films', source: 'Audience' },
      { text: 'Pixar\'s emotional masterpiece', sentiment: 'positive', author: 'Animated Classics', source: 'Critics' }
    ],
    audienceScore: 90,
    criticsScore: 98,
    industry: 'Hollywood'
  },
  {
    id: 'finding-nemo',
    title: 'Finding Nemo',
    year: 2003,
    rating: 99,
    genre: ['Animation', 'Adventure', 'Comedy'],
    director: 'Andrew Stanton',
    cast: ['Albert Brooks', 'Ellen DeGeneres'],
    posterSearch: 'finding nemo clownfish',
    reviews: [
      { text: 'Just keep swimming', sentiment: 'positive', author: 'Memorable Quotes', source: 'Audience' },
      { text: 'Beautiful underwater world', sentiment: 'positive', author: 'Visual Splendor', source: 'Critics' },
      { text: 'Pixar\'s heartfelt adventure', sentiment: 'positive', author: 'Family Classics', source: 'Critics' }
    ],
    audienceScore: 86,
    criticsScore: 99,
    industry: 'Hollywood'
  },
  {
    id: 'ratatouille',
    title: 'Ratatouille',
    year: 2007,
    rating: 96,
    genre: ['Animation', 'Comedy', 'Family'],
    director: 'Brad Bird',
    cast: ['Patton Oswalt', 'Ian Holm'],
    posterSearch: 'ratatouille rat chef paris',
    reviews: [
      { text: 'A love letter to food and creativity', sentiment: 'positive', author: 'Culinary Cinema', source: 'Critics' },
      { text: 'Anyone can cook', sentiment: 'positive', author: 'Inspirational Films', source: 'Audience' },
      { text: 'Brad Bird\'s masterpiece', sentiment: 'positive', author: 'Animation Directors', source: 'Critics' }
    ],
    audienceScore: 87,
    criticsScore: 96,
    industry: 'Hollywood'
  },
  {
    id: 'inside-out',
    title: 'Inside Out',
    year: 2015,
    rating: 98,
    genre: ['Animation', 'Adventure', 'Comedy'],
    director: 'Pete Docter',
    cast: ['Amy Poehler', 'Phyllis Smith'],
    posterSearch: 'inside out emotions pixar',
    reviews: [
      { text: 'Brilliant exploration of emotions', sentiment: 'positive', author: 'Psychology in Film', source: 'Critics' },
      { text: 'It\'s okay to be sad', sentiment: 'positive', author: 'Life Lessons', source: 'Audience' },
      { text: 'Pixar\'s smartest film', sentiment: 'positive', author: 'Intelligent Animation', source: 'Critics' }
    ],
    audienceScore: 89,
    criticsScore: 98,
    industry: 'Hollywood'
  },
  {
    id: 'wall-e',
    title: 'WALL-E',
    year: 2008,
    rating: 95,
    genre: ['Animation', 'Adventure', 'Sci-Fi'],
    director: 'Andrew Stanton',
    cast: ['Ben Burtt', 'Elissa Knight'],
    posterSearch: 'wall-e robot pixar',
    reviews: [
      { text: 'Environmental message with heart', sentiment: 'positive', author: 'Eco Cinema', source: 'Critics' },
      { text: 'Barely any dialogue, maximum emotion', sentiment: 'positive', author: 'Visual Storytelling', source: 'Audience' },
      { text: 'Pixar\'s boldest film', sentiment: 'positive', author: 'Animated Sci-Fi', source: 'Critics' }
    ],
    audienceScore: 90,
    criticsScore: 95,
    industry: 'Hollywood'
  },
  {
    id: 'the-grand-budapest-hotel',
    title: 'The Grand Budapest Hotel',
    year: 2014,
    rating: 92,
    genre: ['Comedy', 'Drama', 'Adventure'],
    director: 'Wes Anderson',
    cast: ['Ralph Fiennes', 'Tony Revolori'],
    posterSearch: 'grand budapest hotel wes anderson',
    reviews: [
      { text: 'Wes Anderson\'s visual masterpiece', sentiment: 'positive', author: 'Auteur Films', source: 'Critics' },
      { text: 'Whimsical and perfectly crafted', sentiment: 'positive', author: 'Art House', source: 'Audience' },
      { text: 'Ralph Fiennes is delightful', sentiment: 'positive', author: 'Comedy Performances', source: 'Critics' }
    ],
    audienceScore: 86,
    criticsScore: 92,
    industry: 'Hollywood'
  },
  {
    id: 'her',
    title: 'Her',
    year: 2013,
    rating: 94,
    genre: ['Romance', 'Sci-Fi', 'Drama'],
    director: 'Spike Jonze',
    cast: ['Joaquin Phoenix', 'Scarlett Johansson'],
    posterSearch: 'her movie artificial intelligence',
    reviews: [
      { text: 'The future of love', sentiment: 'positive', author: 'AI Cinema', source: 'Critics' },
      { text: 'Joaquin Phoenix and voice-only Scarlett', sentiment: 'positive', author: 'Unconventional Romance', source: 'Audience' },
      { text: 'Thoughtful sci-fi romance', sentiment: 'positive', author: 'Smart Sci-Fi', source: 'Critics' }
    ],
    audienceScore: 83,
    criticsScore: 94,
    industry: 'Hollywood'
  },
  {
    id: 'arrival',
    title: 'Arrival',
    year: 2016,
    rating: 94,
    genre: ['Sci-Fi', 'Drama', 'Mystery'],
    director: 'Denis Villeneuve',
    cast: ['Amy Adams', 'Jeremy Renner'],
    posterSearch: 'arrival alien spaceship',
    reviews: [
      { text: 'Intelligent alien contact film', sentiment: 'positive', author: 'Hard Sci-Fi', source: 'Critics' },
      { text: 'Amy Adams gives a powerful performance', sentiment: 'positive', author: 'Leading Actresses', source: 'Audience' },
      { text: 'Emotional and cerebral', sentiment: 'positive', author: 'Thinking Person\'s Sci-Fi', source: 'Critics' }
    ],
    audienceScore: 82,
    criticsScore: 94,
    industry: 'Hollywood'
  },
  {
    id: 'moonlight',
    title: 'Moonlight',
    year: 2016,
    rating: 98,
    genre: ['Drama'],
    director: 'Barry Jenkins',
    cast: ['Mahershala Ali', 'Naomie Harris'],
    posterSearch: 'moonlight movie beach',
    reviews: [
      { text: 'A profound coming-of-age story', sentiment: 'positive', author: 'LGBTQ Cinema', source: 'Critics' },
      { text: 'Beautifully shot and acted', sentiment: 'positive', author: 'Art Cinema', source: 'Audience' },
      { text: 'Barry Jenkins\' intimate masterpiece', sentiment: 'positive', author: 'Independent Films', source: 'Critics' }
    ],
    audienceScore: 79,
    criticsScore: 98,
    industry: 'Hollywood'
  },
  {
    id: 'everything-everywhere-all-at-once',
    title: 'Everything Everywhere All at Once',
    year: 2022,
    rating: 95,
    genre: ['Action', 'Adventure', 'Comedy'],
    director: 'Daniels',
    cast: ['Michelle Yeoh', 'Stephanie Hsu', 'Ke Huy Quan'],
    posterSearch: 'everything everywhere all at once multiverse',
    reviews: [
      { text: 'Chaotic brilliance', sentiment: 'positive', author: 'Multiverse Films', source: 'Critics' },
      { text: 'Michelle Yeoh\'s tour de force', sentiment: 'positive', author: 'Oscar Wins', source: 'Audience' },
      { text: 'The most original film in years', sentiment: 'positive', author: 'Innovation', source: 'Critics' }
    ],
    audienceScore: 90,
    criticsScore: 95,
    industry: 'Hollywood'
  }
];

// Normalized search function for matching movie names
export function searchMovies(query: string): Movie[] {
  if (!query.trim()) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return moviesDatabase.filter(movie => {
    const normalizedTitle = movie.title.toLowerCase();
    return normalizedTitle.includes(normalizedQuery) || 
           normalizedQuery.includes(normalizedTitle) ||
           normalizedTitle.split(' ').some(word => word.startsWith(normalizedQuery));
  }).sort((a, b) => {
    // Exact matches first
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    
    if (aTitle === normalizedQuery) return -1;
    if (bTitle === normalizedQuery) return 1;
    
    // Then starts with
    if (aTitle.startsWith(normalizedQuery) && !bTitle.startsWith(normalizedQuery)) return -1;
    if (!aTitle.startsWith(normalizedQuery) && bTitle.startsWith(normalizedQuery)) return 1;
    
    // Then by rating
    return b.rating - a.rating;
  });
}

export function getMovieById(id: string): Movie | undefined {
  return moviesDatabase.find(movie => movie.id === id);
}
