# Nice Tat

Astro Site Template inspired by Casey Neistat’s ultra minimal personal site. 

Great for a LinkInBio type site or just a placeholder while you work on getting your personal site right for the next 35 years. 


Gif Demo

Watch Setup Video

View Demo

Deploy to Netlify
Deploy to Vercel


## 🌟 Features
- ✅ One-Click Deploy to Netlify or Vercel
- ✅ Markdown for Easy Edits
- ✅ TailwindCSS for Easy Styling
- 🌙 Dark Mode for Night Owls
- 🔄 Page Transitions for Smooth Navigation
- 🌐 SEO-friendly Out of the Box
- 📝 Detailed README for Quick Setup
- 📸 onlyfans


## 🛠 The Stack
- Astro
- Tailwind
- HTML
- Markdown



## 🚀 How to setup

Simply click one of the deploy buttons above, fill in the site details and your site should be running in about 2 mins. 



## ✏️ Editing the Site

You can edit the site directly on GitHub or clone the repo to your local machine. 


## 📄 Adding a new page

To add a new page simply create a new Markdown file in the /src/pages directory, Example: /src/pages/twitch.md, and add your content and options. 

You can also copy and paste an existing markdown file. 



## ⚙️ Page Options

These are the options you can use to configure each page. 

- inNav
    - Whether or not the page is shown in navigation. 
    - Example - inNav: false
    - Defaults to true
- redirect
    - The link the page will go to instead of
    - Example - redirect: https://www.youtube.com/caseyneistat
    - Defaults to nothing, the content will be shown when page is visited. 
- content
    - The content to be shown on your page when you don't want it to redirect somewhere else. Supports Markdown. 
    - See Markdown Example - https://dillinger.io/
- order
    - The order that your page will show up in navigation. 
    - Example - order: -1
    - Defaults to 0
- title
    - The title as presented in Browser Tabs and when your page is shared on Social Media. 
    - Example - title: "Contact"
    - Defaults to the file name of the page. 


## 🌍 Site Wide Options

You can customize the site name as well as other options for the whole site in the astro.config.mjs file

Astro Config Docs


## ❓ Why not add X, Y, and Z?

Because HTML is a beautiful language not everything needs to use the latest tool for building a planet scale multi-tenant sharded vector database backed web application. 

If you really want to extend the site the Astro Docs should get you pretty far: https://docs.astro.build/en/getting-started/


## ❓ Additional questions

You can ask the ChatGPT Bot for this project or or open a new Issue here


## 🙏 Credits
Inspired by [Casey Neistat's Website](https://www.caseyneistat.com/).




## 👀 Want to learn more about Astro?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
