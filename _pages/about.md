---
layout: about
title: about
permalink: /
subtitle: <span style="font-weight:700 !important;">Research Intern, <a href='https://www.oist.jp/research/research-units/grsu'>Genomics & Regulatory Systems Unit, OIST</a>. Onna, Okinawa, Japan.</span>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Onna, Okinawa, Japan</p>
    <p><a href="mailto:amirata.ghafarian@gmail.com">amirata.ghafarian@gmail.com</a></p>

selected_papers: false # no publications yet — switch to true once you have some
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I am a Research Intern in the [Genomics & Regulatory Systems Unit](https://www.oist.jp/research/research-units/grsu) at the Okinawa Institute of Science and Technology (OIST), working under Prof. Nicholas Luscombe and Dr. Charles Plessy. My research sits at the intersection of AI and bioinformatics: I apply **self-supervised learning, Transformers, and graph neural networks** to decode genomic rearrangement patterns, representing pairwise whole-genome alignments through a multimodal approach to uncover structural variation at scale. I also run the end-to-end computational pipeline behind this work on OIST's HPC cluster (Slurm, Singularity, PyTorch DDP).

I hold a B.Sc. in Computer Science from [Amirkabir University of Technology](https://aut.ac.ir/) (Tehran Polytechnic), where I graduated with a 4.0/4.0 GPA and ranked 3rd in my cohort, after placing in the top 0.3% of Iran's national university entrance exam in mathematics. My research interests span **world models & reinforcement learning, robotics, embodied AI, large language models, neuroscience, and computational biology** — I am especially drawn to problems where learning good representations of structured, high-dimensional data is the key bottleneck.

Before OIST I worked as a DevOps engineer at ICT Group, completed a Site Reliability Engineering bootcamp at [Neshan](https://neshan.org/), was a research assistant at Sharif University's Center for Information Systems and Data Science (diffusion models and Transformers for predictive maintenance), and interned as a software engineer at [Yektanet](https://www.yektanet.com/). I have also served as a teaching assistant for machine learning, AI, algorithms, and image-processing courses at Amirkabir and Sharif. That engineering background shapes how I approach research: I care as much about robust, reproducible pipelines as I do about the models themselves. On the side I build [MyTorch](https://github.com/amirata051/mytorch), a from-scratch automatic-differentiation and neural-network framework with a PyTorch-like API, verified by 1,200+ tests.

I am currently applying for Ph.D. positions starting in 2027. Feel free to reach out if my research interests overlap with yours.

<!-- Profile photo hover effect: the photo cross-fades into a Starry-Night-style painting
     (assets/img/prof_pic_painting.jpg) on hover; on touch screens a tap toggles it. -->
<style>
  .profile figure {
    margin: 0;
  }
  .profile picture {
    display: block;
    position: relative;
    overflow: hidden;
    border-radius: 0.25rem;
    box-shadow:
      0 2px 5px #00000029,
      0 2px 10px #0000001f;
    background: url("{{ '/assets/img/prof_pic_painting.jpg' | relative_url }}") center / cover no-repeat;
  }
  .profile picture img {
    display: block;
    box-shadow: none;
    transition: opacity 0.6s ease;
  }
  @media (hover: hover) {
    .profile picture:hover img {
      opacity: 0;
    }
  }
  .profile picture.is-painting img {
    opacity: 0;
  }
  @media (prefers-reduced-motion: reduce) {
    .profile picture img {
      transition: none;
    }
  }
</style>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    var picture = document.querySelector(".profile picture");
    if (!picture || window.matchMedia("(hover: hover)").matches) return;
    picture.addEventListener("click", function () {
      picture.classList.toggle("is-painting");
    });
  });
</script>
