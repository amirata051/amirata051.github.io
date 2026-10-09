---
layout: page
title: Search Engine
description: An information-retrieval system for Persian text that combines sparse and dense retrieval.
importance: 3
category: engineering
period: 2025
stack: [TF-IDF, ParsBERT, K-Means, FAISS]
links:
  - { label: Code, url: "https://github.com/amirata051/Information-Retrieval", icon: fa-brands fa-github }
related_publications: false
---

<p class="pj-page-meta">{% if page.org %}{{ page.org }} · {% endif %}{{ page.period }}{% for link in page.links %} · <a href="{{ link.url }}"><i class="{{ link.icon }}"></i> {{ link.label }}</a>{% endfor %}</p>

A search engine over a Persian-language corpus, built from the ground up in Python.

- **Sparse retrieval.** TF-IDF ranking.
- **Dense retrieval.** ParsBERT embeddings for semantic matching.
- **Speed.** K-Means clustering organises the document space, and FAISS answers nearest-neighbour queries.
