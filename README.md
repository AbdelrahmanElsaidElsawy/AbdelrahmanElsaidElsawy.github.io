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

The site is a fully translated static page in three languages, built on
[Bootstrap 3](https://getbootstrap.com/) with custom `css/style.css` and
`css/timeline.css` stylesheets. No build step required:

| Page | Language |
| --- | --- |
| `index.html` | English |
| `index_de.html` | Deutsch |
| `index_tr.html` | Türkçe |

Each page's View/Download CV buttons serve the matching language PDF.
Switch languages via the flag switcher (top-left).

1. Edit the pages (keep the three in sync when changing content)
2. Push to `main` — GitHub Pages republishes automatically

## CV

The CV LaTeX sources live in `cv/`:

| Source | Variant | PDF |
| --- | --- | --- |
| `cv/cv.tex` | English designed (color + LinkedIn QR) | <https://abdelrahmanelsaidelsawy.github.io/cv/Abdelrahman_Elsaid_Elsawy_CV.pdf> |
| `cv/cv_ats.tex` | English ATS (plain one-column) | <https://abdelrahmanelsaidelsawy.github.io/cv/Abdelrahman_Elsaid_Elsawy_CV_ATS.pdf> |
| `cv/cv_de.tex` | German designed | <https://abdelrahmanelsaidelsawy.github.io/cv/Abdelrahman_Elsaid_Elsawy_CV_DE.pdf> |
| `cv/cv_tr.tex` | Turkish designed | <https://abdelrahmanelsaidelsawy.github.io/cv/Abdelrahman_Elsaid_Elsawy_CV_TR.pdf> |

Use the **ATS** PDF for Workday/Greenhouse/Lever and other automated portals.
Use the **designed** PDF when sending directly to a recruiter or hiring manager.

A GitHub Action (`.github/workflows/build-cv.yml`) recompiles all CV
PDFs on every change and commits them back, so the View/Download CV
buttons on the site always serve the latest build.

## Template credit and license

This site is based on the [ClearCareer ResumeTemplate](https://github.com/clearcareer/ResumeTemplate)
by [Iskender Piyale-Sheard](https://izzydoesizzy.com/), with a timeline by
[Bruno Rodriguez](https://github.com/itbruno).

Design released under the [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/)
license. Background photos from [Unsplash](https://unsplash.com/)
([@reddangelo16](https://unsplash.com/@reddangelo16)).

Icons by [LinearIcons](https://linearicons.com/) and [FontAwesome](https://fontawesome.io/).