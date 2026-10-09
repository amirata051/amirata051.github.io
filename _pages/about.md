---
layout: about
title: about
permalink: /
subtitle: Research Intern @ OIST · Machine Learning & Genomics

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular

selected_papers: false # no publications yet — switch to true once you have some
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
  limit: 4 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I'm a Research Intern in the [Genomics & Regulatory Systems Unit](https://www.oist.jp/research/research-units/grsu) at OIST, working with Prof. Nicholas Luscombe and Dr. Charles Plessy. I use self-supervised learning and graph neural networks to decode how genomes rearrange across the tree of life.

I hold a B.Sc. in Computer Science from [Amirkabir University of Technology](https://aut.ac.ir/) (GPA 4.0/4.0, ranked 3rd in my cohort). Before research I worked as a DevOps and software engineer, so I care about reproducible pipelines as much as about models.

I'm interested in world models, reinforcement learning, embodied AI and computational biology, and I'm applying for **Ph.D. positions starting in 2027**.

<!-- Tap toggles the painted photo on touch screens; the hover styles live in assets/css/main.scss. -->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    var picture = document.querySelector(".profile picture");
    if (!picture) return;
    picture.addEventListener("pointerup", function (event) {
      if (event.pointerType === "touch") picture.classList.toggle("is-painting");
    });
  });
</script>
