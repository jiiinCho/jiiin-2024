---
title: "About this project"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2020-08-13T05:35:07.322Z"
author:
  name: Joe Haddad
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

This project is a food recipe blog built using Next.js, where all blog posts are stored as local Markdown files and read directly from the file system. We've styled the blog with Tailwind CSS for a clean and modern look.

The blog uses **Static Generation**, a method that pre-renders pages at build time, making them incredibly fast to load since they are served directly by a CDN. This approach is ideal for content that doesn’t change often, ensuring a speedy and smooth user experience.

Next.js allows for two types of pre-rendering: Static Generation and Server-side Rendering. With Static Generation, the HTML is created once during the build process and reused on every request, perfect for pages that can be generated ahead of time. For pages that need to be up-to-date with every request, Server-side Rendering can be used, though it’s slightly slower.

We've also incorporated the gray-matter library to efficiently parse metadata in each Markdown file, making it easier to manage content.

