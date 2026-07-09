---
layout: page
title: Scrambling in the Tree of Life
description: Self-supervised deep learning for comparative genomic rearrangement analysis
importance: 1
category: research
related_publications: false
---

**OIST Genomics & Regulatory Systems Unit** — Feb 2026 – Present
Supervised by Prof. Nicholas Luscombe and Dr. Charles Plessy

As genomes diverge over evolutionary time, they undergo large-scale structural rearrangements — translocations, inversions, duplications, fissions, and fusions. This project asks whether a **self-supervised deep learning model** can learn a compact, biologically meaningful latent geometry of these rearrangements directly from raw pairwise alignment structure, without labelled topology annotations.

### Approach

Pairwise whole-genome alignments are encoded as **point clouds** — unordered sets of aligned blocks, each featurised by genomic coordinates, strand orientation, and alignment quality. A **Set Transformer** models pairwise interactions between blocks via self-attention, and a **Pooling by Multihead Attention (PMA)** module aggregates the variable-size set into a fixed-dimension latent vector. The model is trained with the **VICReg** self-supervised objective, enforcing invariance between views, variance regularization to prevent representational collapse, and covariance penalties to decorrelate latent dimensions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <ul>
            <li>Set Transformer + PMA pooling on 5D genomic point clouds</li>
            <li>VICReg self-supervised loss</li>
            <li>PyTorch DDP across 4x A100 GPUs on OIST's Saion HPC cluster</li>
            <li>BF16 mixed precision, Flash Attention, torch.compile</li>
        </ul>
    </div>
</div>

### Status

Currently validating whether learned clusters reflect genomic topology versus domain identity, and preparing a submission to a NeurIPS 2026 workshop on machine learning for genomics.