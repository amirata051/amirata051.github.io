---
layout: page
title: Bearing-DiffRUL
description: Diffusion-based remaining-useful-life estimation for rolling bearings
importance: 3
category: research
related_publications: false
github: https://github.com/amirata051/Bearing-DiffRUL-XJTU-SY
---

**Sharif Center for Information Systems and Data Science** — 2025
Supervised by Dr. Babak Khalaj and Dr. Mohammad Hossein Rohban

A companion to [DiffRUL-CMAPSS]({{ '/projects/' | relative_url }}) that carries the diffusion-based augmentation idea from aero-engines to **rolling-bearing degradation** on the XJTU-SY run-to-failure dataset. Vibration signals are noisy, and healthy-vs-failing samples are heavily imbalanced — a natural fit for generative augmentation.

### Highlights

- Denoising Diffusion Probabilistic Model (DDPM) to synthesize realistic bearing-vibration sequences
- Augmented training data feeding sequence models for remaining-useful-life (RUL) prediction
- Evaluated on the XJTU-SY accelerated-life-test benchmark
