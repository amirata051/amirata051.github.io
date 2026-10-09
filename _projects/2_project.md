---
layout: page
title: DiffRUL
description: Diffusion-based data augmentation for remaining-useful-life estimation of aero-engines and bearings.
importance: 3
category: research
org: Sharif University
period: 2025
stack: [PyTorch, DDPM, LSTM, Transformer]
links:
  - { label: C-MAPSS code, url: "https://github.com/amirata051/DiffRUL-CMAPSS", icon: fa-brands fa-github }
  - { label: XJTU-SY code, url: "https://github.com/amirata051/Bearing-DiffRUL-XJTU-SY", icon: fa-brands fa-github }
related_publications: false
---

<p class="pj-page-meta">{% if page.org %}{{ page.org }} · {% endif %}{{ page.period }}{% for link in page.links %} · <a href="{{ link.url }}"><i class="{{ link.icon }}"></i> {{ link.label }}</a>{% endfor %}</p>

Run-to-failure data is scarce and heavily imbalanced, which limits remaining-useful-life (RUL) models. Following [Wang et al. (RESS 2024)](https://doi.org/10.1016/j.ress.2024.110394), a denoising diffusion model generates realistic degradation sequences to augment training data. Research assistantship at Sharif University's Center for Information Systems and Data Science, supervised by Dr. Babak Khalaj and Dr. Mohammad Hossein Rohban.

- **Aero-engines (NASA C-MAPSS).** DDPM augmentation feeding LSTM and Transformer RUL predictors.
- **Bearings (XJTU-SY).** The same approach applied to rolling-bearing vibration data from accelerated life tests.
