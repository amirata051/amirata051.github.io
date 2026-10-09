---
layout: page
title: Applicant Tracking System
description: Ranks CVs against a job description using sentence embeddings.
importance: 5
category: engineering
org: Team project
period: 2025
stack: [Flask, SentenceTransformers, Docker]
links:
  - { label: Code, url: "https://github.com/AmirmahdiTavakoli/ATS", icon: fa-brands fa-github }
related_publications: false
---

<p class="pj-page-meta">{% if page.org %}{{ page.org }} · {% endif %}{{ page.period }}{% for link in page.links %} · <a href="{{ link.url }}"><i class="{{ link.icon }}"></i> {{ link.label }}</a>{% endfor %}</p>

A web app that takes a job description and a batch of CVs (PDF or text) and returns the best matches.

- **Ranking.** SentenceTransformers embeddings scored by cosine similarity.
- **App.** Flask with RESTful endpoints, sanitised uploads, and Docker for deployment.
