---
title: Open Source - The Key to a Transparent and Collaborative Scientific Publishing Landscape
date: 2023-11-21
---

![alt text](assets/open_source_publishing_header.png)

The scientific publication process often suffers from inefficiency and delays. Valuable knowledge that could save lives can take up to two years to be published and shared among scientists. This is primarily due to the lengthy peer review process, which involves a paper being reviewed by two to three scientists before acceptance. Let's examine the current peer review process in more detail and explore opportunities for improvement.

Typically, authors must wait several months after submitting their paper for qualified reviewers to assess it. Reviewers are provided with a plain text form for feedback, lacking modern tools like inline commenting, bullet points, or images. As a result, reviewers spend excessive time pinpointing specific sections of the paper, resulting in lengthy and difficult-to-digest feedback.

The author receives these extensive reviews and must transform them into a to-do list for making the necessary changes. This process involves breaking down the reviewers' feedback and assigning tasks to co-authors. The revised paper, along with a detailed response to each suggested change, is then sent back to the reviewers and the editor. This back-and-forth resembles a cumbersome mail exchange reminiscent of the 18th century.

These procedural inefficiencies and delays significantly contribute to the overall time required for publication. Scientists, already burdened with numerous projects, struggle to handle the cognitive load caused by extensive reviewer feedback. The need for improvement is urgent, as every moment lost in this process can potentially cost lives. Furthermore, accepted submissions often end up behind paywalls that restrict access for those outside of wealthy institutions.

Efforts to address these issues, such as the one led by the Curvenote team, are limited. The Curvenote platform was initially designed to provide a better reading and learning experience by enabling the creation of interactive manuscripts, as opposed to plain PDFs. The team is now working on incorporating peer-review capabilities into their platform, including improvements like organizing feedback as a to-do list and customizable ordering based on difficulty levels. For more information, I highly recommend watching their video.

However, addressing only a part of the problem is insufficient. A completely new system based on practices from the open-source software development community is necessary.

## Decentralized publishing

In this new system, manuscripts would be hosted in repositories with version control and collaboration features similar to those on GitHub. Researchers would decide whether to make their repositories public from the start or only publish them when the manuscript is ready for the research community. Tools such as Myst Markdown can generate interactive web versions of the manuscripts for easier reading.

Instead of being trapped behind profit-driven journal paywalls, these repositories could be hosted by researchers' institutions. This approach, which we could call DeSci Publishing, would remove traditional journals from the equation.

Now that journals are out of the way, you probably think there are three considerable issues with DeSci Publishing:

1. How would papers get reviewed?
2. How would impact factor get measured?
3. How could interesting publications be found?

## How would papers get reviewed?

When it comes to reviewing the papers, open-source practices could be applied. In open-source development, when users want to request a new feature for software or when they want to report a bug, they open an issue in the software's repository. Well, if you think about it, peer reviewing is nothing more than feature requests and bug reports.

For instance:

- "The manuscript should add an extra statistical analysis..." → Feature request
- "The manuscript is missing the following citation..." → Bug report
- "Figure 2 should show more examples..." → Feature request
- "The statement made in line 87 is incorrect as shown by..." → Bug report
- "I could not replicate the experiment presented in Figure 4..." → Bug report

Anyone would certainly have access to open, see, and interact with issues to critique and collaboratively improve scientific work. A user interface similar to that of GitHub's pull requests, where inline comments and suggestions are allowed would be necessary. The writers would then open a pull request for those issues they want to work on and include in the manuscript, generating a new version of the manuscript when the pull requests are merged into the manuscript. This workflow would not only allow control for the different versions of a manuscript, but it would also allow the community to see and comment on the shortcomings of a scientific work, and to see if any work is being done to fix these issues. For longer discussions, GitHub offers a discussion panel too, which could also be part of these manuscript repositories. This way, everyone would have access to the manuscript and the discussion or critique around it, which would make the exchange of ideas and practices accessible to everyone and the writing and publishing process transparent.

And speaking of transparency, publications, issues, and taking part in discussion would all be recorded into the system. This way, contributions made by opening "bug reports" or giving new ideas would be recognized by the system, encouraging researchers to take part in reviewing manuscripts and discussing their contents.

## How would impact factor get measured?

The impact factor is an important metric for researchers, as it is often used by funding bodies (governments or private entities) to evaluate the scientific output of a researcher, a research lab, or a research center, as it helps them decide how big of a cut each one gets from the cake. Fair or not, it is the status quo, and changing the funding system in research is a whole different story. So, making sure that DeSci Publishing offers this metric is fundamental for this new system to work. I can think of two main ways in which impact factors could be measured in this DeSci Publishing system.

First, the impact factor could be measured similarly to how it is currently done by simply counting the number of references a manuscript has. The higher the references to a publication, the higher its impact factor.

Second, just like GitHub repositories can be "starred" (what social media calls a "like"), manuscript repositories could also be liked or starred. If many researchers like a given manuscript, it probably means it is a good one, and therefore its impact factor is possibly higher than that of a manuscript with few likes. To avoid the use of bots to boost impact factor stats, the GitHub-like DeSci platform presented in this article could for instance only let users log in with their ORCID number to comment, like, post, and publish. This user identification system would also allow to show metrics on researchers' profiles on how much and often they have contributed and in what way.

## How could interesting publications be found?

I believe this is the easiest of the three problems to solve. We live in times when every social media has its algorithm to customize its feed to our interests, and even some of those algorithms are starting to become open source. Coming up with a platform that shows new articles, issues, or discussions on a feed as they happen should not be difficult in late 2023. And if you think that such a platform would become like Twitter in terms of the amount of content there is, you couldn't be more wrong. While the amount of daily publications has increased in the past decades, the number is still significantly lower compared to the number of posts we see on social media. I believe the lower amount of content and the filtering or customization options that such a platform could offer would make the use of this tool approachable. Researchers would be able to see items (publications, issues, and discussions) related to specific keywords they're interested in, similar to how Bluesky feeds work. Similarly, the feed would also show items of researchers they decide to "follow".

For those who don't like feeds, the platform could also provide an AI-powered search bar that would return several papers that answer the specific question given, similar to the one provided by Elicit. This would be possible given that all text would be written in markdown or a similar language, making the creation of a massive database with keywords and features rather easy. Such a database could also feed a paper-networking tool to find related papers like ConnectedPapers does. Every paper could then have a list of connected or related papers on the sidebar, and every reference could also show these connections on hover with a simple card.

## Additional Benefits of DeSci Publishing:

Another important benefit of a DeSci Publishing system such as this one would be the ability to cite specific lines or paragraphs of an article rather than citing entire manuscripts, making referencing look a bit more like quoting. I personally have found citations in academic papers to be quite vague. Papers are usually cited inline mid-sentence or at the end of a claim. When you find a reference that piques your interest, you have to (1) scroll all the way to the bottom of the PDF (if you're lucky, the PDF will have a link) and (2) copy the citation. Then you probably (3) open Google Scholar or a similar search engine and (4) paste the citation to search for the paper, and once you (5) manage to download it or visualize it online, you have to go (6) find the claim itself in the paper! Since the DeSci Publishing system would be built on a GitHub-like platform where links can be made to a specific line or group lines in a manuscript, it would be possible not only to cite the specific claims an article makes but to do it so that a single click or hover on the citation would take you to the original claim or quote. In a single click! No more 6-step juggling and wasted time looking for a claim. Of course, these citations would be connected to the manuscript version. If a claim that's being cited gets removed in a future version, the citation would not get removed, but would rather point to the old version of the manuscript making that visible to the reader.

A personal knowledge management (PKM) aficionado myself, I would also love to be able to reference specific claims in my note-taking. Such a citation system would allow you to directly connect personal notes in whatever app you may use with the original quote from the article, providing the integration that most researchers dream of.

The use of repositories for manuscripts would also make sharing code very easy. Hence, sharing code that has been used for the analyses, version controlling it, and making it open for others to replicate studies and improve it would be a big step toward making science more open and reproducible.

## Challenges

It is clear that any new system requires training its users, and the learning curve to use the DeSci Publishing system envisioned here could be a bit steep for those who are not familiar with GitHub and open-source practices. Even though the system could be based on GitHub in terms of its look, it would certainly need to simplify the user interface and borrow some UI patterns seen on social media that everyone is now familiar with. The manuscript editor page would also have to be user-friendly, and I believe one similar to that in Curvenote would be sufficient.

Another considerable challenge would be educating researchers to follow these practices that are completely different from the current standards. The DeSci Publishing system should encourage interactions and discussion among researchers and their work. Similar to how preprints work nowadays, publishing an article in the DeSci Publishing system would not be a synonym for a peer-reviewed article. On the contrary, a published article in the envisioned system would be a synonym for knowledge that is openly shared with the community and is ready to be reviewed by the community via inline comments, issues, and discussions.

## Conclusion

All in all, I believe the different parts of the DeSci Publishing system I envision in this article already exist independently in different settings like social media or software development. It is a combination of them upon a decentralized architecture that DeSci Publishing could become a reality.

I am well aware of how crazy of an idea this is and how difficult it would be to put it into practice considering the reluctance of many institutions to leave journal publishing and "what they have always known" for a new system that may not be recognized by funding bodies. And of course, such a system would anger a few very rich people who have been enjoying a lobby that takes advantage of researchers' work and time for their own profit. Remember researchers don't get paid for publishing or reviewing articles!

I would like to end this article with a quote from someone whose work I admire:

> *The people who are crazy enough to think they can change the world, are the ones who do*.
>
> Steve Jobs

If you reached the end of this brain dump of mine thank you 💜 I hope you found it interesting.

^ The banner was generated using DALLE-3.
