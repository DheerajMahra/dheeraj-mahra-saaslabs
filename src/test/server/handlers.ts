import { rest } from "msw";
import { API } from "../../constants";

export const handlers = [
  rest.get(API.GET_PROJECTS, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          "s.no": 0,
          "amt.pledged": 15823,
          blurb:
            "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
          by: "Museum of Science Fiction",
          country: "US",
          currency: "usd",
          "end.time": "2016-11-01T23:59:00-04:00",
          location: "Washington, DC",
          "percentage.funded": 186,
          "num.backers": "219382",
          state: "DC",
          title: "Catalysts, Explorers & Secret Keepers: Women of SF",
          type: "Town",
          url: "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery"
        },
        {
          "s.no": 1,
          "amt.pledged": 6859,
          blurb:
            "A unique handmade picture book for kids & art lovers about a nervous monster who finds his courage with the help of a brave little girl",
          by: "Tyrone Wells & Broken Eagle, LLC",
          country: "US",
          currency: "usd",
          "end.time": "2016-11-25T01:13:33-05:00",
          location: "Portland, OR",
          "percentage.funded": 8,
          "num.backers": "154926",
          state: "OR",
          title: "The Whatamagump (a hand-crafted story picture book)",
          type: "Town",
          url: "/projects/thewhatamagump/the-whatamagump-a-hand-crafted-story-picture-book?ref=discovery"
        },
        {
          "s.no": 2,
          "amt.pledged": 17906,
          blurb:
            "A horror comedy about a repairman who was in the wrong place at the wrong time thanks to mad scientists and monsters.",
          by: "Tessa Stone",
          country: "US",
          currency: "usd",
          "end.time": "2016-11-23T23:00:00-05:00",
          location: "Los Angeles, CA",
          "percentage.funded": 102,
          "num.backers": "105857",
          state: "CA",
          title: "Not Drunk Enough Volume 1!",
          type: "Town",
          url: "/projects/1890925998/not-drunk-enough-volume-1?ref=discovery"
        },
        {
          "s.no": 3,
          "amt.pledged": 67081,
          blurb:
            "The Johnny Wander autobio omnibus you've all been asking for! Over 400 pages of comics and extras over the years!",
          by: "Johnny Wander",
          country: "US",
          currency: "usd",
          "end.time": "2016-11-01T23:50:00-04:00",
          location: "Brooklyn, NY",
          "percentage.funded": 191,
          "num.backers": "91585",
          state: "NY",
          title: "Our Cats Are More Famous Than Us: A Johnny Wander Omnibus",
          type: "County",
          url: "/projects/746734715/our-cats-are-more-famous-than-us-a-johnny-wander-o?ref=discovery"
        },
        {
          "s.no": 4,
          "amt.pledged": 32772,
          blurb:
            "The vision for this project is the establishment of a women-owned craft brewery in Rwanda.",
          by: "Beau's All Natural Brewing Company",
          country: "RW",
          currency: "cad",
          "end.time": "2016-11-18T23:05:48-05:00",
          location: "Kigali, Rwanda",
          "percentage.funded": 34,
          "num.backers": "87142",
          state: "Kigali Province",
          title: "The Rwanda Craft Brewery Project",
          type: "Town",
          url: "/projects/beaus/the-rwanda-craft-brewery-project?ref=discovery"
        },
        {
          "s.no": 5,
          "amt.pledged": 2065,
          blurb:
            "In Shiraz, traditional and modern family recipes tell a story of inherited love through delicious Persian comfort food",
          by: "Shireen Rahimi",
          country: "US",
          currency: "usd",
          "end.time": "2016-11-28T00:00:00-05:00",
          location: "Miami, FL",
          "percentage.funded": 114,
          "num.backers": "78471",
          state: "FL",
          title: "Shiraz the Cookbook",
          type: "Town",
          url: "/projects/844448164/shiraz-the-cookbook?ref=discovery"
        },
        {
          "s.no": 6,
          "amt.pledged": 577844,
          blurb:
            "Polygons is the origami-like measuring spoon that lays flat and folds to 4 different sizes to fit your cooking and baking needs ",
          by: "Polygons Design",
          country: "US",
          currency: "usd",
          "end.time": "2016-11-20T11:57:34-05:00",
          location: "Wilmington, DE",
          "percentage.funded": 5778,
          "num.backers": "74405",
          state: "DE",
          title: "Polygons | The Flat 4-in-1 Measuring Spoon",
          type: "Town",
          url: "/projects/stillalive/polygons-the-flat-4-in-1-measuring-spoon?ref=discovery"
        },
        {
          "s.no": 7,
          "amt.pledged": 4952,
          blurb:
            "This hardcover coffee table book showcases all the whimsical illustrations from professional book illustrator Lee White.",
          by: "Lee White",
          country: "US",
          currency: "usd",
          "end.time": "2016-11-28T15:00:00-05:00",
          location: "Portland, OR",
          "percentage.funded": 42,
          "num.backers": "73986",
          state: "OR",
          title: "Illumination: The Art of Lee White",
          type: "Town",
          url: "/projects/987803560/illumination-the-art-of-lee-white?ref=discovery"
        },
        {
          "s.no": 8,
          "amt.pledged": 45959,
          blurb:
            "A heartfelt film exploring families and relationships between Korean and African American communities set during the LA Riots",
          by: "Justin Chon",
          country: "US",
          currency: "usd",
          "end.time": "2016-11-09T19:27:32-05:00",
          location: "Los Angeles, CA",
          "percentage.funded": 153,
          "num.backers": "73206",
          state: "CA",
          title: "GOOK - A Korean American LA Riots Film",
          type: "Town",
          url: "/projects/2084768431/gook-a-korean-american-la-riots-film?ref=discovery"
        },
        {
          "s.no": 9,
          "amt.pledged": 214035,
          blurb:
            "A Smartphone Mount That Helps You Capture The Moment With Facial Tracking, Automated Videos and Pictures, Timelapse and Panoramas",
          by: "Stacked",
          country: "US",
          currency: "usd",
          "end.time": "2016-10-30T06:21:30-04:00",
          location: "Los Angeles, CA",
          "percentage.funded": 611,
          "num.backers": "70122",
          state: "CA",
          title: "Picbot - An Automated Motorized Picture And Video Bot",
          type: "Town",
          url: "/projects/1597931194/picbot-an-automated-motorized-picture-and-video-bo?ref=discovery"
        },
        {
          "s.no": 10,
          "amt.pledged": 41025,
          blurb:
            "Who's watching when a fracked oil pipeline sparks the Standing Rock Sioux Nation to lead the biggest indigenous protest in 100 years?",
          by: "Raviv Ullman",
          country: "US",
          currency: "usd",
          "end.time": "2016-11-22T23:30:00-05:00",
          location: "Cannon Ball, ND",
          "percentage.funded": 54,
          "num.backers": "69320",
          state: "ND",
          title: "Standing Ground - A Documentary Film",
          type: "Town",
          url: "/projects/345639715/standing-ground-a-documentary-film?ref=discovery"
        }
      ])
    );
  }),
  rest.get(API.GET_PROJECTS, (_, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        error: "Internal Server Error"
      })
    );
  })
];
