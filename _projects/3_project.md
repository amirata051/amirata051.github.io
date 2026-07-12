---
layout: page
title: Knowledge Graph Generator
description: A system for generating knowledge graphs from heterogeneous data sources
importance: 1
category: engineering
related_publications: false
github: https://github.com/amirata051/kg-generator
---

A system to generate knowledge graphs from various data sources using Python, designed around a scalable, idempotent processing pipeline.

### Stack

- **FalkorDB** for graph storage
- **Kafka** for real-time data processing
- **MinIO** for object storage
- **Redis** for ensuring idempotency across pipeline stages
