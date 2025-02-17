---
title: Publications
layout: page
permalink: /publications/
---

<div id="publications"></div>

<script>
    function fetchPublications() {
        var orcidId = "0000-0001-6849-9088";
        var orcidEndpoint = "https://pub.orcid.org/v3.0/" + orcidId + "/works";
        var headers = new Headers({
            "Accept": "application/json"
        });

        fetch(orcidEndpoint, { headers: headers })
            .then(response => response.json())
            .then(data => {
                var publications = data["group"];
                var publicationList = document.getElementById("publications");

                publications.forEach(publication => {
                    var title = publication["work-summary"][0]["title"]["title"]["value"];
                    var workType = publication["work-summary"][0]["type"];
                    
                    // Check if external IDs exist and contain a DOI
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
                            return;
                        }

                        // In production, use our proxy
                        var citationUrl = 'https://citation.crosscite.org/format';
                        var citationParams = `?doi=${doi}&style=apa&lang=en-US`;
                        var proxyUrl = `/api/proxy?url=${encodeURIComponent(citationUrl + citationParams)}`;

                        fetch(proxyUrl, {
                            headers: {
                                'Accept': 'text/plain'
                            }
                        })
                            .then(response => {
                                if (response.ok) {
                                    return response.text();
                                }
                                console.warn('Citation fetch failed for DOI:', doi);
                                throw new Error('DOI not found');
                            })
                            .then(citation => {
                                var highlightedCitation = citation.replace(/Uruñuela, E./g, '<span class="citation-me">Uruñuela, E.</span>');
                                // Replace the title with a bold case title
                                highlightedCitation = highlightedCitation.replace(title, `<strong style="font-style: normal">${title}</strong>`);
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
                    } else {
                        // Handle publications without DOI
                        var publicationDiv = document.createElement("div");
                        publicationDiv.className = "publication";
                        var citationDiv = document.createElement("div");
                        citationDiv.className = "citation";
                        citationDiv.innerHTML = `<strong style="font-style: normal">${title}</strong>`;
                        if (workType !== "journal-article") {
                            var formattedWorkType = workType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                            citationDiv.innerHTML += ` (${formattedWorkType}).`;
                        }
                        publicationDiv.appendChild(citationDiv);
                        publicationList.appendChild(publicationDiv);
                    }
                });
            });
    }

    fetchPublications();
</script>
