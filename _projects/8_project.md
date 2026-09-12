---
layout: page
title: MyTorch
description: A from-scratch deep learning framework you can read end to end, built to learn how PyTorch works
importance: 1
category: engineering
related_publications: false
github: https://github.com/amirata051/mytorch
---

**Personal project** — Jun 2026 – Present

MyTorch is a from-scratch automatic-differentiation and neural-network library written in Python on top of NumPy, with an API that deliberately mirrors PyTorch. It started as a reimplementation of micrograd and grew into a ~10,600-line framework small enough to read in full: every gradient rule is derived by hand and lives next to the operation it belongs to.

### What it implements

- **Two engines sharing one design** — a zero-dependency scalar engine (one node per number) and a NumPy-backed tensor engine with strict broadcasting and provenance tracking
- **Reverse- and forward-mode AD**, exact Hessian-vector products, and finite-difference `gradcheck`
- **`nn` / `optim` / `data` modules** — `Module` with parameter auto-discovery, `Linear`, `BatchNorm1d`, `Sequential`, losses; SGD, Adam, AdamW; seeded `DataLoader`
- **Training diagnostics that name the problem** — saturated activations, vanishing/exploding gradients, dead units, and mis-set learning rates, reported per layer with the threshold that fired
- **A compiled tape** that lowers a graph to a flat instruction stream with liveness analysis, neural ODEs with adjoint backprop, physical-unit propagation, and reproducible `Run` recording

### How it was built

Developed with an agentic coding partner, with every generated change validated through 1,200+ Python tests, gradient checks, strict type and lint gates, CI across Python 3.11–3.14, and benchmarks — the README reports the numbers that came out badly as well as the ones that didn't.
