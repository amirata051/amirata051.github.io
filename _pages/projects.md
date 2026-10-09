---
layout: page
title: projects
permalink: /projects/
description: Research and engineering work. Open a card for details, figures and code.
nav: true
nav_order: 3
display_categories: [research, engineering]
---

<!-- Cards are rendered here (not by the theme's projects include) so they can show period, stack and links. -->
<div class="pj">
  {% for category in page.display_categories %}
    {% assign items = site.projects | where: "category", category | sort: "importance" %}
    <section class="pj-section" aria-labelledby="pj-{{ category }}">
      <h2 class="pj-heading" id="pj-{{ category }}">{{ category }}</h2>
      <div class="pj-grid">
        {% for project in items %}
          <article class="pj-card">
            <p class="pj-meta">{% if project.org %}{{ project.org }} · {% endif %}{{ project.period }}</p>
            <h3 class="pj-title"><a class="pj-link" href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
            <p class="pj-desc">{{ project.description }}</p>
            {% if project.stack %}
              <ul class="chips" aria-label="Stack">
                {% for item in project.stack %}<li>{{ item }}</li>{% endfor %}
              </ul>
            {% endif %}
            {% if project.links %}
              <p class="pj-actions">
                {% for link in project.links %}
                  <a href="{{ link.url }}"><i class="{{ link.icon }}"></i> {{ link.label }}</a>
                {% endfor %}
              </p>
            {% endif %}
          </article>
        {% endfor %}
      </div>
    </section>
  {% endfor %}
</div>
