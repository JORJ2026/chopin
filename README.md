# Multicart

A piano MIDI visualizer: falling-note roll, 88-key keyboard, sustain pedal, reverb, key and time-signature controls. Import your own MIDI files, folders or zips. Works offline and installs on every platform. No accounts, no tracking.

## Get it

| Platform | How |
|---|---|
| Any browser | Open the GitHub Pages site (see below) |
| iPhone / iPad | Open the site in Safari, tap Share, then **Add to Home Screen** |
| Android | Download `Multicart.apk` from Releases, or install from Chrome's menu |
| Windows | `Multicart-Setup.exe` (installer) or `Multicart-Portable.exe` |
| macOS | `Multicart.dmg` (Apple silicon and Intel) |
| Linux | `Multicart.AppImage` or `Multicart.deb` |

The same list, with a recommendation for your device, is in the app under **Settings, Downloads**.

## Publish it (about 5 minutes)

1. Create a GitHub repository named `multicart` and push everything in this folder to `main`.
2. In the repository: **Settings, Pages, Build and deployment, Source: GitHub Actions**.
3. The `Deploy web app to GitHub Pages` workflow runs and publishes `https://YOUR-USER.github.io/multicart/`.
4. In `package.json` replace `YOUR-USER` in `homepage`. Inside the app the repo is detected automatically on github.io. For a custom domain, set `GH_REPO` near the top of the script in `index.html`.

## Make a release

```bash
git tag v1.0.0
git push origin v1.0.0
```

The `Build release` workflow builds the Windows, macOS, Linux and Android files on GitHub's servers and attaches them to a new Release under the fixed names above, which the in-app download links rely on. Before tagging, bump the version in `package.json`, in `sw.js` (`VERSION`) and in `index.html` (`APP.v`), and add a line to `CHANGELOG.md`.

Details, signing and the iOS App Store path are in [docs/RELEASING.md](docs/RELEASING.md).

## Develop

```bash
npm run serve      # http://localhost:8080, plain static server
npm install && npm start   # run the desktop app
```

The whole app is one file, `index.html`. The bundled pieces are embedded in it.

## Licence

Code: MIT (see `LICENSE`). Bundled MIDI data has its own licences: read [NOTICE.md](NOTICE.md) before you publish.
