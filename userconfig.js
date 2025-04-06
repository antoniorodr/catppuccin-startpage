// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Trondheim",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "dev",
      background_url: "src/img/banners/cbg-07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "Regex101",
              url: "https://regex101.com",
              icon: "regex",
              icon_color: palette.blue,
            },
            {
              name: "HackerNews",
              url: "https://news.ycombinator.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "Resources",
          links: [
            {
              name: "ChatGPT",
              url: "https://chatgpt.com",
              icon: "message-chatbot",
              icon_color: palette.green,
            },
            {
              name: "UV",
              url: "https://docs.astral.sh/uv/",
              icon: "uv-index",
              icon_color: palette.peach,
            },
            {
              name: "Crontab Guru",
              url: "https://crontab.guru",
              icon: "brackets-contain-start",
              icon_color: palette.red,
            },
            {
              name: "Roadmaps",
              url: "https://roadmap.sh/roadmaps",
              icon: "map",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "Learn",
          links: [
            {
              name: "Udemy",
              url: "https://www.udemy.com",
              icon: "notebook",
              icon_color: palette.peach,
            },
            {
              name: "MOOC",
              url: "https://www.mooc.fi/en/",
              icon: "currency-shekel",
              icon_color: palette.green,
            },
            {
              name: "LazyVim Book",
              url: "https://lazyvim-ambitious-devs.phillips.codes/course/chapter-1/",
              icon: "book",
              icon_color: palette.blue,
            },
            {
              name: "PlantUML",
              url: "https://plantuml.com/en-dark/",
              icon: "chart-grid-dots",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: palette.blue,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.blue,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "Forums and Blogs",
          links: [
            {
              name: "Forocoches",
              url: "https://forocoches.com/foro/",
              icon: "dashboard",
              icon_color: palette.green,
            },
            {
              name: "Alfred",
              url: "https://www.alfredforum.com",
              icon: "brand-finder",
              icon_color: palette.peach,
            },
            {
              name: "Enfermero Noruega",
              url: "https://www.enfermeronoruega.com",
              icon: "brand-wordpress",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "Others",
          links: [
            {
              name: "CookBook",
              url: "https://app.cookbookmanager.com",
              icon: "tools-kitchen-2",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "One",
              url: "https://www.one.com/no/",
              icon: "circle-number-1",
              icon_color: palette.green,
            },
            {
              name: "Finn",
              url: "www.finn.no",
              icon: "tag",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
