---
layout: page
permalink: /publications/
title: publications
description: No peer-reviewed publications yet — my first preprints are in progress. Manuscripts and talks will appear here as they become available.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{%- capture bib_output -%}
{% bibliography %}
{%- endcapture -%}
{%- assign bib_output = bib_output | strip -%}

{% if bib_output == "" %}

<div class="publications">
  <p>
    I don't have any published papers yet. My current research at OIST — self-supervised
    representation learning for genomic rearrangements — is ongoing, and I expect to share
    preprints here as the work matures.
  </p>
  <p>
    In the meantime, the <a href="{{ '/projects/' | relative_url }}">projects</a> page is the
    best snapshot of what I've been building, and my <a href="{{ '/cv/' | relative_url }}">CV</a>
    has the full picture. Feel free to <a href="mailto:{{ site.email }}">reach out</a> if you'd
    like to talk about any of it.
  </p>
</div>

{% else %}

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

{% endif %}
