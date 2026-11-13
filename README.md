# Abdelrahman Elsaid Elsawy

Personal portfolio site, published via [GitHub Pages](https://pages.github.com/).

**Live:** <https://abdelrahmanelsaidelsawy.github.io/>

Software engineer at [BeamNG GmbH](https://beamng.tech) working on
[BeamNG.tech](https://beamng.tech) — vehicle simulation for autonomous driving
and ADAS development. ROS/ROS2 integration, robotics, QA automation, and
everything in between. Based in Istanbul, Turkey.

## Links

- LinkedIn: <https://www.linkedin.com/in/abdelrahman-elsaid-elsawy/>
- GitHub: <https://github.com/AbdelrahmanElsaidElsawy>
- Email: [a.sawy95@gmail.com](mailto:a.sawy95@gmail.com)
- Linktree: <https://linktr.ee/abdelrahman_elsaid_elsawy>

## Editing the site

Two-column layout: sticky left sidebar (photo, bio, contacts, nav) and a
right panel that is a **separate HTML page** per topic (`css/style.css`,
`css/timeline.css`). Bootstrap 3 is still loaded for legacy grid helpers.
No build step required.

| Topic | EN | DE | FR | TR | AR |
| --- | --- | --- | --- | --- | --- |
| About | `index.html` | `index_de.html` | `index_fr.html` | `index_tr.html` | `index_ar.html` |
| Skills | `skills.html` | `skills_de.html` | `skills_fr.html` | `skills_tr.html` | `skills_ar.html` |
| Languages | `languages.html` | `languages_de.html` | … | … | … |
| Courses | `courses.html` | `courses_de.html` | … | … | … |
| Experience | `experience.html` | `experience_de.html` | … | … | … |
| Studies | `studies.html` | `studies_de.html` | … | … | … |

CV buttons serve the matching language PDF (designed + ATS). The flag
switcher jumps to the same topic in another language.

1. Edit the matching page(s); keep language variants in sync for shared changes
2. Push to `main` — GitHub Pages republishes automatically

## CV

**Single source of truth:** edit LaTeX only in
[`AbdelrahmanElsaidElsawy/cv`](https://github.com/AbdelrahmanElsaidElsawy/AbdelrahmanElsaidElsawy/tree/main/cv).
That repo builds the PDFs. This site only syncs those PDFs into `cv/` for
GitHub Pages (workflow: `.github/workflows/sync-cv.yml`).

| Variant | Site PDF |
| --- | --- |
| English designed | <https://abdelrahmanelsaidelsawy.github.io/cv/Abdelrahman_Elsaid_Elsawy_CV.pdf> |
| English ATS | <https://abdelrahmanelsaidelsawy.github.io/cv/Abdelrahman_Elsaid_Elsawy_CV_ATS.pdf> |
| German designed | <https://abdelrahmanelsaidelsawy.github.io/cv/Abdelrahman_Elsaid_Elsawy_CV_DE.pdf> |
| German ATS | <https://abdelrahmanelsaidelsawy.github.io/cv/Abdelrahman_Elsaid_Elsawy_CV_DE_ATS.pdf> |
| French designed | <https://abdelrahmanelsaidelsawy.github.io/cv/Abdelrahman_Elsaid_Elsawy_CV_FR.pdf> |
| French ATS | <https://abdelrahmanelsaidelsawy.github.io/cv/Abdelrahman_Elsaid_Elsawy_CV_FR_ATS.pdf> |
| Turkish designed | <https://abdelrahmanelsaidelsawy.github.io/cv/Abdelrahman_Elsaid_Elsawy_CV_TR.pdf> |
| Turkish ATS | <https://abdelrahmanelsaidelsawy.github.io/cv/Abdelrahman_Elsaid_Elsawy_CV_TR_ATS.pdf> |
| Arabic designed | <https://abdelrahmanelsaidelsawy.github.io/cv/Abdelrahman_Elsaid_Elsawy_CV_AR.pdf> |
| Arabic ATS | <https://abdelrahmanelsaidelsawy.github.io/cv/Abdelrahman_Elsaid_Elsawy_CV_AR_ATS.pdf> |

Use the **ATS** PDF for Workday/Greenhouse/Lever and other automated portals.
Use the **designed** PDF when sending directly to a recruiter or hiring manager.

## Template credit and license

This site is based on the [ClearCareer ResumeTemplate](https://github.com/clearcareer/ResumeTemplate)
by [Iskender Piyale-Sheard](https://izzydoesizzy.com/), with a timeline by
[Bruno Rodriguez](https://github.com/itbruno).

Design released under the [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/)
license. Background photos from [Unsplash](https://unsplash.com/)
([@reddangelo16](https://unsplash.com/@reddangelo16)).

Icons by [LinearIcons](https://linearicons.com/) and [FontAwesome](https://fontawesome.io/).