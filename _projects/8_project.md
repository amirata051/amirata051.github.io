---
layout: page
title: MyTorch
description: A deep learning framework built from scratch to learn how PyTorch works.
importance: 1
category: engineering
org: Personal project
period: 2026
stack: [Python, NumPy, Autodiff, Rust]
links:
  - { label: Code, url: "https://github.com/amirata051/mytorch", icon: fa-brands fa-github }
related_publications: false
---

<p class="pj-page-meta">{% if page.org %}{{ page.org }} · {% endif %}{{ page.period }}{% for link in page.links %} · <a href="{{ link.url }}"><i class="{{ link.icon }}"></i> {{ link.label }}</a>{% endfor %}</p>

A from-scratch automatic-differentiation and neural-network library with a PyTorch-like API, small enough to read end to end: about 10,600 lines, with every gradient rule derived by hand next to its operation.

- **Two engines, one design.** A zero-dependency scalar engine and a NumPy tensor engine with strict broadcasting and source-line provenance in every error.
- **Autodiff.** Reverse and forward mode, Hessian-vector products, and `gradcheck` on every operation.
- **Training stack.** `nn` modules, SGD/Adam/AdamW, a seeded `DataLoader`, and run recording.
- **Diagnostics that name the problem.** Saturated activations, vanishing or exploding gradients, dead units and mis-set learning rates, reported per layer.

Built with an agentic coding partner, with every change validated by 1,200+ tests, gradient checks, strict type and lint gates, and CI on Python 3.11–3.14.
