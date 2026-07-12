---
layout: page
permalink: /repositories/
title: repositories
description: A few repositories I've built or contributed to — spanning deep learning research, information retrieval, and backend systems.
nav: true
nav_order: 4
---

<div class="row row-cols-1 row-cols-md-2">
  {% for item in site.data.repositories.repos %}
    {% assign repo_name = item.repo | split: '/' | last %}
    <div class="col">
      <a href="https://github.com/{{ item.repo }}" target="_blank" rel="noopener">
        <div class="card h-100 hoverable">
          <div class="card-body">
            <h2 class="card-title">{{ repo_name }}</h2>
            <p class="card-text">{{ item.description }}</p>
            <div class="row ml-1 mr-1 p-0">
              <div class="github-icon">
                <div class="icon" data-toggle="tooltip" title="{{ item.repo }}">
                  <i class="fa-brands fa-github gh-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
