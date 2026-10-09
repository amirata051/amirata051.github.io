---
layout: page
permalink: /repositories/
title: repositories
description: Code behind my research and engineering projects.
nav: true
nav_order: 5
---

<div class="rp-grid">
  {% for item in site.data.repositories.repos %}
    {% assign parts = item.repo | split: '/' %}
    <a class="rp-card" href="https://github.com/{{ item.repo }}">
      <span class="rp-name"><i class="fa-brands fa-github" aria-hidden="true"></i> <span class="rp-owner">{{ parts[0] }}/</span>{{ parts[1] }}</span>
      <span class="rp-desc">{{ item.description }}</span>
      <span class="rp-foot">
        <span class="rp-lang"><span class="rp-dot rp-dot-{{ item.language | slugify }}" aria-hidden="true"></span>{{ item.language }}</span>
        {% for topic in item.topics %}<span class="rp-topic">{{ topic }}</span>{% endfor %}
      </span>
    </a>
  {% endfor %}
</div>
