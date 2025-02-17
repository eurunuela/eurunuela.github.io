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
    <div id="loading-publications">Loading recent publications...</div>
</div>

<script>
    function cachePublication(key, data) {
        const cache = {
            timestamp: Date.now(),
            data: data
        };
        localStorage.setItem(key, JSON.stringify(cache));
    }

    function getCachedPublication(key) {
        const cached = localStorage.getItem(key);
        if (!cached) return null;

        const { timestamp, data } = JSON.parse(cached);
        // Cache for 24 hours
        if (Date.now() - timestamp > 24 * 60 * 60 * 1000) {
            localStorage.removeItem(key);
            return null;
        }
        return data;
    }

    document.addEventListener("DOMContentLoaded", function() {
        const publicationList = document.getElementById("publications");
        const loadingEl = document.getElementById("loading-publications");
        const orcidId = "0000-0001-6849-9088";
        
        // Try to get cached data first
        const cached = getCachedPublication('recent-publications');
        if (cached) {
            loadingEl.remove();
            cached.forEach(pub => publicationList.appendChild(pub.cloneNode(true)));
            return;
        }

        // If no cache, fetch from API
        fetch(`https://pub.orcid.org/v3.0/${orcidId}/works`, {
            headers: { "Accept": "application/json" }
        })
            .then(response => response.json())
            .then(data => {
                const publications = data.group.slice(0, 5);
                loadingEl.remove();
                const pubElements = [];

                publications.forEach(publication => {
                    var title = publication["work-summary"][0]["title"]["title"]["value"];
                    var workType = publication["work-summary"][0]["type"];
                    
                    if (publication["external-ids"] && 
                        publication["external-ids"]["external-id"] && 
                        publication["external-ids"]["external-id"].length > 0) {
                        
                        var doi = publication["external-ids"]["external-id"][0]["external-id-value"];
                        // In local development, just show the title and DOI
                        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
                            var publicationDiv = document.createElement("div");
                            publicationDiv.className = "publication";
                            var citationDiv = document.createElement("div");
                            citationDiv.className = "citation";
                            citationDiv.innerHTML = `<strong style="font-style: normal">${title}</strong>`;
                            
                            if (workType !== "journal-article") {
                                var formattedWorkType = workType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                                citationDiv.innerHTML += ` (${formattedWorkType})`;
                            }
                            
                            publicationDiv.appendChild(citationDiv);
                            var doiLink = document.createElement("a");
                            doiLink.href = "https://doi.org/" + doi;
                            doiLink.textContent = "https://doi.org/" + doi;
                            publicationDiv.appendChild(doiLink);
                            publicationList.appendChild(publicationDiv);
                            pubElements.push(publicationDiv);
                            return;
                        }

                        // In production, use our proxy
                        var citationUrl = 'https://citation.crosscite.org/format';
                        var citationParams = `?doi=${doi}&style=apa&lang=en-US`;
                        var proxyUrl = `/api/proxy?url=${encodeURIComponent(citationUrl + citationParams)}`;

                        fetch(proxyUrl)
                            .then(response => {
                                if (response.ok) {
                                    return response.text();
                                }
                                throw new Error('DOI not found');
                            })
                            .then(citation => {
                                var publicationDiv = document.createElement("div");
                                publicationDiv.className = "publication";
                                var citationDiv = document.createElement("div");
                                citationDiv.className = "citation";
                                citationDiv.innerHTML = citation;
                                publicationDiv.appendChild(citationDiv);
                                publicationList.appendChild(publicationDiv);
                                pubElements.push(publicationDiv);
                            })
                            .catch(error => {
                                var publicationDiv = document.createElement("div");
                                publicationDiv.className = "publication";
                                var citationDiv = document.createElement("div");
                                citationDiv.className = "citation";
                                citationDiv.innerHTML = `<strong style="font-style: normal">${title}</strong>`;
                                publicationDiv.appendChild(citationDiv);
                                publicationList.appendChild(publicationDiv);
                                pubElements.push(publicationDiv);
                            });
                    }
                });

                // Cache the generated elements
                cachePublication('recent-publications', pubElements);
            });
    });
</script>

I have also presented my work at international <a class="internal-link" href="{{ site.baseurl }}/conferences/">conferences</a> and given <a class="internal-link" href="{{ site.baseurl }}/talks/">talks</a> at various reknown institutions.
