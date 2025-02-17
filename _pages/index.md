---
layout: page
title: Home
permalink: /
---

<div class="profile-container">
  <div class="profile-text">
    <!-- <h1 class="profile-title"> Eneko Uruñuela</h1> -->
    <p class="profile-description">A postdoctoral researcher at the University of Calgary, developing AI models to predict tissue outcome in stroke patients.</p>
  </div>
  <div class="profile-pic-container" style="margin-top: 1em;">
    <img src="assets/profile.jpg" alt="Eneko Uruñuela" class="profile-pic">
  </div>
</div>

## Latest

<div class="landing-note-container">
  {% assign recent_notes = site.notes | sort: "date" | reverse %}
  {% for note in recent_notes limit: 1 %}
    <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">
      <p class="note-title">{{ note.title }}</p>
      <p class="note-date">{{ note.date | date: "%B %-d, %Y" }}</p>
      <p class="note-excerpt">{{ note.content | strip_html | truncate: 300}} →</p>
    </a>
  {% endfor %}
</div>

## Recent publications

For the full list of publications, please see <a class="internal-link" href="{{ site.baseurl }}/publications">publications</a> or visit my [Google Scholar profile](https://scholar.google.com/citations?user=KLIjERgAAAAJ&hl=en).

<div id="publications" class="publication-container">
    <div id="loading-publications" class="loading-spinner">Loading recent publications... <span class="spinner"></span></div>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const publicationList = document.getElementById("publications");
        const loadingEl = document.getElementById("loading-publications");
        const orcidId = "0000-0001-6849-9088";
        
        // Set timeout for fallback
        const timeout = setTimeout(() => {
            if (loadingEl) {
                loadingEl.remove();
                publicationList.innerHTML = '<p>View my <a href="/publications">full publication list</a>.</p>';
            }
        }, 5000);

        fetch(`https://pub.orcid.org/v3.0/${orcidId}/works`, {
            headers: { "Accept": "application/json" }
        })
            .then(response => response.json())
            .then(data => {
                clearTimeout(timeout);
                loadingEl.remove();
                
                const publications = data.group.slice(0, 5);
                publications.forEach(publication => {
                    const title = publication["work-summary"][0]["title"]["title"]["value"];
                    const workType = publication["work-summary"][0]["type"];
                    
                    if (publication["external-ids"]?.["external-id"]?.[0]) {
                        const doi = publication["external-ids"]["external-id"][0]["external-id-value"];
                        const citationUrl = 'https://citation.crosscite.org/format';
                        const citationParams = `?doi=${doi}&style=apa&lang=en-US`;
                        const proxyUrl = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
                            ? `https://api.crossref.org/works/${doi}/transform/text/x-bibliography`
                            : `/api/proxy?url=${encodeURIComponent(citationUrl + citationParams)}`;

                        fetch(proxyUrl)
                            .then(response => response.ok ? response.text() : Promise.reject('Failed to fetch citation'))
                            .then(citation => {
                                const publicationDiv = document.createElement("div");
                                publicationDiv.className = "publication";
                                const citationDiv = document.createElement("div");
                                citationDiv.className = "citation";
                                citationDiv.innerHTML = citation
                                    .replace(/Uruñuela, E\./g, '<span class="citation-me">Uruñuela, E.</span>')
                                    .replace(title, `<strong>${title}</strong>`)
                                    .replace(/https:\/\/doi.org\/[^\s]+/g, '');
                                
                                if (workType !== "journal-article") {
                                    citationDiv.innerHTML += ` (${workType.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')})`;
                                }
                                
                                publicationDiv.appendChild(citationDiv);
                                const doiLink = document.createElement("a");
                                doiLink.href = `https://doi.org/${doi}`;
                                doiLink.textContent = `https://doi.org/${doi}`;
                                publicationDiv.appendChild(doiLink);
                                publicationList.appendChild(publicationDiv);
                            })
                            .catch(() => {
                                // Fallback to simple display on error
                                const publicationDiv = document.createElement("div");
                                publicationDiv.className = "publication";
                                publicationDiv.innerHTML = `<div class="citation"><strong>${title}</strong></div>`;
                                publicationList.appendChild(publicationDiv);
                            });
                    }
                });
            })
            .catch(error => {
                clearTimeout(timeout);
                loadingEl.remove();
                publicationList.innerHTML = '<p>View my <a href="/publications">full publication list</a>.</p>';
            });
    });
</script>

I have also presented my work at international <a class="internal-link" href="{{ site.baseurl }}/conferences/">conferences</a> and given <a class="internal-link" href="{{ site.baseurl }}/talks/">presentations</a> at various reknown institutions.
