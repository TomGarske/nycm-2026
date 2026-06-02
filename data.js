// NYC Midnight 500-Word Fiction Challenge 2026 — Round 1 assignments
// Scraped from https://www.nycmidnight.com/500fc/2026-1stroundassignments
// 3,456 writers across 86 groups

const GROUPS = [
  {id:1, genre:"Suspense and/or Thriller", action:"Fingerprinting", object:"A moped", writers:41, countries:{"United States":22,"Canada":8,"United Kingdom":5,"Australia":5,"Poland":1}},
  {id:2, genre:"Romantic Comedy", action:"Disagreeing", object:"A bus", writers:41, countries:{"United States":28,"United Kingdom":5,"Australia":4,"Canada":2,"Spain":1,"Austria":1}},
  {id:3, genre:"Horror", action:"Agreeing", object:"A dumbbell", writers:41, countries:{"United States":30,"United Kingdom":4,"Canada":4,"Ireland":2,"New Zealand":1}},
  {id:4, genre:"Sci-Fi", action:"Eloping", object:"A picnic table", writers:41, countries:{"United States":29,"Australia":4,"Canada":4,"New Zealand":2,"United Kingdom":1,"Netherlands":1}},
  {id:5, genre:"Drama", action:"Startling", object:"A fishing lure", writers:41, countries:{"United States":28,"United Kingdom":5,"Canada":2,"Germany":2,"Australia":2,"France":1,"Ireland":1}},
  {id:6, genre:"Suspense and/or Thriller", action:"Howling", object:"A wedding dress", writers:41, countries:{"United States":20,"United Kingdom":7,"Canada":5,"Australia":4,"Singapore":1,"Germany":1,"Ireland":1,"New Zealand":1,"France":1}},
  {id:7, genre:"Ghost Story", action:"Emptying a pocket", object:"A flashing light", writers:41, countries:{"United States":28,"United Kingdom":5,"Australia":5,"Canada":3}},
  {id:8, genre:"Ghost Story", action:"Romanticizing", object:"A painkiller", writers:41, countries:{"United States":31,"United Kingdom":6,"Canada":2,"Thailand":1,"Australia":1}},
  {id:9, genre:"Drama", action:"Delegating", object:"An olive", writers:41, countries:{"United States":28,"United Kingdom":7,"Australia":3,"Canada":2,"New Zealand":1}},
  {id:10, genre:"Comedy", action:"Letting one's hair down", object:"A baby carriage", writers:41, countries:{"United States":24,"Canada":6,"Australia":5,"United Kingdom":3,"Netherlands":1,"Switzerland":1,"Ireland":1}},
  {id:11, genre:"Historical Fiction", action:"Pulling an all-nighter", object:"A stepladder", writers:41, countries:{"United States":25,"Australia":5,"United Kingdom":5,"Germany":2,"Ireland":2,"Cayman Islands":1,"Costa Rica":1}},
  {id:12, genre:"Sci-Fi", action:"Hunting", object:"A safety belt", writers:41, countries:{"United States":26,"Australia":6,"Canada":4,"United Kingdom":3,"Ireland":1,"New Zealand":1}},
  {id:13, genre:"Historical Fiction", action:"Bandaging", object:"A teacup", writers:41, countries:{"United States":27,"Australia":6,"United Kingdom":4,"Canada":2,"Ireland":1,"Argentina":1}},
  {id:14, genre:"Ghost Story", action:"Taking a detour", object:"A chain", writers:41, countries:{"United States":28,"United Kingdom":7,"Canada":3,"Australia":2,"Ireland":1}},
  {id:15, genre:"Horror", action:"Eating cake", object:"A broom", writers:41, countries:{"United States":27,"Canada":5,"Ireland":3,"Australia":2,"United Kingdom":2,"France":1,"Japan":1}},
  {id:16, genre:"Horror", action:"Masquerading", object:"A fortune cookie", writers:41, countries:{"United States":28,"Canada":6,"Australia":3,"Ireland":2,"United Kingdom":1,"Germany":1}},
  {id:17, genre:"Ghost Story", action:"Photographing", object:"A doorbell", writers:41, countries:{"United States":25,"United Kingdom":9,"Canada":3,"Australia":2,"New Zealand":2}},
  {id:18, genre:"Comedy", action:"Demonstrating", object:"A brownie", writers:40, countries:{"United States":27,"Canada":5,"Australia":3,"United Kingdom":2,"Ireland":1,"Zambia":1,"South Africa":1}},
  {id:19, genre:"Fairy Tale and/or Fantasy", action:"Searching for food", object:"Mouthwash", writers:40, countries:{"United States":29,"Canada":5,"United Kingdom":3,"Australia":2,"Ireland":1}},
  {id:20, genre:"Romantic Comedy", action:"Telling a white lie", object:"A diamond", writers:40, countries:{"United States":26,"Canada":5,"Australia":5,"United Kingdom":3,"Ireland":1}},
  {id:21, genre:"Fairy Tale and/or Fantasy", action:"Expecting the worst", object:"A pocketknife", writers:40, countries:{"United States":28,"United Kingdom":4,"Canada":3,"Australia":4,"Zimbabwe":1}},
  {id:22, genre:"Comedy", action:"Cleaning a car", object:"A brochure", writers:40, countries:{"United States":26,"United Kingdom":4,"Canada":4,"Australia":3,"Ireland":2,"Vietnam":1}},
  {id:23, genre:"Romance", action:"Placing a wager", object:"Apple pie", writers:40, countries:{"United States":28,"Canada":7,"United Kingdom":2,"Ireland":1,"Poland":1,"Australia":1}},
  {id:24, genre:"Action and/or Adventure", action:"Searching for someone", object:"A sandwich", writers:40, countries:{"United States":28,"Canada":6,"United Kingdom":3,"Cambodia":1,"Australia":1,"Türkiye":1}},
  {id:25, genre:"Horror", action:"Serenading", object:"A bubble", writers:40, countries:{"United States":27,"Canada":6,"United Kingdom":2,"New Zealand":2,"Germany":1,"Japan":1,"Netherlands":1}},
  {id:26, genre:"Comedy", action:"Eating something sweet", object:"A briefcase", writers:40, countries:{"United States":23,"United Kingdom":7,"Canada":6,"Australia":1,"New Zealand":1,"Germany":1,"Switzerland":1}},
  {id:27, genre:"Drama", action:"Weeding", object:"A frying pan", writers:40, countries:{"United States":19,"United Kingdom":10,"Canada":4,"Australia":4,"New Zealand":2,"Portugal":1}},
  {id:28, genre:"Action and/or Adventure", action:"Blowing off steam", object:"A blindfold", writers:40, countries:{"United States":24,"Canada":6,"United Kingdom":4,"Australia":4,"Ireland":1,"Netherlands":1}},
  {id:29, genre:"Romance", action:"Freezing", object:"A teardrop", writers:40, countries:{"United States":23,"Canada":7,"United Kingdom":7,"Australia":2,"Turks and Caicos Islands":1}},
  {id:30, genre:"Suspense and/or Thriller", action:"Making popcorn", object:"A chimney", writers:40, countries:{"United States":29,"United Kingdom":5,"Australia":3,"Canada":2,"Ireland":1}},
  {id:31, genre:"Drama", action:"Getting scammed", object:"Chocolate milk", writers:40, countries:{"United States":33,"United Kingdom":3,"Canada":2,"Ireland":1,"Greece":1}},
  {id:32, genre:"Suspense and/or Thriller", action:"Disengaging", object:"A blender", writers:40, countries:{"United States":26,"Canada":6,"United Kingdom":5,"Australia":2,"New Zealand":1}},
  {id:33, genre:"Drama", action:"Memorizing", object:"Seaweed", writers:40, countries:{"United States":25,"Australia":5,"United Kingdom":4,"Canada":3,"Ireland":1,"New Zealand":1,"Italy":1}},
  {id:34, genre:"Fairy Tale and/or Fantasy", action:"Spilling the beans", object:"A postcard", writers:40, countries:{"United States":27,"Canada":5,"Australia":4,"United Kingdom":3,"Netherlands":1}},
  {id:35, genre:"Historical Fiction", action:"Setting a timer", object:"A recipe", writers:40, countries:{"United States":26,"United Kingdom":5,"Canada":4,"Australia":2,"Mexico":1,"New Zealand":1,"Italy":1}},
  {id:36, genre:"Comedy", action:"Browsing", object:"A ballot", writers:40, countries:{"United States":27,"United Kingdom":4,"Canada":3,"Australia":3,"Ireland":1,"Denmark":1,"Germany":1}},
  {id:37, genre:"Action and/or Adventure", action:"Shaving", object:"Firewood", writers:40, countries:{"United States":31,"United Kingdom":3,"Canada":2,"New Zealand":2,"Australia":1,"Ireland":1}},
  {id:38, genre:"Sci-Fi", action:"Descending", object:"A gumball", writers:40, countries:{"United States":28,"United Kingdom":4,"Canada":4,"Australia":3,"Luxembourg":1}},
  {id:39, genre:"Romance", action:"Ringing a doorbell", object:"A paper airplane", writers:40, countries:{"United States":31,"Australia":6,"United Kingdom":1,"Canada":1,"Spain":1}},
  {id:40, genre:"Action and/or Adventure", action:"Diving", object:"A campfire", writers:39, countries:{"United States":24,"United Kingdom":9,"Australia":5,"Canada":1}},
  {id:41, genre:"Historical Fiction", action:"Stubbing", object:"A blueberry", writers:40, countries:{"United States":30,"Canada":2,"United Kingdom":2,"Ireland":2,"Netherlands":2,"Australia":1,"Luxembourg":1}},
  {id:42, genre:"Romantic Comedy", action:"Walking a dog", object:"A trophy", writers:40, countries:{"United States":33,"Australia":3,"India":1,"Ireland":1,"Canada":1,"Denmark":1}},
  {id:43, genre:"Sci-Fi", action:"Predicting the future", object:"A bunk bed", writers:40, countries:{"United States":25,"Canada":5,"United Kingdom":4,"Australia":4,"Singapore":1,"Turks and Caicos Islands":1}},
  {id:44, genre:"Romantic Comedy", action:"Mansplaining", object:"A scarecrow", writers:40, countries:{"United States":26,"United Kingdom":5,"Canada":3,"Australia":3,"Ireland":1,"Greece":1,"Great Britain":1}},
  {id:45, genre:"Sci-Fi", action:"Quitting", object:"Pepper spray", writers:40, countries:{"United States":25,"Canada":9,"Australia":2,"United Kingdom":2,"Ireland":1,"France":1}},
  {id:46, genre:"Suspense and/or Thriller", action:"Setting off a firework", object:"Duct tape", writers:40, countries:{"United States":33,"United Kingdom":6,"Australia":1}},
  {id:47, genre:"Sci-Fi", action:"Getting fired from a job", object:"A bandage", writers:40, countries:{"United States":26,"Canada":6,"United Kingdom":4,"Australia":2,"Bulgaria":1,"India":1}},
  {id:48, genre:"Historical Fiction", action:"Tiptoeing", object:"An omelet", writers:40, countries:{"United States":22,"United Kingdom":9,"Canada":4,"Australia":3,"New Zealand":1,"Finland":1}},
  {id:49, genre:"Historical Fiction", action:"Ascending", object:"A clipboard", writers:40, countries:{"United States":24,"United Kingdom":4,"Canada":4,"Australia":4,"United Arab Emirates":1,"Spain":1,"Ireland":1,"New Zealand":1}},
  {id:50, genre:"Romance", action:"Sorting", object:"A cookbook", writers:40, countries:{"United States":28,"Canada":6,"United Kingdom":4,"Australia":1,"China":1}},
  {id:51, genre:"Comedy", action:"Cashing a check", object:"A birdhouse", writers:40, countries:{"United States":30,"Canada":4,"Australia":3,"United Kingdom":2,"Germany":1}},
  {id:52, genre:"Comedy", action:"Jumping into a pool", object:"Ravioli", writers:40, countries:{"United States":28,"Canada":5,"United Kingdom":4,"Australia":3}},
  {id:53, genre:"Action and/or Adventure", action:"A fist bump", object:"A seashell", writers:40, countries:{"United States":31,"United Kingdom":4,"Australia":3,"Canada":1,"Malaysia":1}},
  {id:54, genre:"Ghost Story", action:"Impressing", object:"An air pump", writers:40, countries:{"United States":22,"United Kingdom":6,"Canada":4,"Australia":2,"New Zealand":2,"Great Britain":1,"Ireland":1,"Thailand":1,"Italy":1}},
  {id:55, genre:"Fairy Tale and/or Fantasy", action:"Hunting for treasure", object:"A keychain", writers:40, countries:{"United States":22,"Australia":7,"United Kingdom":6,"Canada":2,"Spain":1,"Bolivia":1,"New Zealand":1}},
  {id:56, genre:"Horror", action:"Decorating", object:"An anchor", writers:40, countries:{"United States":24,"United Kingdom":6,"Canada":4,"Australia":4,"Netherlands":1,"Ireland":1}},
  {id:57, genre:"Fairy Tale and/or Fantasy", action:"Silencing", object:"A canoe", writers:40, countries:{"United States":25,"Canada":6,"United Kingdom":3,"Australia":2,"New Zealand":1,"Germany":1,"Ukraine":1,"Great Britain":1}},
  {id:58, genre:"Romantic Comedy", action:"Initiating", object:"Maple syrup", writers:40, countries:{"United States":31,"United Kingdom":4,"Germany":1,"Brazil":1,"Canada":1,"Virgin Islands (U.S.)":1,"Australia":1}},
  {id:59, genre:"Suspense and/or Thriller", action:"Fulfilling an obligation", object:"A washing machine", writers:40, countries:{"United States":27,"Australia":5,"United Kingdom":5,"Canada":3}},
  {id:60, genre:"Sci-Fi", action:"Running", object:"A banana", writers:40, countries:{"United States":26,"United Kingdom":6,"Canada":5,"Australia":2,"Switzerland":1}},
  {id:61, genre:"Romantic Comedy", action:"Getting hired for a job", object:"Poison", writers:40, countries:{"United States":27,"Australia":6,"Canada":2,"United Kingdom":3,"Ireland":1,"Netherlands":1}},
  {id:62, genre:"Drama", action:"Introducing", object:"A hamburger", writers:40, countries:{"United States":24,"United Kingdom":4,"Canada":4,"Australia":3,"Ireland":2,"Germany":1,"New Zealand":1,"Singapore":1}},
  {id:63, genre:"Suspense and/or Thriller", action:"Yelling", object:"A basket", writers:40, countries:{"United States":28,"United Kingdom":4,"Australia":4,"Canada":4}},
  {id:64, genre:"Sci-Fi", action:"Eating something spicy", object:"A footlocker", writers:40, countries:{"United States":32,"United Kingdom":3,"Australia":2,"Canada":1,"New Zealand":1,"Ireland":1}},
  {id:65, genre:"Suspense and/or Thriller", action:"Muting", object:"A lunch box", writers:40, countries:{"United States":24,"United Kingdom":6,"Australia":4,"Canada":3,"New Zealand":1,"Finland":1,"France":1}},
  {id:66, genre:"Horror", action:"Oscillating", object:"A spider", writers:40, countries:{"United States":27,"Australia":4,"Canada":4,"United Kingdom":2,"New Zealand":2,"Mexico":1}},
  {id:67, genre:"Horror", action:"Getting married", object:"A clothesline", writers:40, countries:{"United States":24,"Canada":6,"United Kingdom":4,"Australia":3,"Sweden":1,"Belgium":1,"New Zealand":1}},
  {id:68, genre:"Drama", action:"Jumping the gun", object:"A beard", writers:40, countries:{"United States":30,"Canada":4,"United Kingdom":4,"Australia":2}},
  {id:69, genre:"Romance", action:"Shielding", object:"A curler", writers:40, countries:{"United States":29,"United Kingdom":4,"Canada":3,"Australia":3,"New Zealand":1}},
  {id:70, genre:"Romance", action:"Investigating", object:"A shoebox", writers:40, countries:{"United States":28,"United Kingdom":4,"Australia":3,"Canada":2,"New Zealand":1,"Ireland":1,"Great Britain":1}},
  {id:71, genre:"Comedy", action:"Giving directions", object:"A bonfire", writers:40, countries:{"United States":26,"United Kingdom":5,"Australia":4,"Canada":2,"Luxembourg":1,"Spain":1,"Romania":1}},
  {id:72, genre:"Ghost Story", action:"Going on a first date", object:"A bathing suit", writers:40, countries:{"United States":27,"Canada":4,"Australia":3,"United Kingdom":2,"Norway":1,"New Zealand":1,"Ireland":1,"India":1}},
  {id:73, genre:"Romantic Comedy", action:"Smearing", object:"A hoodie", writers:40, countries:{"United States":25,"Australia":5,"Canada":4,"United Kingdom":3,"Ireland":2,"Mexico":1}},
  {id:74, genre:"Action and/or Adventure", action:"Eating something sour", object:"A solar panel", writers:40, countries:{"United States":29,"Australia":4,"Canada":3,"United Kingdom":3,"Portugal":1}},
  {id:75, genre:"Action and/or Adventure", action:"Picking up the pace", object:"Coffee", writers:40, countries:{"United States":24,"United Kingdom":9,"Canada":3,"Australia":3,"Great Britain":1}},
  {id:76, genre:"Romantic Comedy", action:"Grasping at straws", object:"A wallet", writers:40, countries:{"United States":25,"Australia":6,"United Kingdom":4,"Canada":4,"New Zealand":1}},
  {id:77, genre:"Romance", action:"Social distancing", object:"A clover", writers:40, countries:{"United States":28,"Australia":4,"Canada":3,"United Kingdom":2,"New Zealand":2,"Colombia":1}},
  {id:78, genre:"Ghost Story", action:"Turning on a light", object:"A fire extinguisher", writers:40, countries:{"United States":26,"Australia":7,"United Kingdom":4,"New Zealand":2,"Great Britain":1}},
  {id:79, genre:"Fairy Tale and/or Fantasy", action:"Squirming", object:"A ribbon", writers:40, countries:{"United States":24,"United Kingdom":6,"Australia":5,"Ireland":3,"Canada":2}},
  {id:80, genre:"Horror", action:"Daydreaming", object:"Goggles", writers:40, countries:{"United States":23,"United Kingdom":7,"Australia":4,"Canada":4,"South Africa":1,"New Zealand":1}},
  {id:81, genre:"Drama", action:"Deleting", object:"A cookie", writers:40, countries:{"United States":31,"Australia":3,"Canada":2,"Ireland":2,"United Kingdom":1,"Luxembourg":1}},
  {id:82, genre:"Fairy Tale and/or Fantasy", action:"Letting go", object:"Lemonade", writers:40, countries:{"United States":29,"Australia":4,"Canada":3,"United Kingdom":2,"Denmark":1,"Great Britain":1}},
  {id:83, genre:"Fairy Tale and/or Fantasy", action:"Sighing", object:"A rocking chair", writers:40, countries:{"United States":23,"Canada":11,"Australia":3,"United Kingdom":3}},
  {id:84, genre:"Romance", action:"Hiking", object:"A souvenir", writers:40, countries:{"United States":25,"Canada":6,"Australia":5,"United Kingdom":2,"New Zealand":1,"Ireland":1}},
  {id:85, genre:"Ghost Story", action:"Bouncing", object:"A microwave", writers:40, countries:{"United States":24,"Canada":5,"Australia":4,"United Kingdom":3,"Netherlands":1,"Puerto Rico":1,"Thailand":1,"Singapore":1}},
  {id:86, genre:"Historical Fiction", action:"Unwrapping", object:"A dinghy", writers:40, countries:{"United States":31,"United Kingdom":4,"Canada":4,"Australia":1}}
];

// Object semantic categories
const OBJECT_THEMES = {
  "Food & Drink": [9,16,18,23,24,31,33,38,41,48,52,58,60,62,75,81,82],
  "Vehicles": [1,2,10,57,86],
  "Household & Appliances": [15,17,27,30,32,59,67,85],
  "Containers": [26,63,64,65,70,76],
  "Clothing & Wearables": [6,28,72,73,80],
  "Tools & Implements": [3,5,11,14,21,46,54],
  "Paper & Documents": [22,34,35,36,49,50],
  "Body & Personal Care": [19,29,68,69],
  "Nature & Outdoors": [37,40,51,53,71,77],
  "Safety & Medical": [8,12,45,47,78],
  "Symbolic & Decorative": [20,42,43,44,55,79,84],
  "Light & Ephemeral": [7,25,39],
  "Animals": [66],
  "Furniture": [4,83],
  "Tech & Industrial": [56,61,74],
};

// Action semantic categories
const ACTION_THEMES = {
  "Movement": [14,38,40,42,48,49,52,60,66,75,79,84,85],
  "Eating & Cooking": [15,26,30,64,74],
  "Communication": [2,3,44,71],
  "Emotion & Vibe": [8,10,21,28,82,83],
  "Social & Romance": [4,39,53,54,58,62,67,72],
  "Pursuit & Search": [12,19,24,55,70],
  "Deception & Secrets": [16,20,31,34],
  "Performance & Display": [17,18,25,56],
  "Mental & Internal": [33,43,80],
  "Work & Money": [9,11,47,51,61],
  "Separation & End": [32,45,77,81],
  "Control & Silence": [57,65,69],
  "Vocal": [6,63],
  "Chore & Repair": [13,22,27,37],
  "Surprise & Chaos": [5,46,68],
  "Other": [1,7,29,35,36,41,46,50,73,78,86,76],
};

// Genre color palette
const GENRE_COLORS = {
  "Suspense and/or Thriller": "#5b2a86",
  "Romantic Comedy": "#ff6f91",
  "Horror": "#1a1a1a",
  "Sci-Fi": "#1f78b4",
  "Drama": "#e07a3a",
  "Ghost Story": "#6a8d92",
  "Comedy": "#ffb347",
  "Historical Fiction": "#8b5a2b",
  "Fairy Tale and/or Fantasy": "#9b59b6",
  "Romance": "#e74c3c",
  "Action and/or Adventure": "#27ae60",
};

// Publishing sample (50 writers, deterministic sample of every 69th from the 3,456-row Airtable)
// Researched via web search of names + locations. Bucket key:
//  TRAD_PUB   — traditional publisher (named press, agent, multiple titles)
//  INDIE_PUB  — self/indie books with traceable Amazon/Goodreads presence
//  SHORT_PUB  — published short fiction/poetry/reviews; no books
//  HOBBYIST   — Stage32/Substack/blog presence, no curated publication
//  UNCLEAR    — common name, can't disambiguate
//  NONE       — no writing-related findings online
const PUBLISHING_SAMPLE = [
  {name:"Aurora Akinpeloye", loc:"Grand Blanc, USA", bucket:"NONE", note:"no writing presence found"},
  {name:"Zachary Arama", loc:"Maple Valley, USA", bucket:"SHORT_PUB", note:"flash fiction at Fiction Attic Press; personal author site"},
  {name:"Shaun Baland", loc:"Mesa, USA", bucket:"HOBBYIST", note:"Stage 32 screenwriter profile; film reviews"},
  {name:"Phillip Bell", loc:"Frankston, AU", bucket:"UNCLEAR", note:"multiple Australian Phillip Bells, no Frankston fiction match"},
  {name:"Emily Bliss", loc:"Holden, USA", bucket:"NONE", note:"mental health counselor; children's book Emily Bliss is a different person"},
  {name:"Spencer Brinker", loc:"Lakeville, USA", bucket:"TRAD_PUB", note:"69+ children's books with Bearport Publishing (also Director there)"},
  {name:"Sherri Byrand", loc:"Los Angeles, USA", bucket:"NONE", note:"no writing presence found"},
  {name:"Casey Cavolaski", loc:"Mesa, USA", bucket:"NONE", note:"no writing presence found"},
  {name:"Georgia Clinton", loc:"Farmers Branch, USA", bucket:"NONE", note:"no writing presence found"},
  {name:"Chance Cougar", loc:"West Burlington, USA", bucket:"NONE", note:"no writing presence found"},
  {name:"S.E. Daniels", loc:"Camden, USA", bucket:"UNCLEAR", note:"common name, no Camden match"},
  {name:"Amanda Dew", loc:"Ipswich, UK", bucket:"INDIE_PUB", note:"The Seer indie YA trilogy on Amazon (2021–2022)"},
  {name:"Tracy Dunstan", loc:"Argyle, Canada", bucket:"UNCLEAR", note:"NY-based Tracy Nicole Dunstan published with Arcadia but not the Canadian match"},
  {name:"Constance Evelyn", loc:"Ottawa, Canada", bucket:"NONE", note:"no Ottawa writer match"},
  {name:"M. M. Fonseca", loc:"Boston, USA", bucket:"NONE", note:"no writer match for this name"},
  {name:"TR Garcia", loc:"Inman, USA", bucket:"NONE", note:"no match found"},
  {name:"Josh Goller", loc:"Oak Grove, USA", bucket:"SHORT_PUB", note:"editor of The Molotov Cocktail flash zine; many lit-mag bylines (Portland match is plausible)"},
  {name:"Amy Grinna", loc:"Decorah, USA", bucket:"NONE", note:"Decorah resident on food-co-op board; no writing credits"},
  {name:"Laura Harbin", loc:"Toronto, Canada", bucket:"TRAD_PUB", note:"TV writer/producer; episodes of The Next Step & Lost & Found (screen, not prose)"},
  {name:"Amanda Henke", loc:"Minneapolis, USA", bucket:"TRAD_PUB", note:"children's picture book Not A Book About Bunnies (Starry Forest, 2023); Hamline MFA"},
  {name:"RJG Hougham", loc:"Bournemouth, UK", bucket:"SHORT_PUB", note:"active writer persona; claims a 2020 debut, unverified"},
  {name:"Richard Jackson", loc:"Yateley, UK", bucket:"UNCLEAR", note:"name overlaps with S&S editor, poet, academic"},
  {name:"Romilly Jones", loc:"London, UK", bucket:"NONE", note:"no author/poet match"},
  {name:"Molly Kelly", loc:"Cork, Ireland", bucket:"UNCLEAR", note:"common name; dominated by other Irish writers"},
  {name:"E. H. Knightly", loc:"Calgary, Canada", bucket:"NONE", note:"no Calgary author match"},
  {name:"Meaghan Lane", loc:"Spokane, USA", bucket:"NONE", note:"no Spokane writer match"},
  {name:"Margo Lemberger", loc:"New York City, USA", bucket:"SHORT_PUB", note:"bylines in Jewish Forward, Arts Indiana, NUVO; WritersWeekly 24h contest winner 2024"},
  {name:"Cat Love", loc:"Newark, USA", bucket:"NONE", note:"only unrelated books titled 'Cat Love' surface"},
  {name:"Robert Mancer", loc:"San José, USA", bucket:"NONE", note:"no published writer match"},
  {name:"Jennifer Maveety", loc:"Ashland, USA", bucket:"SHORT_PUB", note:"book reviewer for Foreword Reviews; no original works"},
  {name:"Shanna McNair", loc:"Topsham, USA", bucket:"TRAD_PUB", note:"debut novel Soul Retrieval (High Frequency Press, 2025); founded The Writer's Hotel"},
  {name:"Laila Miller", loc:"Perth, AU", bucket:"UNCLEAR", note:"possible match to children's writer but name doesn't quite line up"},
  {name:"Adam Motz", loc:"Chicago, USA", bucket:"INDIE_PUB", note:"children's book You Come From Love (Gatekeeper Press); attorney/writer"},
  {name:"Pran Nibber", loc:"Calgary, Canada", bucket:"NONE", note:"medical advisor with health-industry bylines, no fiction"},
  {name:"Lombard Olivier", loc:"Youngsville, USA", bucket:"NONE", note:"no author results"},
  {name:"Nicholas G Patides", loc:"Tampa, USA", bucket:"NONE", note:"no writing-related results"},
  {name:"Stephen Polk", loc:"Nanaimo, Canada", bucket:"UNCLEAR", note:"Stephen T. Polk SFF blog exists; Nanaimo link unconfirmed"},
  {name:"R.C. Ranger", loc:"Lexington, USA", bucket:"NONE", note:"results dominated by Ranger's Apprentice series, no R.C. Ranger"},
  {name:"Edouard Riviera", loc:"Oviedo, USA", bucket:"NONE", note:"no writing results in Oviedo FL"},
  {name:"Russell Rudzinski", loc:"Fayetteville, USA", bucket:"UNCLEAR", note:"UArk architecture prof; namesake wrote 1969 Japanese cookbook"},
  {name:"Emily Sayers", loc:"Richmond, USA", bucket:"UNCLEAR", note:"only Goodreads reader profile and unrelated namesakes"},
  {name:"Melina Shaughnessy", loc:"St Albans, UK", bucket:"UNCLEAR", note:"Goodreads reader profile, no authored works found"},
  {name:"Wendell Smith", loc:"Bell Buckle, USA", bucket:"UNCLEAR", note:"name dominated by historic Pittsburgh Courier sportswriter"},
  {name:"Elizabeth Stewart", loc:"Gibsonia, USA", bucket:"UNCLEAR", note:"multiple published Elizabeth Stewarts, none in Gibsonia PA"},
  {name:"Carmen Tadich", loc:"Eastend, Canada", bucket:"NONE", note:"not in Saskatchewan Writers' Guild listings"},
  {name:"Sierra Tofelt", loc:"Sacramento, USA", bucket:"TRAD_PUB", note:"Stone Soup, Scholastic Art & Writing Awards, 20+ youth poetry awards"},
  {name:"Gerhardus van Wilgen", loc:"Voorhees, USA", bucket:"SHORT_PUB", note:"playwright (MA theatre), Dramatists Guild, HowlRound essays"},
  {name:"Megan Warren", loc:"Austin, USA", bucket:"INDIE_PUB", note:"self-pub audio fiction podcast The Curse of Botley's Hedge"},
  {name:"John William", loc:"Hayes, UK", bucket:"UNCLEAR", note:"name too common, no disambiguating findings"},
  {name:"Marianne Xenos", loc:"Amherst, USA", bucket:"TRAD_PUB", note:"Writers of the Future Q4 2022 first place; Typehouse, Orion's Belt, anthology bylines"},
];

const PUB_BUCKETS = {
  TRAD_PUB: {label: "Traditionally published", color: "#a8d99c", desc: "Books with named publishers, agents, or multiple titles. Picture books, novels, screen credits."},
  INDIE_PUB: {label: "Indie / self-published", color: "#9bb1ff", desc: "Self-pub or hybrid press books on Amazon / Goodreads. Often a single title."},
  SHORT_PUB: {label: "Short-form published", color: "#e7c069", desc: "Lit-mag bylines, contest wins, dramaturgy, criticism — no books."},
  HOBBYIST: {label: "Hobbyist / amateur", color: "#c89a6c", desc: "Stage32, Substack, blog, Wattpad — public but uncurated."},
  UNCLEAR: {label: "Unclear (common name)", color: "#6b7480", desc: "Name too common to disambiguate from web search alone."},
  NONE: {label: "No findings", color: "#e08a99", desc: "No writing-related results online — likely unpublished entrants."},
};

// Prior 500FC finalists (top 10 + Honorable Mentions) — 2023, 2024, 2025
// Used as a watchlist + sanity check against the 2026 roster.
const PRIOR_FINALISTS = [
  // 2025
  {year: 2025, place: "#1", name: "Chloe Paige", loc: "Geelong, AU", story: "'Roo Sprayers"},
  {year: 2025, place: "#2", name: "Autumn Bettinger", loc: "—", story: "Simmering"},
  {year: 2025, place: "#3", name: "Miranda Lee", loc: "—", story: "I Am"},
  {year: 2025, place: "#4", name: "Ben Kaestner-Frenchman", loc: "—", story: "The Lost God of Aldo da Costa"},
  {year: 2025, place: "#5", name: "Ben Daggers", loc: "—", story: "This Rectangle"},
  {year: 2025, place: "#6", name: "Charlotte Racioppo", loc: "—", story: "Inheritance in Green and Yellow"},
  {year: 2025, place: "#7", name: "Acadia Hansen", loc: "Athens, OH", story: "Olive Oil"},
  {year: 2025, place: "#8", name: "John Curtis Bigelow", loc: "—", story: "Stormproof"},
  {year: 2025, place: "#9", name: "Elizabeth Hakken Candido", loc: "—", story: "These Sins Will Eat You Alive"},
  {year: 2025, place: "#10", name: "Victoria Dyson", loc: "—", story: "Zambian Heat and Blood"},
  {year: 2025, place: "HM", name: "Monica Mukerjee", loc: "—", story: "The Magpie"},
  {year: 2025, place: "HM", name: "Zoe Rose", loc: "—", story: "The Bone Keeper"},
  {year: 2025, place: "HM", name: "Avery Other", loc: "—", story: "A Sour Feast of Fears"},
  {year: 2025, place: "HM", name: "Liz Eyding", loc: "—", story: "Your Mother's Daughter"},
  {year: 2025, place: "HM", name: "Debbie Voetberg", loc: "—", story: "Chance of a Lifetime"},
  // 2024
  {year: 2024, place: "#1", name: "S.C. Mills", loc: "Seattle, WA", story: "Watchmaker's Hands"},
  {year: 2024, place: "#2", name: "Rachel Harbaugh", loc: "—", story: "When The Blue Smoke Drowns"},
  {year: 2024, place: "#3", name: "Melissa Jornd", loc: "—", story: "Tomorrow, Today"},
  {year: 2024, place: "#4", name: "Elysia Rourke", loc: "—", story: "Men Don't Hear Crops These Days"},
  {year: 2024, place: "#5", name: "Sally Demarest", loc: "—", story: "All the Ways to Die in Yellowstone"},
  {year: 2024, place: "#6", name: "Sarah Cousins", loc: "—", story: "To Feel the Night"},
  {year: 2024, place: "#7", name: "Myra Scott", loc: "—", story: "Elijah²"},
  {year: 2024, place: "#8", name: "Julian Shen", loc: "—", story: "Foreign Soil"},
  {year: 2024, place: "#9", name: "Beret Olsen", loc: "—", story: "The Tower, Old Milwaukee, and the Stars"},
  {year: 2024, place: "#10", name: "Lauren Sullivan", loc: "—", story: "Parallels"},
  {year: 2024, place: "HM", name: "Kristi Schirtzinger", loc: "—", story: "The Collector"},
  {year: 2024, place: "HM", name: "Erin West", loc: "—", story: "When Your Dog Dies"},
  {year: 2024, place: "HM", name: "JA Logwood", loc: "—", story: "Gift of the Kraken"},
  {year: 2024, place: "HM", name: "Chase Davis", loc: "—", story: "Lessons from a Drowning Star Chart"},
  {year: 2024, place: "HM", name: "Dylan Archer", loc: "—", story: "Doubles"},
  {year: 2024, place: "HM", name: "T. Kogan", loc: "—", story: "For Dad: In Three Acts"},
  {year: 2024, place: "HM", name: "Kenton Smalley", loc: "—", story: "Don't call us what we are"},
  {year: 2024, place: "HM", name: "Evan O'Cuana", loc: "—", story: "We Will Always Be Back Then"},
  {year: 2024, place: "HM", name: "Lior Forest", loc: "—", story: "Constellations Not Included"},
  {year: 2024, place: "HM", name: "Zelda C. Thorne", loc: "—", story: "Under my Skin"},
  // 2023
  {year: 2023, place: "#1", name: "Leila Murton Poole", loc: "London, UK", story: "Daddy, Are You In The Ground Or In The Sky?"},
  {year: 2023, place: "#2", name: "Josephine Queen", loc: "—", story: "Instructions on How to Grieve"},
  {year: 2023, place: "#3", name: "Harry Cunningham", loc: "—", story: "Don't Skewer the Messenger"},
  {year: 2023, place: "#4", name: "Alexandra Otto", loc: "—", story: "A Series of Real World Problems in Mathematics"},
  {year: 2023, place: "#5", name: "Jennifer Gunner", loc: "—", story: "Regret To Inform You"},
  {year: 2023, place: "#6", name: "Kirk Lee", loc: "—", story: "Nokotta"},
  {year: 2023, place: "#7", name: "Scott Russell", loc: "—", story: "Give the Devil His Due"},
  {year: 2023, place: "#8", name: "Lottie Green", loc: "—", story: "Earl Grey with the Reaper"},
  {year: 2023, place: "#9", name: "Laura J. Rayne", loc: "—", story: "Everything I Needed"},
  {year: 2023, place: "#10", name: "Laurie Swinarton", loc: "—", story: "I'm the Tag on Your Mattress"},
  {year: 2023, place: "HM", name: "Rocquel Motta", loc: "—", story: "The In Between"},
  {year: 2023, place: "HM", name: "Avery Other", loc: "—", story: "Eventually"},
  {year: 2023, place: "HM", name: "Dana Bentley", loc: "—", story: "The Golden Hour"},
  {year: 2023, place: "HM", name: "Zelda C. Thorne", loc: "—", story: "Let there be Darkness"},
  {year: 2023, place: "HM", name: "Bryn Takashiba", loc: "—", story: "The Inksmith"},
  {year: 2023, place: "HM", name: "Michael Capbarat", loc: "—", story: "Alive In Salem Woods"},
  {year: 2023, place: "HM", name: "Alison Schiller", loc: "—", story: "Hope & Other Ailments"},
  {year: 2023, place: "HM", name: "Nathaniel Chaney", loc: "—", story: "Safety First"},
  {year: 2023, place: "HM", name: "Asher Garcia", loc: "—", story: "Nerve Damage"},
  {year: 2023, place: "HM", name: "Indigo LaRue", loc: "—", story: "My Nana's Magic"},
];

// Compete data — three Garske groups with researched competitor profiles
// Buckets: TRAD_PUB / INDIE_PUB / SHORT_PUB / NYCM_VET / HOBBYIST / UNCLEAR / NONE
const COMPETE = {
  benton: {
    name: "Benton Garske",
    loc: "Maple Grove, MN",
    group: 53,
    prompt: {genre: "Action and/or Adventure", action: "A fist bump", object: "A seashell"},
    summary: "Light field. No prior 500FC finalists, only 3 competitors with traceable book-length publishing. Top-10 cutoff looks achievable with a solid action-adventure execution.",
    tier1: [], // no confirmed prior finalists
    tier2: [
      {name: "Noor Amjad", loc: "Calgary, Canada", bucket: "INDIE_PUB", note: "Self-pub action/fantasy novel 'The Unfolding' (2023). Genre is literally in her wheelhouse — top threat for an A/A prompt."},
      {name: "Adam Motz", loc: "Chicago, IL", bucket: "INDIE_PUB", note: "Children's book 'You Come From Love' (Gatekeeper Press); attorney/writer. Disciplined craft but kids-book voice differs from adult action."},
      {name: "Jim Furry", loc: "Conway, SC", bucket: "INDIE_PUB", note: "Retired FBI agent, 2 indie books, SWA short-story first-place winner. Genuine short-form competition pedigree + FBI background = dark horse for A/A."},
    ],
    tier3: [
      {name: "Christa Okon", loc: "Albuquerque, NM", bucket: "INDIE_PUB", note: "Indie memoir (Nazi to Empath) + children's book; intense lived experience."},
      {name: "Howard Comen", loc: "Charleston, SC", bucket: "UNCLEAR", note: "Retired PI with 40 years of operational stories; developing fiction series, raw material on-genre."},
    ],
    roster: [
      "Remus A | Kuala Lumpur, Malaysia",
      "Noor Amjad | Calgary, Canada",
      "Ruthy Bell | Winston Salem, NC",
      "Jennifer Beroshi | London, UK",
      "Ally Brooks | Burlington, NC",
      "Sian Brossard | Perth Amboy, NJ",
      "Anne Carrillo | Houston, TX",
      "Howard Comen | Charleston, SC",
      "Jane Connors | Sydney, Australia",
      "Kathryn Cook | Sydney, Australia",
      "Dusty Crocker | Flower Mound, TX",
      "Rebekah Diaz | Fort Worth, TX",
      "Brian Dobbs | Whitestown, IN",
      "Jim Furry | Conway, SC",
      "Benton Garske | Maple Grove, MN",
      "Lesley Grossblatt | Carson City, NV",
      "Michael Hudgins | Midland, TX",
      "Adriana Isaza | Shelburne Falls, MA",
      "Emma Johnson | Norwich, UK",
      "D Kestowers | Virginia Beach, VA",
      "Kelly Lawson | Maple Glen, PA",
      "Kit Liechtensteinflag | Verona, WI",
      "Helena Martin | Newton, NC",
      "Mila McCurrach | Jupiter, FL",
      "Cameron Medlin | Niles, MI",
      "Adam Motz | Chicago, IL",
      "D. Murphy | Cleveland, OH",
      "Christa Okon | Albuquerque, NM",
      "Dabi Olu-Odugbemi | London, UK",
      "Mette Ovringmo | Longmont, CO",
      "M Palla | Tinton Falls, NJ",
      "Andrea Partsafas | Medford, OR",
      "Hollie Pearce | Cairns, Australia",
      "Jenna Piotrzkowski | Fond du Lac, WI",
      "J. Ragland | Los Angeles, CA",
      "Stephen Robinson | Oxted, UK",
      "Shelly Romine | Clarkston, WA",
      "Randi Rossman | Austell, GA",
      "Adele Vogt | Salisbury, MD",
      "Kirstin Yu | Chicago, IL",
    ],
  },
  tom: {
    name: "Tom Garske",
    loc: "Denver, CO",
    group: 56,
    prompt: {genre: "Horror", action: "Decorating", object: "An anchor"},
    summary: "Heaviest competition of the three groups. Two confirmed NYCM medalists (Schreier, Jizba) plus a serious litmag writer (Nedelka) and a near-Penguin novelist (Rhodes). No prior 500FC finalists, but MM Schreier has podium finishes in harder NYCM formats.",
    tier1: [
      {name: "MM Schreier", loc: '"Chilly by the Sea, Imagination"', bucket: "NYCM_VET", note: "NYCM Short Story 2nd (2024), Flash Fiction 3rd (2025) + 10th (2022); two short-story collections (Monstrosity, Humanity / Bruised, Resilient); pubs in Flash Fiction Online. The whimsical entry location matches her published bio verbatim. THE one to beat."},
      {name: "Susan Eileen Jizba", loc: "Los Angeles, CA", bucket: "NYCM_VET", note: "Multi-year NYCM veteran: top-15 in FFC 2022, top-15 Short Screenplay 2022, HMs in FFC/250/100, 4th in 100-word microfiction R1, 79+ FilmFreeway awards. Knows the NYCM judging mindset."},
    ],
    tier2: [
      {name: "Shannon CC Nedelka", loc: "Dover, NH", bucket: "SHORT_PUB", note: "Physician + fiction writer; flash piece 'Trauma' in West Trade Review (Mar 2023); Grub Street trained. Litmag craft without proven NYCM track record."},
      {name: "Rhonda Rhodes", loc: "Houston, TX", bucket: "INDIE_PUB", note: "Novelist 'Almost Magic' won WGT Manuscript Contest, secured agent, near-Penguin/Berkley deal; owns The Lift bookstore. Novelist craft — less proven on short form."},
      {name: "Zachary Arama", loc: "Maple Valley, WA", bucket: "SHORT_PUB", note: "Flash fiction at Fiction Attic Press; personal author site."},
    ],
    tier3: [
      {name: "Simon Boudreau", loc: "Montréal, Canada", bucket: "UNCLEAR", note: "A Simon Boudreault (spelling differs) is a Montréal playwright + BMO Dramatic Author Prize 2014 winner — possible same person."},
    ],
    roster: [
      "Chaos - | Netherlands",
      "Zachary Arama | Maple Valley, WA",
      "Jordan Beck | Milwaukee, WI",
      "Simon Boudreau | Montréal, Canada",
      "Rob Bremer | Lacombe, LA",
      "Stephanie Chatt | Calgary, Canada",
      "Allison Clark | Antelope, CA",
      "Noah Clinton | Manorcunningham, Ireland",
      "Cassiel Code | Cambridge, UK",
      "James Curran | Maspeth, NY",
      "Courtney Evans | Beachlands, Australia",
      "Tom Garske | Denver, CO",
      "AJ George | London, UK",
      "Nicole Green | Oakland, CA",
      "Anthony Hawkins | London, UK",
      "Kenny Hicks | Denver, CO",
      "Susan Eileen Jizba | Los Angeles, CA",
      "Haych Lachapelle | Seattle, WA",
      "Tash Ledger | Margaret River, Australia",
      "Evangeline Lee | Tucson, AZ",
      "Brittany Marlatt | Calgary, Canada",
      "Sara Myers | Belleville, IL",
      "Jaime Nabrynski | Goodlettsville, TN",
      "Shannon CC Nedelka | Dover, NH",
      "Abby Olsen | Jamul, CA",
      "Larry Padgett | La Habra Hgts, CA",
      "Alexander Price | Cardiff, UK",
      "Phillip Register | Durham, NC",
      "Rhonda Rhodes | Houston, TX",
      "David Roe | Mahone Bay, Canada",
      "Bruce Rose | Great Barrington, MA",
      "Deborah Rose | Coseley, UK",
      "MM Schreier | Chilly by the Sea, Imagination",
      "Glenda Scott | Stoneville, Australia",
      "Michael Seckman | Houston, TX",
      "Lynn St.Bernard | Millersville, MD",
      "Jeannine Ugalde | Thousand Oaks, CA",
      "Isabella vigier rathor | Manchester, UK",
      "Tamara Yarnold | Brisbane, Australia",
      "Ami Zelkova | Aberdeen, WA",
    ],
  },
  valerie: {
    name: "Valerie Garske",
    loc: "Mesa, AZ",
    group: 84,
    prompt: {genre: "Romance", action: "Hiking", object: "A souvenir"},
    selfPub: "INDIE_PUB",
    selfPubNote: "★ Valerie writes as VJ Garske — indie fantasy author with 4+ titles: The Moonstone Legacy series (Raven, Dragon, Griffin Moonstone) and Cowboys, Wizards & Liars. Active Amazon storefront, Goodreads author profile, Literary Titan award coverage. Comes in with real craft.",
    summary: "Valerie is herself a credentialed indie fantasy author (VJ Garske, 4+ titles). ONE confirmed prior 500FC finalist (Acadia Hansen, #7 in 2025) + three other credentialed competitors. With Valerie's own pub history, this becomes a top-2 contest for the lead slots — Acadia vs. Valerie — with ~4 other slots fought over by Bellani/Coelho/Greco and the unknowns.",
    tier1: [
      {name: "Acadia Hansen", loc: "Athens, OH", bucket: "NYCM_VET", note: "★ CONFIRMED 2025 500FC #7 FINALIST (story 'Olive Oil'). Already cleared every round to the top tier last year. Plan around her."},
    ],
    tier2: [
      {name: "Alexandria Bellani", loc: "Canberra, Australia", bucket: "NYCM_VET", note: "Prior 500FC entrant — story 'The God of Giving Up' featured on nycmidnight.com; 2nd place Not Quite Write Prize Jan 2025; pub in Elegant Literature; forthcoming Rat Bag Lit. Active short-fiction competitor."},
      {name: "Steph Coelho", loc: "Montreal, Canada", bucket: "SHORT_PUB", note: "Professional writer/editor; Book Riot contributor; bylines at Washington Post + Healthline; runs writing prompt newsletter; documented NYCM community involvement (Flash Fiction Master List)."},
      {name: "Ralph Greco Jr.", loc: "Ligonier, PA", bucket: "TRAD_PUB", note: "Internationally published short-story author across 8 countries; collections via Scimitar Edge (UK), Audible; anthology contributions. Veteran of the short-fiction submission grind."},
    ],
    tier3: [
      {name: "Leigh Clements", loc: "Toronto, Canada", bucket: "INDIE_PUB", note: "Founder of Shot In The Dark Mysteries; commercial mystery writer + serialized novels — game/script craft, less literary."},
    ],
    roster: [
      "Michael Arden | Covington, KY",
      "Madelaine Beevers | London, UK",
      "Alexandria Bellani | Canberra, Australia",
      "Michael Bevan | Tofield, Canada",
      "Hayley Brooke | Franklin Lakes, NJ",
      "Madalina Capra | Westland, MI",
      "Leigh Clements | Toronto, Canada",
      "Steph Coelho | Montreal, Canada",
      "Orion Fang | Fremont, CA",
      "Valerie Garske | Mesa, AZ",
      "Beth Garvey | Christchurch, New Zealand",
      "Ralph Greco | Ligonier, PA",
      "Alleul Greene | Houston, TX",
      "Acadia Hansen | Athens, OH",
      "Erin Hilton | Hobart, Australia",
      "Ella Hynes | Calgary, Canada",
      "Richard Jaramillo | Taylorsville, UT",
      "Amy Johnson | San Francisco, CA",
      "Romilly Jones | London, UK",
      "Kirsten Kaiser | Harrington Park, NJ",
      "M. Kelleher | New Orleans, LA",
      "Sophia Leigh | Decatur, GA",
      "Aro Levi | Brisbane, Australia",
      "Ian Long | Lancaster, PA",
      "Maree Lucks | Melbourne, Australia",
      "Kendal M | Belleville, IL",
      "Elizabeth Marrero | Little Rock, AR",
      "Brandi Miller | Nashville, TN",
      "Maverick Monroe | Brooklyn, NY",
      "Sean Ness | Canberra, Australia",
      "Nickolis Parker | Belton, TX",
      "Stephen Polk | Nanaimo, Canada",
      "Rachel Quinlan | Athenry, Ireland",
      "Lakshmi Rasa | Chicago, IL",
      "Camille Rodriguez | San Jose, CA",
      "Anita T | Mississauga, Canada",
      "Ben Thom | Romeoville, IL",
      "Shane Tilston | Brooklyn, NY",
      "Garrett Vargas | Seattle, WA",
      "Thomas Ware | Arlington, VA",
    ],
  },
};

// Group competitiveness scoring (full sweep)
// +10 per prior 500FC finalist, +5 per NYCM_VET, +3 per TRAD_PUB, +2 per INDIE_PUB, +1 per SHORT_PUB
// Built from full 3,456-writer publishing sweep (50 parallel research agents, 5M tokens, 22min run)
const GROUP_SCORES = {
  "56": {
    "score": 19,
    "finalists": 0,
    "vet": 2,
    "trad": 0,
    "indie": 2,
    "short": 5,
    "flags": [
      "NYCM vet: Susan Eileen Jizba \u2014 Confirmed prior NYCM micro-fiction challenge finalist (placed 4th); LA award-win",
      "NYCM vet: MM Schreier \u2014 Placed 3rd in NYCmidnight Flash Fiction Challenge; author of two short story col",
      "Indie pub: AJ George \u2014 JA George, indie romance author with website authorjageorge.com",
      "Indie pub: Larry Padgett \u2014 Travel/photography writer with own site and editor of WindowOnPhotography"
    ]
  },
  "25": {
    "score": 22,
    "finalists": 1,
    "vet": 0,
    "trad": 0,
    "indie": 6,
    "short": 0,
    "flags": [
      "\u2605 Prior 500FC finalist: Ben Daggers",
      "Indie pub: Michael Barbato-Dunn \u2014 Author of fantasy baseball novel Lord Bart and Bite-Sized Stories; Philadelphia",
      "Indie pub: Dana Jelter \u2014 Burlington VT writer/producer with self-pub short story collection and video gam",
      "Indie pub: Tabatha Manning \u2014 Tab Manning self-published two books on Amazon; podcaster/coach in Atlanta"
    ]
  },
  "24": {
    "score": 5,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 1,
    "short": 3,
    "flags": [
      "Indie pub: Penny Thompson \u2014 14 books on Goodreads incl. KissMet Quarterly romance collection",
      "Short pub: Jaime Gill \u2014 award-winning short fiction in Litro, The Phare, Bridport Pr",
      "Short pub: Thomas Pahl \u2014 Contributing writer to Ocracoke Observer; local journalism",
      "Short pub: Dan Titmuss \u2014 Brooklyn writer/performer; one-man shows, sketch, award-winn"
    ]
  },
  "45": {
    "score": 14,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 5,
    "short": 4,
    "flags": [
      "Indie pub: Jessica Benda \u2014 Cal State Fullerton journalism alum, published 'Let There Be Light' Hanukkah stu",
      "Indie pub: E. M. Chapel \u2014 author of The Weight of Silver (Atmosphere Press); Seattle-based speculative fic",
      "Indie pub: Mary Jane Copps \u2014 Halifax-based 'The Phone Lady,' author of The Phone Book (2015), a self-publishe",
      "Indie pub: Alyssa Forelsket \u2014 operates 'Literary Whore' website publishing erotic fiction and boudoir content;"
    ]
  },
  "6": {
    "score": 14,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 4,
    "short": 3,
    "flags": [
      "Trad pub: Zachary Seager \u2014 Paris-based writer/editor; edited multiple anthologies for Macmillan Collector's",
      "Indie pub: Jenna Anderson \u2014 Minneapolis-born romance/fiction author with 28 books on Goodreads (Healing Touc",
      "Indie pub: James Bushill \u2014 author of novel 'Adam', Brisbane-based, on Goodreads",
      "Indie pub: Jade Hart \u2014 30 books on Goodreads (Coffee and Cockpits, Ocean Breeze Series); Australian tie"
    ]
  },
  "67": {
    "score": 8,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 1,
    "short": 3,
    "flags": [
      "Trad pub: F H Mauchline \u2014 Fiona Mauchline, Oxford-based EFL materials writer for graded readers, teacher d",
      "Indie pub: Holly Pepe \u2014 Staten Island author with novella 'Cruise to Nowhere' and other works on Amazon/",
      "Short pub: Kathleen Clauson \u2014 published short fiction, novella Eva Galuska and the Christm",
      "Short pub: Lori McCay-Peet \u2014 Dalhousie academic researcher in information management; dis"
    ]
  },
  "15": {
    "score": 5,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 0,
    "short": 2,
    "flags": [
      "Trad pub: Gant Laborde \u2014 Author of 'Learning TensorFlow.js' published by O'Reilly; Google Developer Exper",
      "Short pub: Ethan Holtzinger \u2014 sports journalist at Cronkite News / State Press, Phoenix",
      "Short pub: Mary Kate Schmermund \u2014 Writer, editor, content contributor to The Montclair Girl; q"
    ]
  },
  "53": {
    "score": 11,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 4,
    "short": 0,
    "flags": [
      "Trad pub: Adam Motz \u2014 Author of children's book 'You Come from Love' (Goodreads, Amazon); Chicago-base",
      "Indie pub: Noor Amjad \u2014 Calgary-based fantasy author with books on Amazon and Bookshop.org",
      "Indie pub: HOWARD Comen \u2014 author of Angels on the Bridge (AuthorHouse), also feature writing for NYT/WaPo ",
      "Indie pub: Jim Furry \u2014 retired FBI agent in Conway SC; self-published Fidelity Bravery & Integrity (201"
    ]
  },
  "52": {
    "score": 19,
    "finalists": 0,
    "vet": 1,
    "trad": 1,
    "indie": 4,
    "short": 3,
    "flags": [
      "NYCM vet: Myna Chang \u2014 won 6th overall in 2019 NYCMidnight Short Story Competition; author of The Poten",
      "Trad pub: Ray Gastil \u2014 Seattle urban planner, published author on architecture/urbanism incl. 'Beyond t",
      "Indie pub: Torie Brame \u2014 self-pub novel The Grown-Up Lives of Runaways on Amazon; matches Charleston, SC",
      "Indie pub: Brian Brijbag \u2014 self-published author of 11 books (legal/business); Spring Hill, FL attorney"
    ]
  },
  "77": {
    "score": 15,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 3,
    "short": 6,
    "flags": [
      "Trad pub: Salena Casha \u2014 150+ publications, picture books (The Naming of Lan Caihe), Wigleaf Top 50, Push",
      "Indie pub: Drew Hayes \u2014 Author of Super Powereds, NPCs, Fred the Vampire Accountant; prolific indie auth",
      "Indie pub: yoshimi miyazaki \u2014 Self-published seven-book series of romance novels; based in Watsonville CA",
      "Indie pub: Christopher Williams \u2014 Southwest Atlanta author of Fear Me Now, The Devil's Eclipse, The Bounty, Memoir"
    ]
  },
  "13": {
    "score": 12,
    "finalists": 0,
    "vet": 0,
    "trad": 2,
    "indie": 2,
    "short": 2,
    "flags": [
      "Trad pub: Rachell Abalos \u2014 Picture book Our Nipa Hut (Northern Lights Book Award 2024), agented by Belcastr",
      "Trad pub: Erica Orloff \u2014 Author of 20+ novels via Penguin Random House and other major publishers",
      "Indie pub: Aaban Aslam \u2014 Barnstaple-based debut graphic novel The Widening Gyre Chapter One in 2025 via B",
      "Indie pub: Katrina Gallagher \u2014 self-published Achill-based author of novels 'Fifteen Ascending' and 'BACK'"
    ]
  },
  "28": {
    "score": 27,
    "finalists": 0,
    "vet": 1,
    "trad": 3,
    "indie": 4,
    "short": 5,
    "flags": [
      "NYCM vet: J Hardy Carroll \u2014 confirmed NYC Midnight participant who placed 1st in a group; also author of Haw",
      "Trad pub: Tanvi Bajaj \u2014 Routledge co-authored academic books (Performing Arts and Therapeutic Implicatio",
      "Trad pub: Tanya Eby \u2014 USA Today bestselling novelist (Man Hands romcom series with Sarina Bowen), Audi",
      "Trad pub: Kari Maaren \u2014 Author of Weave a Circle Round (Tor Books 2017), Canadian YA novelist and cartoo"
    ]
  },
  "9": {
    "score": 6,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 1,
    "short": 1,
    "flags": [
      "Trad pub: Fiona Cameron \u2014 contemporary fiction author; multiple novels including A Sensible Woman, By Hear",
      "Indie pub: Lina Lambert \u2014 Inspirational writer/widow with website, Medium and Amazon author profiles; essa",
      "Short pub: Adam Syty \u2014 High school English teacher with stories published on Sympos"
    ]
  },
  "18": {
    "score": 16,
    "finalists": 0,
    "vet": 0,
    "trad": 2,
    "indie": 3,
    "short": 4,
    "flags": [
      "Trad pub: Carolyn Harris \u2014 Toronto royal historian, multiple books with Dundurn and Palgrave Macmillan",
      "Trad pub: Deb Mantella \u2014 Author of My Sweet Vidalia (novel), SIBA Trio selection and Pat Conroy Prize lon",
      "Indie pub: Kay Carrigan \u2014 authored children's book Peter Goes to the Park; Waco ISD teacher",
      "Indie pub: Jess Manuszak \u2014 Bestselling author/copywriter; books In For A Penny, Please Validate My Existenc"
    ]
  },
  "30": {
    "score": 5,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 1,
    "short": 3,
    "flags": [
      "Indie pub: Matthew Christensen \u2014 Cleveland-based writer for Maxim/ESPN/Men's Journal; author of children's book B",
      "Short pub: Katharine Emlen \u2014 Knoxville writer/photographer, work on KBOO Radio Writer's R",
      "Short pub: Valeria Hershkovych \u2014 UNITED24 Media editor/journalist covering culture, human rig",
      "Short pub: Maggie Sokolik \u2014 UC Berkeley writing director, author of 20+ ESL/composition "
    ]
  },
  "16": {
    "score": 16,
    "finalists": 0,
    "vet": 0,
    "trad": 3,
    "indie": 2,
    "short": 3,
    "flags": [
      "Trad pub: Jane Foley \u2014 novelist (Eden Lake) and memoirist (Double Time), published in Salon, The Millio",
      "Trad pub: Anthony Knopps \u2014 Emmy-winning journalist; author of 'The No-Fail Mission,' 'The Roofus Rules,' 'M",
      "Trad pub: Saskia Lane \u2014 Brooklyn-based Juilliard-trained bassist/composer/puppeteer with major venue cre",
      "Indie pub: Shealyn Kite \u2014 Author of children's book Ginger the Lemon Beagle on Amazon"
    ]
  },
  "61": {
    "score": 26,
    "finalists": 0,
    "vet": 1,
    "trad": 4,
    "indie": 3,
    "short": 3,
    "flags": [
      "NYCM vet: Jenn Keohane \u2014 Confirmed prior NYC Midnight finalist, writes micros since 2022",
      "Trad pub: Cathy Schieffelin \u2014 Novelist of The Call (2024, International Impact Award) and Snakeroot and Cohosh",
      "Trad pub: Michael Scotto \u2014 Children's book author; Tales of Midlandia picture book series, Latasha and the ",
      "Trad pub: Nastassia Urnov \u2014 Senior Editor at Soho Press in NYC (Taz Urnov), 27 years editing fiction/nonfict"
    ]
  },
  "57": {
    "score": 10,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 3,
    "short": 4,
    "flags": [
      "Indie pub: Alicia Haberski \u2014 Texas-based sci-fi author of 'Where Starlight Burns' and 'Starlight and Space Be",
      "Indie pub: Bethany Howard \u2014 author of Permission Granted essay/poetry collection",
      "Indie pub: Joe Wise \u2014 54 books on Goodreads including 'I Want to Go to Heaven... But Not Yet' and 'Can",
      "Short pub: Alisa Cunnington \u2014 St. Catharines ON artist/writer/bookbinder; published in Gri"
    ]
  },
  "32": {
    "score": 12,
    "finalists": 0,
    "vet": 0,
    "trad": 2,
    "indie": 1,
    "short": 4,
    "flags": [
      "Trad pub: Amber Fossey \u2014 HarperCollins/Harper UK published author of Be Wild Be Free (Nautilus Silver), U",
      "Trad pub: Nancy Walton \u2014 Canadian author of nursing textbook 'Ethics and Issues in Contemporary Nursing' ",
      "Indie pub: Amy Suddarth \u2014 Self-published novel 'Playing Witch' on Amazon",
      "Short pub: Michele Alouf \u2014 Richmond VA writer published in Potomac Review, New World Wr"
    ]
  },
  "59": {
    "score": 26,
    "finalists": 2,
    "vet": 0,
    "trad": 1,
    "indie": 0,
    "short": 3,
    "flags": [
      "\u2605 Prior 500FC finalist: JA Logwood",
      "\u2605 Prior 500FC finalist: Zoe Rose",
      "Trad pub: Karen Middleton \u2014 Canberra-based journalist with 30+ yrs; Chief Political Correspondent for The Sa",
      "Short pub: Nick Buchheit \u2014 award-winning horror/speculative satire writer on Substack; "
    ]
  },
  "82": {
    "score": 5,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 1,
    "short": 3,
    "flags": [
      "Indie pub: Ron Reeder \u2014 Author of technical photography books (Digital Negatives series), Chaffee MO Cit",
      "Short pub: Josh Goller \u2014 Portland-based founder/editor of The Molotov Cocktail flash ",
      "Short pub: Connie Millard \u2014 Pushcart Prize nominee, MFA Lindenwood; published in Across ",
      "Short pub: Elisabetta Pulcini \u2014 London writer for The Indiependent and Artful Dog; film revi"
    ]
  },
  "66": {
    "score": 15,
    "finalists": 0,
    "vet": 1,
    "trad": 0,
    "indie": 4,
    "short": 2,
    "flags": [
      "NYCM vet: Ashley Hattle \u2014 5-time NYC Midnight Short Story semifinalist; also published novel A Haunting Be",
      "Indie pub: Karen Dhanraj \u2014 author of The Practical Guide to Project Management Documentation (2004) on Good",
      "Indie pub: Indra Fonseca \u2014 Monterrey-based writer/illustrator who runs Tori Press riso publishing; SVA MFA ",
      "Indie pub: Sarah Fretwell-Jex \u2014 Brighton English teacher/writer; self-published novels Atom's Walk and Xenophobi"
    ]
  },
  "12": {
    "score": 28,
    "finalists": 1,
    "vet": 0,
    "trad": 3,
    "indie": 3,
    "short": 3,
    "flags": [
      "\u2605 Prior 500FC finalist: Chloe Paige",
      "Trad pub: S.B. Alexander \u2014 best-selling romance/paranormal author, 2022 IRF Gold Medal for The Hunted",
      "Trad pub: Jen Harvie \u2014 Professor at Queen Mary London; multiple theatre books with Palgrave, Routledge,",
      "Trad pub: Chil Scoggin \u2014 Boulder physician/author; op-eds in NYT, Chicago Tribune; books Diagnosing Sturg"
    ]
  },
  "44": {
    "score": 11,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 4,
    "short": 3,
    "flags": [
      "Indie pub: Catherine Buckner \u2014 self-pub memoir Battles to Breakthrough on Amazon; has Andrews, NC connection",
      "Indie pub: Lucie Dickenson \u2014 NJ author of The Anxious Hippie, Overreacting, Worry-Free ABC; owns StarLight Bo",
      "Indie pub: Loren Laureti \u2014 Louisville CO; authored children's book 'I Can Canoe, Can You?'",
      "Indie pub: Teal Scott \u2014 Spiritual author (aka Teal Swan) of The Sculptor In The Sky; Santa Fe based, not"
    ]
  },
  "7": {
    "score": 3,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 0,
    "short": 3,
    "flags": [
      "Short pub: Erik Arneson \u2014 Derringer Award finalist; crime fiction in Thuglit, Mary Hig",
      "Short pub: Colin Bennett \u2014 Milwaukee flash fiction and essay writer, published in Sammi",
      "Short pub: Matthew Donato \u2014 Rotten Tomatoes approved film critic, writes for IGN, Bloody"
    ]
  },
  "72": {
    "score": 13,
    "finalists": 0,
    "vet": 1,
    "trad": 1,
    "indie": 2,
    "short": 1,
    "flags": [
      "NYCM vet: Stuart Creque \u2014 NYC Midnight Screenwriter's Challenge 2008 winner; feature The Last Earth Girl o",
      "Trad pub: Elizabeth Torres \u2014 Likely Colombian-American poet with 20+ books in Spanish/English/Danish/German; ",
      "Indie pub: Mariah Bailey \u2014 Goodreads listing for Gina's Education though Houston match unclear",
      "Indie pub: Kat Weyer \u2014 Kathy Weyer of Palm Springs, author of Stitches/Pages/Trinkets (Heritage Art Par"
    ]
  },
  "26": {
    "score": 8,
    "finalists": 0,
    "vet": 0,
    "trad": 2,
    "indie": 0,
    "short": 2,
    "flags": [
      "Trad pub: edgar lavoie \u2014 Thunder Bay-area author of regional history books and novels (The Beardmore Reli",
      "Trad pub: Hilary MacLeod \u2014 Edinburgh-born author of The Shores Mystery series set in PEI (Revenge of the Lo",
      "Short pub: Margo Lemberger \u2014 NYC journalist, NY Post headline writer, script doctor/drama",
      "Short pub: Jonathan Tolstedt \u2014 St Paul MN patent agent and short fiction writer; horror sto"
    ]
  },
  "48": {
    "score": 9,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 3,
    "short": 3,
    "flags": [
      "Indie pub: Jared Grace \u2014 New Hampshire-based horror author of 'Isolation' (2023, Indie Ink Awards finalis",
      "Indie pub: Jennifer Valencia \u2014 Chandler AZ romance writer publishing under pen name Alexis Alvarez",
      "Indie pub: Carolina Zambrano \u2014 Venezuelan-American author of 'Jack Rane Bo' (2005) and other inspirational book",
      "Short pub: Aeve Baldwin \u2014 Editor/writer at CPA Australia, intheblack contributor; prof"
    ]
  },
  "27": {
    "score": 16,
    "finalists": 1,
    "vet": 0,
    "trad": 0,
    "indie": 1,
    "short": 4,
    "flags": [
      "\u2605 Prior 500FC finalist: Avery Other",
      "Indie pub: Elizabeth Ann \u2014 poetry collections Walking through the Forest and goosesong on Amazon; 40 books ",
      "Short pub: Jory Akuhata \u2014 Maori Literature Trust author, debut Solarpunk story Potiki,",
      "Short pub: Joshua Fruehling \u2014 WGA/DGA member Line Producer, 1st AD and screenwriter (Mande"
    ]
  },
  "20": {
    "score": 8,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 2,
    "short": 4,
    "flags": [
      "Indie pub: Debra Irsik \u2014 Emporia KS author of Heroes by Design middle-grade series and Sunshine in the We",
      "Indie pub: Marta Tanrikulu \u2014 Contributor to comics anthology 'Out of the Blue' on Amazon",
      "Short pub: Natalie Bucsko \u2014 Twisted Tournament May 2025 winner; published in Elegant Lit",
      "Short pub: Connor DeWolf \u2014 IMDb credits as director/producer/production manager on Darl"
    ]
  },
  "2": {
    "score": 20,
    "finalists": 0,
    "vet": 0,
    "trad": 2,
    "indie": 6,
    "short": 2,
    "flags": [
      "Trad pub: DAWN MCCOOEY \u2014 Author of Amazon bestseller 'Keeping Good Employees On Board' published by Morga",
      "Trad pub: Steven Viney \u2014 Award-winning ABC News journalist, co-founder of Mada Masr; published poetry col",
      "Indie pub: Adam Copeland \u2014 Vancouver WA indie author of Echoes of Avalon, Ripples in the Chalice, Midnight ",
      "Indie pub: Arleta Marshall Kersh \u2014 11 self-published sci-fi/fantasy novels on Amazon (Kistarn, People of Before ser"
    ]
  },
  "10": {
    "score": 16,
    "finalists": 0,
    "vet": 0,
    "trad": 2,
    "indie": 3,
    "short": 4,
    "flags": [
      "Trad pub: Bruce Harpham \u2014 Project Managers At Work (Apress 2017), Toronto-based business non-fiction autho",
      "Trad pub: Barry Scannell \u2014 Co-authored 'The Law of Personal Injuries' (2nd ed); legal writer not fiction",
      "Indie pub: Khadijah Barr \u2014 American Muslim children's author from DC area",
      "Indie pub: Jane Nicholas \u2014 Published Jane Nicholas is Australian embroidery author with 8 books \u2014 different"
    ]
  },
  "62": {
    "score": 12,
    "finalists": 0,
    "vet": 0,
    "trad": 3,
    "indie": 0,
    "short": 3,
    "flags": [
      "Trad pub: Christine Day \u2014 Pacific Northwest Indigenous YA novelist with Macmillan; NPR Best Book, AIYLA ho",
      "Trad pub: Karen Sottosanti \u2014 Freelance writer/editor; Britannica contributor; published romance novelist as '",
      "Trad pub: ellen zaroff \u2014 NYC author of four novels including 'A Layered Tress', 'A Tree's Tale', 'Once Up",
      "Short pub: Mary Hirsch \u2014 humor writer, Garrison Keillor's Prairie Home Companion, MN-"
    ]
  },
  "46": {
    "score": 15,
    "finalists": 1,
    "vet": 0,
    "trad": 0,
    "indie": 1,
    "short": 3,
    "flags": [
      "\u2605 Prior 500FC finalist: Kenton Smalley",
      "Indie pub: Sarah Toney \u2014 Goodreads author of Milky Way Summer and a children's I Spy Halloween book",
      "Short pub: Sean Finney \u2014 Advertising copywriter and founding editor of Canteen magazi",
      "Short pub: Nicholas Marconi \u2014 Speculative fiction writer with short stories in Wyldblood, "
    ]
  },
  "19": {
    "score": 10,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 3,
    "short": 4,
    "flags": [
      "Indie pub: Sue Anger \u2014 Raleigh-based freelance writer with historical mystery novel Last Known Port on ",
      "Indie pub: A. N. Glickman \u2014 Pittsburgh resident; author/illustrator of 'POCKETS: The Problem with Society Is",
      "Indie pub: Delsy Gonzalez \u2014 Author of 'Dark Memory' (2003), a crime/thriller novel; appears on Amazon",
      "Short pub: Sarah Freia \u2014 Toronto-based published poet, lead writer on sitcom, sold sc"
    ]
  },
  "37": {
    "score": 11,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 3,
    "short": 2,
    "flags": [
      "Trad pub: Priya Chand \u2014 science fiction writer published in F&SF, Analog, Nature Futures, Clarkesworld; ",
      "Indie pub: Jeremiah Jungwoon Lee \u2014 self-published 'The Adventures of Tom Transwill' (Amazon/Waterstones)",
      "Indie pub: Mina Petersen \u2014 Christian inspirational author with website minapetersenbooks.com and Amazon/Aud",
      "Indie pub: Alexandra Vidal \u2014 Amazon author page exists under her name; possibly Oakton VA-based self-publishe"
    ]
  },
  "85": {
    "score": 25,
    "finalists": 1,
    "vet": 0,
    "trad": 3,
    "indie": 1,
    "short": 4,
    "flags": [
      "\u2605 Prior 500FC finalist: Sally Demarest",
      "Trad pub: Jesse Alexander \u2014 Ottawa-based historian, author of 16 Days In Berlin and host of The Great War po",
      "Trad pub: T R Kollars \u2014 Multi-published with Love Inspired (Harlequin Christian imprint); award-winning ",
      "Trad pub: Phil Locke \u2014 Wrongful Convictions Blog founder, authored Silencing Survivors book; South Hadl"
    ]
  },
  "38": {
    "score": 20,
    "finalists": 1,
    "vet": 0,
    "trad": 1,
    "indie": 2,
    "short": 3,
    "flags": [
      "\u2605 Prior 500FC finalist: Ben Kaestner-Frenchman",
      "Trad pub: Kevlin Henney \u2014 Bristol-based technical author of multiple O'Reilly books; fiction in Litro, New",
      "Indie pub: John Greco \u2014 Sunnyvale-based author/photographer; multiple books including 'Dark Secrets' and",
      "Indie pub: Paul Pape \u2014 Creative pro and ghostwriter; authored business curriculum"
    ]
  },
  "42": {
    "score": 14,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 5,
    "short": 1,
    "flags": [
      "Trad pub: Sarah Claxton \u2014 published children's picture book author (Triangle/Circle/Square series), SCBWI ",
      "Indie pub: Garrett K. Jones \u2014 Self-published Hanford author of The Archives of Ic\u00ednq-R\u00e9gn and Five Kingdoms fa",
      "Indie pub: Christina Poe \u2014 Girard OH author of 'Finding Peace: Biblical Wisdom for Life's Stressors'",
      "Indie pub: Ty Russell \u2014 Gold Coast teacher; self-published novels The Apprentice Detective and Future Fa"
    ]
  },
  "54": {
    "score": 15,
    "finalists": 0,
    "vet": 0,
    "trad": 3,
    "indie": 2,
    "short": 2,
    "flags": [
      "Trad pub: Chris Knopf \u2014 Author of Sam Acquillo Hamptons Mystery series; Permanent Press/multiple novels;",
      "Trad pub: Rachel Savage \u2014 Reuters/Guardian Africa correspondent (multiple Rachel Savages); ambiguous if sa",
      "Trad pub: Christine Schiefer \u2014 Co-host of And That's Why We Drink podcast; co-author of NYT bestselling A Haunt",
      "Indie pub: Paul Bosher \u2014 Has author website paulbosher.com showing author/poet status, Amersham-based"
    ]
  },
  "47": {
    "score": 9,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 2,
    "short": 5,
    "flags": [
      "Indie pub: John Draper \u2014 Author of 'A Danger to God Himself' (2015) and 'The Curse of Perversion', writte",
      "Indie pub: Charlotte Hamilton \u2014 Charlotte Anne Hamilton from Ayrshire Scotland; author of 'The Breath Between Wa",
      "Short pub: Laurel Andrews \u2014 former Anchorage Daily News journalist, freelancer with lite",
      "Short pub: Amy Armstrong \u2014 Aurora CO psychotherapist, Masters Review slush reader and b"
    ]
  },
  "80": {
    "score": 6,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 2,
    "short": 2,
    "flags": [
      "Indie pub: Dennis Masino \u2014 Author of two DUI-defense books for attorneys plus e-book on investing",
      "Indie pub: Storme Maynard \u2014 Likely writes as S.D. Maynard with two series and seven supernatural books",
      "Short pub: Colleen Christi Willett \u2014 Erma Bombeck Humor Writer of the Month June 2021; essays in ",
      "Short pub: Maggie Maize \u2014 California writer with nonfiction in Medscape, Savannah Maga"
    ]
  },
  "79": {
    "score": 16,
    "finalists": 1,
    "vet": 0,
    "trad": 1,
    "indie": 0,
    "short": 3,
    "flags": [
      "\u2605 Prior 500FC finalist: Autumn Bettinger",
      "Trad pub: Jessica Taylor \u2014 likely Dr. Jessica Taylor FRSA, British feminist author of multiple books incl. ",
      "Short pub: Natasha Dalley \u2014 Published in Literally Stories and Five on the Fifth lit mag",
      "Short pub: Conor Meleady \u2014 Academic historian at UCD; has written for History Today; pu"
    ]
  },
  "3": {
    "score": 15,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 5,
    "short": 2,
    "flags": [
      "Trad pub: Terence McEneny \u2014 Translator and author of 'Strah i njegov sluga' and 'Sudbina i komentari'; teach",
      "Indie pub: AK Brown \u2014 A.K. Brown writer site exists; science fiction author with website ak-brown.com",
      "Indie pub: Kat Caldwell \u2014 indie novelist with three published novels (Stepping Across the Desert 2017, An ",
      "Indie pub: Alexander Davidson \u2014 Michigan secondary educator; author of The Visitor's Choice (Ferne Press)"
    ]
  },
  "36": {
    "score": 11,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 2,
    "short": 4,
    "flags": [
      "Trad pub: Sasha Rainbow \u2014 NZ-born LA-based film director/writer, Academy Award longlisted for 'Kamali', BA",
      "Indie pub: Lisa Lange \u2014 author of 'You Are Here: Connecting Flights,' featured at Baltimore County libra",
      "Indie pub: Mark McClelland \u2014 Wrote illustrated essay on Australian design 1970-2000; distinct from US sci-fi ",
      "Short pub: Esther Biue Almazan \u2014 Yaqui playwright, Indian School won Kennedy Center Latinx Pl"
    ]
  },
  "58": {
    "score": 21,
    "finalists": 1,
    "vet": 0,
    "trad": 1,
    "indie": 2,
    "short": 4,
    "flags": [
      "\u2605 Prior 500FC finalist: Lottie Green",
      "Trad pub: Sophie Jackson \u2014 Confirmed Lowestoft freelance writer with multiple published books (Simon & Schu",
      "Indie pub: Natasa Ghica \u2014 Orlando-based Romanian writer, self-published novel 'Vampyr' on Amazon",
      "Indie pub: Mary A Sadowski \u2014 Mary Ann Sadowski has Facebook author page in Livingston/Bozeman Montana area"
    ]
  },
  "35": {
    "score": 15,
    "finalists": 0,
    "vet": 1,
    "trad": 2,
    "indie": 0,
    "short": 4,
    "flags": [
      "NYCM vet: Nicole Caliro \u2014 won 3rd place in initial round of NYC Midnight Flash Fiction Challenge; Top 4 fi",
      "Trad pub: Valeria Paolini \u2014 Bestselling ghostwriter, translator, literary scout, publishing teacher in Italy",
      "Trad pub: Amanda Winn Lee \u2014 Voice actress and writer; published memoir 'The Noodle Chronicles' and works as ",
      "Short pub: Farah Diaz-Tello \u2014 human rights attorney; publishes commentary on reproductive "
    ]
  },
  "14": {
    "score": 21,
    "finalists": 0,
    "vet": 1,
    "trad": 3,
    "indie": 2,
    "short": 3,
    "flags": [
      "NYCM vet: Christy Hartman \u2014 Two-time NYC Midnight winner from Vancouver Island; also short fiction in Sky Is",
      "Trad pub: Apple Gidley \u2014 Anglo-Australian author of 7 books with Vine Leaves Press; Wishing Shelf silver ",
      "Trad pub: Elizabeth Huergo \u2014 Cuban-American novelist; The Death of Fidel P\u00e9rez; teaches at George Mason",
      "Trad pub: Sandra Thom- Jones \u2014 Sandra Thom-Jones, Melbourne; multiple books with Melbourne University Publishin"
    ]
  },
  "1": {
    "score": 8,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 2,
    "short": 4,
    "flags": [
      "Indie pub: Jeffrey Pacitto \u2014 Independent comic anthology and self-published short story collection on Amazon",
      "Indie pub: Beth Teachey \u2014 Waynesboro VA English teacher with author site booksbybeth.net and novel The Swi",
      "Short pub: Anjali Chainani \u2014 PhD writes for Behavioral Scientist and The Decision Lab; no",
      "Short pub: Becky Mann \u2014 Journalist/columnist in Kamloops; community newspaper editor"
    ]
  },
  "8": {
    "score": 13,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 4,
    "short": 2,
    "flags": [
      "Trad pub: Andrea Michaels \u2014 Author of 'Reflections of a Successful Wallflower' (Outskirts Press); co-author ",
      "Indie pub: RJ Burgess \u2014 R.L. Burgess in Melbourne is author of Counting on Love, Match Point, Hashtag Lo",
      "Indie pub: Ernest Klepeis \u2014 Three books of poetry incl Finding Our Road, Chronogram contributor, Rosendale N",
      "Indie pub: Laurel McHargue \u2014 Award-winning Salida-based indie author of multiple novels including Waterwight "
    ]
  },
  "81": {
    "score": 21,
    "finalists": 0,
    "vet": 0,
    "trad": 3,
    "indie": 4,
    "short": 4,
    "flags": [
      "Trad pub: Spencer Brinker \u2014 69 books on Goodreads via Bearport Publishing; children's/educational author; La",
      "Trad pub: Rebecca Davis \u2014 Rebecca Fjelland Davis: YA novelist (Chasing AllieCat, Slider's Son), Mankato ar",
      "Trad pub: Travis Lazarczyk \u2014 Maine Sportswriter of the Year (twice); columnist Portland Press Herald; include",
      "Indie pub: Amber Austin \u2014 Goodreads author of Tarotica and other indie titles; Charlotte not confirmed but"
    ]
  },
  "29": {
    "score": 13,
    "finalists": 0,
    "vet": 1,
    "trad": 0,
    "indie": 2,
    "short": 4,
    "flags": [
      "NYCM vet: Dean Koorey \u2014 Won NYC Midnight Micro Fiction Prize 2024; AWC team behind Furious Fiction; podc",
      "Indie pub: Alexander Costa \u2014 Press release confirms Gainesville FL-based author published a science fiction n",
      "Indie pub: Daryl McCullough \u2014 Sherman Oaks-based author of award-winning picture book 'The Story of Tree and C",
      "Short pub: Robert Ammerman \u2014 Rob Ammerman is a Cordova Times contributor and English teac"
    ]
  },
  "49": {
    "score": 5,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 2,
    "short": 1,
    "flags": [
      "Indie pub: MB Ashley \u2014 indie author of children's books Adventures of Snuggs and Pirate Chickens, Kansa",
      "Indie pub: Edward Hellenbeck \u2014 Edward A. Hellenbeck III has Amazon-published book (2014), business marketing pr",
      "Short pub: Rebecca Mitchell \u2014 Fiction author and non-fiction ghostwriter; ghost-writing fo"
    ]
  },
  "64": {
    "score": 38,
    "finalists": 2,
    "vet": 1,
    "trad": 2,
    "indie": 2,
    "short": 3,
    "flags": [
      "\u2605 Prior 500FC finalist: Elizabeth Hakken Candido",
      "\u2605 Prior 500FC finalist: Miranda Lee",
      "NYCM vet: Amy Hypnarowski \u2014 NYC Midnight Short Story 2021 Round 1 first place (spy genre); also actress/podc",
      "Trad pub: Angeline Walsh \u2014 Cleveland-based author of YA Gothic novel 'Memento Mortale', poetry collection, "
    ]
  },
  "40": {
    "score": 15,
    "finalists": 0,
    "vet": 0,
    "trad": 3,
    "indie": 1,
    "short": 4,
    "flags": [
      "Trad pub: Pamela Bedore \u2014 UConn English professor; author of Canadian Crime Fiction (Routledge 2024), Dime",
      "Trad pub: Suzanne LeVert \u2014 Scholastic/various-publisher health writer, multiple titles (Out of the Fog, Sie",
      "Trad pub: A.M. Strohman \u2014 Anne-Marie Strohman, VCFA grad, author of stories for all ages",
      "Indie pub: BARBARA SWIHART \u2014 Barbara Swihart Miller has self-pub novel 'The Call of Gold' and anthology contr"
    ]
  },
  "76": {
    "score": 11,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 3,
    "short": 2,
    "flags": [
      "Trad pub: Chad Frame \u2014 Poet Laureate Emeritus of Montgomery County PA; author of Little Black Book, Cry",
      "Indie pub: Lisa Braithwaite \u2014 self-published nonfiction book Presenting for Humans (2017); public speaking coa",
      "Indie pub: Claire de Boer \u2014 Author of Soul Writing and My Big-Little World of Wonder; writer/mentor",
      "Indie pub: Christopher Silverio \u2014 self-published poetry books Dark Box Thoughts and Letters from the Abyss on Amaz"
    ]
  },
  "22": {
    "score": 16,
    "finalists": 0,
    "vet": 1,
    "trad": 2,
    "indie": 1,
    "short": 3,
    "flags": [
      "NYCM vet: Lisa Fox \u2014 NYC Midnight Short Screenplay Challenge 2018 first-place winner; Washington Town",
      "Trad pub: Larissa Byj \u2014 travel writer, co-author Lonely Planet Atlantic Canada 2024, 111 Places guideboo",
      "Trad pub: Christopher Stevens \u2014 Daily Mail TV critic since 1983; bestselling mnemonics book 'Thirty Days Has Sep",
      "Indie pub: maya raine \u2014 Self-published dark romance/fantasy author with 15+ books on Amazon/Goodreads ('"
    ]
  },
  "69": {
    "score": 14,
    "finalists": 0,
    "vet": 0,
    "trad": 2,
    "indie": 3,
    "short": 2,
    "flags": [
      "Trad pub: Emily Guy Birken \u2014 Author of 5+ traditionally-published nonfiction books (Simon & Schuster, Penguin",
      "Trad pub: Bill Jeffries \u2014 Confirmed Centreville VA author of multiple novels (Spirit of the Oryx, Concord)",
      "Indie pub: Victoria Aracri DeRoche \u2014 Richmond VA novelist, debut novel Bones of the Moth, author website",
      "Indie pub: Charles Iacuzzo \u2014 author/actor in LA; published Bon Vivant: Essays on Amazon"
    ]
  },
  "21": {
    "score": 13,
    "finalists": 0,
    "vet": 0,
    "trad": 4,
    "indie": 0,
    "short": 1,
    "flags": [
      "Trad pub: Alastair Luft \u2014 Canadian author with 3 published novels including The Battle Within and One King",
      "Trad pub: Michael MacKenzie \u2014 M.R. Mackenzie, Glasgow author of Anna Scavolini crime thrillers; shortlisted fo",
      "Trad pub: Purvi Shah \u2014 Brooklyn poet with three poetry collections (New Rivers Press, belladonna*, Nort",
      "Trad pub: R. H. Thomson \u2014 Celebrated Canadian actor (Anne with an E) and author of memoir By the Ghost Lig"
    ]
  },
  "41": {
    "score": 33,
    "finalists": 2,
    "vet": 0,
    "trad": 3,
    "indie": 1,
    "short": 2,
    "flags": [
      "\u2605 Prior 500FC finalist: Dylan Archer",
      "\u2605 Prior 500FC finalist: Jennifer Gunner",
      "Trad pub: Amanda Henke \u2014 Children's book Not A Book About Bunnies (Starry Forest Books, 2023), MFA Hamlin",
      "Trad pub: Maxine Levaren \u2014 San Diego author of Science Fair Projects For Dummies, The 60s For Dummies (Wile"
    ]
  },
  "84": {
    "score": 22,
    "finalists": 1,
    "vet": 1,
    "trad": 0,
    "indie": 3,
    "short": 1,
    "flags": [
      "\u2605 Prior 500FC finalist: Acadia Hansen",
      "NYCM vet: Shane Tilston \u2014 Brooklyn-based producer/director; his own website states he has placed in NYC Mi",
      "Indie pub: Leigh Clements \u2014 writes/sells murder mystery games at Shot In The Dark Mysteries",
      "Indie pub: Valerie Garske \u2014 Valerie Jane Garske, author of The Moonstone Legacy Series on Amazon/Audible"
    ]
  },
  "34": {
    "score": 7,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 2,
    "short": 3,
    "flags": [
      "Indie pub: Willona Arkouda \u2014 associated with Arkouda Global Press in Indianapolis",
      "Indie pub: John St. Clair \u2014 Indie author in Reston VA; published debut novel 'Stalin's Door' (2021), 4.56 av",
      "Short pub: Marc Guillotte \u2014 Speculative fiction writer published in Every Day Fiction li",
      "Short pub: F\u00e9ed\u00e9rique Roussel \u2014 Quebec writer/actress with short film Pour elle(s); literary"
    ]
  },
  "71": {
    "score": 6,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 2,
    "short": 2,
    "flags": [
      "Indie pub: Daniel Comiza \u2014 Romanian writer published on LiterNet and Matca Literara, personal site Caragian",
      "Indie pub: Ian Presnell \u2014 Ian Taylor Presnell published 'When the Mad King Rides By: Polybius' short story",
      "Short pub: Karen Mitani \u2014 Placed 5th in Writer's Workout Leapfest competition; active ",
      "Short pub: Mary Pretotto \u2014 Toronto Seneca College professor, journalism MA, 2012 Gold Q"
    ]
  },
  "17": {
    "score": 18,
    "finalists": 0,
    "vet": 0,
    "trad": 3,
    "indie": 4,
    "short": 1,
    "flags": [
      "Trad pub: Emily Bliss \u2014 Author of Unicorn Princesses and Pegasus Princesses series (16 books, 2017-2022)",
      "Trad pub: Maria Danaher \u2014 Author of 'Give Your Company a Fighting Chance' (SHRM, 2015); regular HR News co",
      "Trad pub: RJG Hougham \u2014 Rebecca J G Hougham, Bournemouth YA author with agent, debut 2020",
      "Indie pub: Katherine Armitage \u2014 Kate Armitage published novel The Wrong Side of Twenty-Five plus flash fiction i"
    ]
  },
  "83": {
    "score": 11,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 2,
    "short": 4,
    "flags": [
      "Trad pub: Emily Neuberger \u2014 Brooklyn-based debut novelist; 'A Tender Thing' published by Penguin Random Hous",
      "Indie pub: Rachel Kipp \u2014 Co-authored Lost Delaware, Secret Delaware, 100 Things to Do in Delaware (Reedy ",
      "Indie pub: Maggie Logan \u2014 self-published trilogy author (Waves of Darkness/Light/Love) plus multiple poetr",
      "Short pub: Christine Crandall \u2014 Freelance writer from The Dalles OR; published articles on H"
    ]
  },
  "23": {
    "score": 7,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 0,
    "short": 4,
    "flags": [
      "Trad pub: Laura Harbin \u2014 TV writer with screen credits (Next Step, Lost & Found Music Studios); Toronto-b",
      "Short pub: Desiree Ascevich \u2014 Daytona Beach MFA in Creative Writing (Stetson), commencemen",
      "Short pub: Kim Binsted \u2014 Computer science professor with academic publications on AI/",
      "Short pub: Susannah Carver \u2014 LinkedIn shows literary suspense writer drafting debut novel"
    ]
  },
  "33": {
    "score": 17,
    "finalists": 0,
    "vet": 0,
    "trad": 2,
    "indie": 4,
    "short": 3,
    "flags": [
      "Trad pub: Courtney Danielson \u2014 Simon & Schuster author of 'Morgana le Fay'; UCharleston librarian",
      "Trad pub: Geoff Wilson \u2014 Nottingham University grad published by Austin Macauley (Robin Hood research boo",
      "Indie pub: Sophronia Fox \u2014 has personal author site sophroniafox.com; appears to be indie writer",
      "Indie pub: Candace George Conradi \u2014 published author of multiple books incl. Diamond Moms, Soul Sitter's Handbook; f"
    ]
  },
  "86": {
    "score": 3,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 1,
    "short": 1,
    "flags": [
      "Indie pub: Kat Craig \u2014 Asheville NC indie author of Let's Be Creepy Together, Truth and Fiction in Ashe",
      "Short pub: Josh Murchie \u2014 Wrote one-act play 'DISORDER' staged at Courtyard Theatre in"
    ]
  },
  "5": {
    "score": 11,
    "finalists": 0,
    "vet": 0,
    "trad": 2,
    "indie": 2,
    "short": 1,
    "flags": [
      "Trad pub: Shanna McNair \u2014 Published novelist (Soul Retrieval, 2025, High Frequency Press); founder of The ",
      "Trad pub: Abby Wynne \u2014 Dublin-based bestselling author of 13+ books including 'Energy Healing Made Easy",
      "Indie pub: Tameka Davis \u2014 Tameka E. Davis authored 'Fulfilled in Christ'",
      "Indie pub: Kelley Sewell \u2014 Self-published author of mystery/thriller The Blind Switch (2017); writing and e"
    ]
  },
  "39": {
    "score": 10,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 2,
    "short": 3,
    "flags": [
      "Trad pub: Danielle DeSiato \u2014 food writer/recipe developer, contributed to 12 cookbooks at America's Test Kitc",
      "Indie pub: Gemma Louise Nangle \u2014 Author of children's book 'The Amazing Adventures of Baby Bear and Goldilocks' o",
      "Indie pub: Jeff Witorsch \u2014 Author of 'Fighting, With Faith' memoir; lives in Germantown, MD.",
      "Short pub: Kelly Endersby \u2014 2025 168 Film Write of Passage screenwriting winner from Los"
    ]
  },
  "50": {
    "score": 23,
    "finalists": 0,
    "vet": 1,
    "trad": 2,
    "indie": 4,
    "short": 4,
    "flags": [
      "NYCM vet: Melanie Winklosky \u2014 Confirmed 2023 NYC Midnight Flash Fiction Challenge finalist; publishes in McSwe",
      "Trad pub: Theresa Guzman Stokes \u2014 Co-author of 'A Matter of Truth'; former editor of Newport Life Magazine; workin",
      "Trad pub: pamela painter \u2014 Award-winning author of 5 story collections, Pushcart winner, Emerson MFA profes",
      "Indie pub: Sharman Badgett-Young. \u2014 Three self-pub novels on Amazon (Kiln Zone, Dream Mire, Triune Helix); Pacific N"
    ]
  },
  "43": {
    "score": 28,
    "finalists": 2,
    "vet": 0,
    "trad": 0,
    "indie": 3,
    "short": 2,
    "flags": [
      "\u2605 Prior 500FC finalist: John Curtis Bigelow",
      "\u2605 Prior 500FC finalist: Josephine Queen",
      "Indie pub: Darren Chen \u2014 Singapore author of The Good Guys (longlisted 2020 Epigram Books Fiction Prize)",
      "Indie pub: John Hope \u2014 Winter Springs FL author of YA/sci-fi books (The Band Aid, Frozen Floppies, Pank"
    ]
  },
  "74": {
    "score": 19,
    "finalists": 0,
    "vet": 0,
    "trad": 3,
    "indie": 5,
    "short": 0,
    "flags": [
      "Trad pub: Erica Boyce \u2014 Author of The Fifteen Wonders of Daniel Green (2019) and Lost at Sea (2020, Sour",
      "Trad pub: Reed Martin \u2014 Reduced Shakespeare Company writer/performer; co-created 11 plays; published by ",
      "Trad pub: Joe Stuart \u2014 Joe Stuart has Simon & Schuster UK author page",
      "Indie pub: Amy Cutler \u2014 Warwick NY author Amy S. Cutler; MFA Goddard College; published short stories in"
    ]
  },
  "31": {
    "score": 10,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 3,
    "short": 1,
    "flags": [
      "Trad pub: Nicole Barraza Keim \u2014 Hollywood writer on 9-1-1, 13 Reasons Why, Action Point, worked on Disney's Raya",
      "Indie pub: Kay Hansen \u2014 Vegan Homestyle cookbook, Amazon author page, Minneapolis ties",
      "Indie pub: Debbie Norwitz \u2014 Author of memoir 'Thrown Overboard: By Scientology and Other Life Overboards' (A",
      "Indie pub: Ruth Rodgers \u2014 Arvada CO; freelance writer/author with website ruthrodgersauthor.com and books"
    ]
  },
  "65": {
    "score": 12,
    "finalists": 0,
    "vet": 0,
    "trad": 2,
    "indie": 3,
    "short": 0,
    "flags": [
      "Trad pub: Chelsea Sutton \u2014 PEN Emerging Voices Fellow, novella from Split/Lip Press, multiple plays produce",
      "Trad pub: Mona Voelkel \u2014 Author of two picture books ('Stanley and the Wild Words', 'Moon Choo-Choo') plu",
      "Indie pub: Amanda Dew \u2014 Facebook author page; books 'The Story Seer' and 'The Truth Seer' for pre-order",
      "Indie pub: Mandy Lange \u2014 Michigan teacher-turned-writer; published 'Hands off my Sparkle' and 'Foundation"
    ]
  },
  "11": {
    "score": 10,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 2,
    "short": 3,
    "flags": [
      "Trad pub: John Leslie \u2014 Simon & Schuster published crime/mystery novelist, Gideon Lowry Key West series,",
      "Indie pub: Darren Lloyd \u2014 has Amazon.ca author page with books published, Inverness Scotland connection pl",
      "Indie pub: Sheryl Parbhoo \u2014 Self-pub author of novel 'The Unexpected Daughter' on Amazon",
      "Short pub: Chris Doty-Dunn \u2014 PhD linguist, writer/communications professional, has own we"
    ]
  },
  "4": {
    "score": 9,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 2,
    "short": 5,
    "flags": [
      "Indie pub: Pete Jirles \u2014 Goodreads author page for Stanley and the Magic Spider, children's book",
      "Indie pub: Mike Partyka \u2014 Self-published author of multiple books via Smashwords/Amazon",
      "Short pub: Marcia Ehinger \u2014 Sacramento CWC member; published 'NUGGETS: My California' (2",
      "Short pub: Bridget Haug \u2014 Published short fiction in Wyldblood, Ember, takah\u0113, Metaste"
    ]
  },
  "63": {
    "score": 17,
    "finalists": 0,
    "vet": 0,
    "trad": 2,
    "indie": 5,
    "short": 1,
    "flags": [
      "Trad pub: Alex Bollinger \u2014 Journalist/editor-in-chief of LGBTQ Nation with hundreds of published articles; ",
      "Trad pub: Rebecca Evans \u2014 Pushcart-nominated Idaho poet/memoirist; books Tangled by Blood and Safe Handlin",
      "Indie pub: Michael Demaray \u2014 Philadelphia-based author of The Faller (novella); won North Street Book Prize f",
      "Indie pub: Christine Kasallis \u2014 Phoenix-area author/poet/teacher; published poetry collection Drowning in Baby B"
    ]
  },
  "73": {
    "score": 6,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 0,
    "short": 3,
    "flags": [
      "Trad pub: Jonathan Salem Baskin \u2014 Chicago-based marketing book author (Branding Only Works on Cattle, A Thousand W",
      "Short pub: Pennie Nichols \u2014 Pennie A. Nichols of Baton Rouge has personal website with p",
      "Short pub: Tracey Plater \u2014 Braintree Essex flash fiction writer; LISP Finalist, stories",
      "Short pub: Anne To \u2014 Journalist covering Asian American communities in So Cal; he"
    ]
  },
  "78": {
    "score": 2,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 0,
    "short": 2,
    "flags": [
      "Short pub: Kelle Long \u2014 BroadwayWorld/The Credits entertainment reporter, playwright",
      "Short pub: Daryl Marcus \u2014 Horror/urban fantasy short stories in All Dark Places, Cheap"
    ]
  },
  "75": {
    "score": 8,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 1,
    "short": 3,
    "flags": [
      "Trad pub: Christopher Boucher \u2014 Author of 3 novels with Melville House; 2019 Massachusetts Book Awards Fiction H",
      "Indie pub: Trisha Slay \u2014 Dahlonega GA author of Not So Long Ago Not So Far Away and Unhaunted paranormal ",
      "Short pub: Todd Beeton \u2014 Content Director at Social Edge, journalist for Comic Sands,",
      "Short pub: Adam Prugh \u2014 Chicagoland audiobook narrator (Audible)."
    ]
  },
  "55": {
    "score": 14,
    "finalists": 0,
    "vet": 0,
    "trad": 2,
    "indie": 3,
    "short": 2,
    "flags": [
      "Trad pub: Andrea Mara \u2014 Sunday Times bestselling Irish crime novelist; All Her Fault adapted by Peacock ",
      "Trad pub: Carolyn Song \u2014 Melbourne-based dramaturg/scriptwriter; adapted North by Northwest stage product",
      "Indie pub: Alison Moses \u2014 Author of memoir 'JUST LOVE' (Cedar Lane Unitarian author talk); LinkedIn confir",
      "Indie pub: Peter D Tutty \u2014 NZ sci-fi/comedy author of Jack Parsons series and Time Detectives Club middle g"
    ]
  },
  "51": {
    "score": 6,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 1,
    "short": 1,
    "flags": [
      "Trad pub: Skylar Young-Bayer \u2014 Marine biologist and storyteller; co-editor of 'Uncharted' (forthcoming book); p",
      "Indie pub: Abigail Kraft \u2014 Co-authored 'Gregory and the Grimbockle,' 'Archie of Outlandish,' 'Marked by Mag",
      "Short pub: Melissa Ragsdale \u2014 Writer/comedian published in Bustle, Electric Literature, Be"
    ]
  },
  "70": {
    "score": 11,
    "finalists": 0,
    "vet": 0,
    "trad": 1,
    "indie": 3,
    "short": 2,
    "flags": [
      "Trad pub: Jake Fischer \u2014 Senior NBA reporter, author of 'Built to Lose' (Triumph Books, NBA history); Bro",
      "Indie pub: Alina Lee \u2014 Goodreads author with 24 books incl. 'Six-String City' and 'Alina Lee's Short Fi",
      "Indie pub: Gale Martin \u2014 Author of Don Juan in Hankey PA (Finalist 2012 Indie Excellence), Grace Unexpect",
      "Indie pub: Deb Snyder \u2014 Deb Snyder PhD has 4 books incl. Intuitive Parenting; Ashburn location unconfirm"
    ]
  },
  "68": {
    "score": 7,
    "finalists": 0,
    "vet": 0,
    "trad": 0,
    "indie": 2,
    "short": 3,
    "flags": [
      "Indie pub: Preston Copeland \u2014 Tampa Bay author of Saleena Sanchez & The Cursed Crown, A Dream Interrupted, and",
      "Indie pub: June Wilder \u2014 Author of romance novels (SALT & SAGE, SILENT NIGHT series), 13 books on Goodrea",
      "Short pub: Rebecca River Forbes \u2014 Lancaster University grad; debut novel Shut Mouth, Pushcart-",
      "Short pub: Rachel Sigmundstad \u2014 bylines at The Glasgow Courier news publication"
    ]
  },
  "60": {
    "score": 17,
    "finalists": 0,
    "vet": 0,
    "trad": 3,
    "indie": 3,
    "short": 2,
    "flags": [
      "Trad pub: Elise Geither \u2014 Ohio author, playwright, poet; Pushcart Prize nominee; books incl. The Deer, Onc",
      "Trad pub: Aaron Ramey \u2014 Broadway actor (Thoroughly Modern Millie, Bridges of Madison County, Curtains, J",
      "Trad pub: Micki Wagner \u2014 St. Louis native, NYC-based shopping writer for The Kitchn; published in Saveur,",
      "Indie pub: Yankele Greene \u2014 Author of 'Hustle, Flow, Let it Go' self-help book at Barnes & Noble"
    ]
  }
};
// Garske group IDs for highlighting
const GARSKE_GROUPS = {53: "Benton", 56: "Tom", 84: "Valerie"};

// Continent mapping for region rollup
const CONTINENT = {
  "United States":"North America","Canada":"North America","Mexico":"North America",
  "Puerto Rico":"North America","Cayman Islands":"North America","Turks and Caicos Islands":"North America","Virgin Islands (U.S.)":"North America",
  "United Kingdom":"Europe","Great Britain":"Europe","Ireland":"Europe","Germany":"Europe","France":"Europe","Spain":"Europe","Italy":"Europe","Portugal":"Europe","Netherlands":"Europe","Belgium":"Europe","Switzerland":"Europe","Austria":"Europe","Denmark":"Europe","Finland":"Europe","Norway":"Europe","Sweden":"Europe","Poland":"Europe","Greece":"Europe","Bulgaria":"Europe","Luxembourg":"Europe","Romania":"Europe","Ukraine":"Europe","Türkiye":"Europe",
  "Australia":"Oceania","New Zealand":"Oceania",
  "Singapore":"Asia","Japan":"Asia","India":"Asia","Thailand":"Asia","Malaysia":"Asia","China":"Asia","Cambodia":"Asia","Vietnam":"Asia","United Arab Emirates":"Asia",
  "South Africa":"Africa","Zambia":"Africa","Zimbabwe":"Africa",
  "Brazil":"South America","Argentina":"South America","Bolivia":"South America","Colombia":"South America","Costa Rica":"North America",
};
