---
layout: page
title: Scrambling in the Tree of Life
description: Self-supervised learning of genome-rearrangement patterns from pairwise whole-genome alignments.
importance: 1
category: research
org: OIST
period: 2026 – present
stack: [PyTorch DDP, Set Transformer, VICReg, Slurm]
related_publications: false
---

<p class="pj-page-meta">{% if page.org %}{{ page.org }} · {% endif %}{{ page.period }}{% for link in page.links %} · <a href="{{ link.url }}"><i class="{{ link.icon }}"></i> {{ link.label }}</a>{% endfor %}</p>

As genomes diverge they rearrange: inversions, translocations, duplications, fissions and fusions. This project asks whether a self-supervised model can learn a meaningful geometry of these rearrangements directly from alignment structure, without labelled topologies. Supervised by Prof. Nicholas Luscombe and Dr. Charles Plessy.

## Approach

- **Data.** Each pairwise whole-genome alignment becomes a 5D point cloud of aligned blocks: genomic coordinates, strand and alignment quality.
- **Model.** A Set Transformer models interactions between blocks, and Pooling by Multihead Attention maps each variable-size set to one embedding.
- **Objective.** VICReg: invariance across views, variance against collapse, covariance to decorrelate dimensions.
- **Scale.** PyTorch DDP on 4× A100 GPUs on OIST's Saion cluster, with BF16, Flash Attention and `torch.compile`.

## Status

Ongoing. I am currently testing whether the learned clusters reflect genomic topology rather than domain identity.
