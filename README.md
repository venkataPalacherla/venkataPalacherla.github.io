# Venkata Palacherla — portfolio

A personal engineering and research website. Plain HTML, CSS, and a small amount of JavaScript. No build tools, dependencies, analytics, or backend.

## Preview

Open `index.html` directly in a browser, or run:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Private development

Repository: https://github.com/venkataPalacherla/venkataPalacherla.github.io

The repository is private. GitHub Pages is not enabled, and no deployment workflow is included. Uploading or pushing changes does not publish the website. Preview locally using the command above. Hosting can be configured separately when publication is requested.

To work from a local checkout:

```sh
git clone https://github.com/venkataPalacherla/venkataPalacherla.github.io.git
cd venkataPalacherla.github.io
```

## Editing

- `index.html`: biography, experience, papers, projects, and contact links.
- `styles.css`: typography, colors, spacing, and responsive layout.
- `script.js`: contribution disclosure.
- `assets/resume.pdf`: downloadable resume.
- `assets/`: project figures and animations.

The page renders its content without JavaScript. The contribution disclosure is enhanced with JavaScript. The site uses system fonts; it makes no font-service requests.

## Content notes

- Content is based on the resume supplied on October 18, 2026, and the linked public project READMEs.
- The resume lists overlapping Cohesive and Skylla dates. The page describes the Cohesive role as “Current” until the precise timeline is confirmed.
- Papers use the published author name **P. V. Amith**.
- Add a personal portrait when a preferred photo is available. The website does not use a generated portrait or a placeholder photo.
- The original resume PDF contains the supplied professional contact details, including a phone number.

## Asset credits

Project figures and animations were retrieved from the corresponding public repositories:

- `assets/visual-odometry.png`: [Attention-Based-Visual-Odometry](https://github.com/venkataPalacherla/Attention-Based-Visual-Odometry), `assets/Trajectory.png`. Collaborative work; see repository acknowledgments and report.
- `assets/quadrotor.gif`: [Quadrotor-Control-with-LQR-iLQR](https://github.com/venkataPalacherla/Quadrotor-Control-with-LQR-iLQR), `Assets/LQRController.gif`.
- `assets/pendulum.gif`: [Pendulum-control-with-Q-learning](https://github.com/venkataPalacherla/Pendulum-control-with-Q-learning), `Assets/inversePendulum.gif`.

Layout is newly implemented, inspired by the restrained personal/research presentation at https://raktimgg.github.io/. No source code, biography, or images were copied from that website.
