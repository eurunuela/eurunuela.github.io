---
layout: page
title: Home
id: home
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

<div id="publications" class="publication-container"></div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
      fetchPublications();
  });

  function fetchPublications() {
      var orcidId = "0000-0001-6849-9088";
      var orcidEndpoint = "https://pub.orcid.org/v3.0/" + orcidId + "/works";
      var headers = new Headers({
          "Accept": "application/json"
      });

      fetch(orcidEndpoint, { headers: headers })
          .then(response => response.json())
          .then(data => {
              var publications = data["group"].slice(0, 5); // Get only the 5 newest publications
              var publicationList = document.getElementById("publications");

              publications.forEach(publication => {
                  var title = publication["work-summary"][0]["title"]["title"]["value"];
                  var workType = publication["work-summary"][0]["type"];
                  var doi = publication["external-ids"]["external-id"][0]["external-id-value"];
                  var crossciteEndpoint = "https://citation.crosscite.org/format?doi=" + encodeURIComponent(doi) + "&style=apa&lang=en-US";

                  fetch(crossciteEndpoint)
                      .then(response => {
                          if (response.ok) {
                              return response.text();
                          } else {
                              throw new Error('Metadata for DOI not found');
                          }
                      })
                      .then(citation => {
                          var highlightedCitation = citation.replace(/Uruñuela, E./g, '<span class="citation-me">Uruñuela, E.</span>');
                          // Replace the title with a bold case title
                          highlightedCitation = highlightedCitation.replace(title, `<span class="publication title">${title}</span>`);
                          var publicationDiv = document.createElement("div");
                          publicationDiv.className = "publication";

                          var citationDiv = document.createElement("div");
                          citationDiv.className = "citation";
                          citationDiv.innerHTML = highlightedCitation.replace(/https:\/\/doi.org\/[^\s]+/g, '');
                          // Append the work type if it is not "journal-article"
                          if (workType !== "journal-article") {
                                  var formattedWorkType = workType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                                  citationDiv.innerHTML += ` (${formattedWorkType}).`;
                          }
                          publicationDiv.appendChild(citationDiv);

                          var doiLink = document.createElement("a");
                          // Add style to the doi link to make the text smaller
                          doiLink.style.fontSize = "0.8em";
                          doiLink.href = "https://doi.org/" + doi;
                          doiLink.textContent = "https://doi.org/" + doi;
                          publicationDiv.appendChild(doiLink);

                          publicationList.appendChild(publicationDiv);
                      })
                      .catch(error => {
                          var publicationDiv = document.createElement("div");
                          publicationDiv.className = "publication";

                          var citationDiv = document.createElement("div");
                          citationDiv.className = "citation";
                          citationDiv.innerHTML = `<strong style="font-style: normal">${title}</strong>`;
                          // Append the work type if it is not "journal-article"
                          if (workType !== "journal-article") {
                                  var formattedWorkType = workType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                                  citationDiv.innerHTML += ` (${formattedWorkType}).`;
                          }
                          publicationDiv.appendChild(citationDiv);

                          var doiLink = document.createElement("a");
                          doiLink.href = "https://doi.org/" + doi;
                          doiLink.textContent = "https://doi.org/" + doi;
                          publicationDiv.appendChild(doiLink);

                          publicationList.appendChild(publicationDiv);
                      });
              });
          });
  }
</script>

I have also presented my work at international <a class="internal-link" href="{{ site.baseurl }}/conferences/">conferences</a> and given <a class="internal-link" href="{{ site.baseurl }}/talks/">talks</a> at various reknown institutions.
