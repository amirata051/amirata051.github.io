---
layout: page
title: Goal-Space Planning, reproduced
description: A from-scratch reproduction of Goal-Space Planning with Subgoal Models (JMLR 2024) on FourRooms.
importance: 2
category: research
org: Independent
period: 2026
stack: [Python, NumPy, Reinforcement learning]
links:
  - { label: Code, url: "https://github.com/amirata051/gsp-fourrooms", icon: fa-brands fa-github }
  - { label: Interactive report, url: "https://amirata051.github.io/gsp-fourrooms/report/", icon: fa-solid fa-chart-line }
related_publications: false
---

<p class="pj-page-meta">{% if page.org %}{{ page.org }} · {% endif %}{{ page.period }}{% for link in page.links %} · <a href="{{ link.url }}"><i class="{{ link.icon }}"></i> {{ link.label }}</a>{% endfor %}</p>

A tabular reproduction of [Goal-Space Planning with Subgoal Models](https://arxiv.org/abs/2206.02902) (Lo et al., _JMLR_ 2024) on the paper's FourRooms domain. GSP plans over a small graph of subgoals instead of every state, then hands the resulting values to an ordinary TD learner as a potential-based shaping reward: learning gets faster, and the optimal policy cannot change. Using **exact** subgoal models isolates what planning and shaping do by themselves, a ceiling for learned models to be measured against.

{% include figure.liquid path="assets/img/projects/gsp_planning.gif" avoid_scaling=true class="img-fluid rounded gsp-anim" alt="Value iteration over 104 states next to goal-space planning over 5 subgoals" %}

<div class="stat-grid">
  <div class="stat"><span class="stat-value">18 → 3</span><span class="stat-label">value-iteration sweeps, 104 states vs. 5 subgoals</span></div>
  <div class="stat"><span class="stat-value">1 → 188</span><span class="stat-label">state–action pairs updated by one episode, Sarsa(0) vs. GSP + Sarsa(λ)</span></div>
  <div class="stat"><span class="stat-value">35 → 18</span><span class="stat-label">episodes to near-optimal, Sarsa(λ) vs. GSP</span></div>
  <div class="stat"><span class="stat-value">18 → 7</span><span class="stat-label">episodes to re-route around new lava, Sarsa vs. GSP (consistent init.)</span></div>
</div>

{% include figure.liquid path="assets/img/projects/gsp_learning_curves.png" class="img-fluid rounded" alt="Learning curves for Sarsa with and without GSP" caption="GSP halves the episodes Sarsa(λ) needs and rescues Sarsa(0), which is not near-optimal within 200 episodes on its own." %}

## Highlights

- One command regenerates all 8 experiments, their figures and the report in about 3 minutes on one CPU core; `gsp check` verifies 10 numerical invariants, and 34 tests cover the rest.
- Measured rather than hypothetical: Dyna-Q with 30 planning updates per step still needs 2,732 environment steps for 50 episodes, while GSP needs 1,231 with 30 updates in total.
- With 20% model noise, bootstrapping from the subgoal values collapses (670 steps per episode) while shaping degrades gracefully (27 steps).
- Three open discrepancies with the paper are documented with candidate causes.
