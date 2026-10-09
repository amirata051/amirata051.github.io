---
layout: page
title: Dotanet Ad Server
description: A team-built ad-serving platform with real-time auctions and click and impression tracking.
importance: 4
category: engineering
org: Yektanet internship
period: 2024
stack: [Go, PostgreSQL, Kafka, Docker]
links:
  - { label: Code, url: "https://github.com/nobletooth/dotanet", icon: fa-brands fa-github }
related_publications: false
---

<p class="pj-page-meta">{% if page.org %}{{ page.org }} · {% endif %}{{ page.period }}{% for link in page.links %} · <a href="{{ link.url }}"><i class="{{ link.icon }}"></i> {{ link.label }}</a>{% endfor %}</p>

Built with a team of interns during my software-engineering internship at Yektanet: an ad server, an event service, an advertiser and publisher panel, and a demo publisher website.

- **My part.** Ad retrieval, auctions, and click and impression tracking, served through RESTful APIs.
- **Stack.** Go, PostgreSQL and Kafka, containerized with Docker, designed to scale across many publisher websites.
