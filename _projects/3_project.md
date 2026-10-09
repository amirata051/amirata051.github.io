---
layout: page
title: Knowledge Graph Generator
description: Turns PDF documents into an evolving knowledge graph through a containerized, idempotent pipeline.
importance: 2
category: engineering
period: 2025
stack: [FastAPI, GraphRAG-SDK, FalkorDB, Kafka, MinIO]
links:
  - { label: Code, url: "https://github.com/amirata051/kg-generator", icon: fa-brands fa-github }
related_publications: false
---

<p class="pj-page-meta">{% if page.org %}{{ page.org }} · {% endif %}{{ page.period }}{% for link in page.links %} · <a href="{{ link.url }}"><i class="{{ link.icon }}"></i> {{ link.label }}</a>{% endfor %}</p>

Upload PDFs, and a worker extracts their content and grows a knowledge graph you can explore in the browser.

- **Pipeline.** Unstructured-IO parses PDFs, GraphRAG-SDK builds the graph, and FalkorDB stores it.
- **Scaling.** Kafka queues work asynchronously, MinIO stores the files, and Redis hashes keep every stage idempotent.
- **Interface.** A FastAPI backend and a Streamlit frontend, all orchestrated with Docker Compose.
