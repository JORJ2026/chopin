# Releasing Multicart

## What the workflows do
- `pages.yml` publishes the web app to GitHub Pages on every push to `main`.
- `release.yml` runs when you push a tag starting with `v`. It builds on GitHub runners: Windows (NSIS installer and portable exe), macOS (universal dmg), Linux (AppImage and deb) and Android (APK), then publishes a GitHub Release.

These builds were not run before this package was handed over. The first run may need a small fix, such as a newer action or dependency version. Check the Actions tab and fix anything it reports.

## Version bump checklist
1. `package.json` `version`
2. `sw.js` `VERSION` (this makes installed copies update)
3. `index.html` `APP.v` and `APP.date`
4. `CHANGELOG.md`
5. Commit, then `git tag vX.Y.Z && git push origin vX.Y.Z`

## Signing (not set up)
- **Windows**: unsigned, so SmartScreen warns. A code-signing certificate fixes this; add it with electron-builder's `CSC_LINK` and `CSC_KEY_PASSWORD` secrets.
- **macOS**: unsigned and not notarised (`identity: null`). Users right-click the app and choose Open. Removing the warning needs an Apple Developer account (US$99 a year), a Developer ID certificate and notarisation.
- **Android**: the workflow produces a debug-signed APK, which installs by sideloading. The Play Store needs a release build signed with your own keystore and an AAB (`./gradlew bundleRelease`).
- **Linux**: no signing needed.

## iPhone and iPad
- **Works today, free:** Safari, Share, Add to Home Screen. This is the supported iPhone route in this package. It runs full screen and offline.
- **App Store / TestFlight:** needs an Apple Developer account and a Mac. Run `npm install && npm run www && npx cap add ios && npx cap sync ios && npx cap open ios`, set your signing team in Xcode, then Product, Archive. GitHub cannot produce an installable IPA without your signing certificates, so the workflow does not try.

## Troubleshooting
- Download buttons in Settings 404: the release has not been published yet, or the file names changed. They must stay `Multicart-Setup.exe`, `Multicart-Portable.exe`, `Multicart.dmg`, `Multicart.AppImage`, `Multicart.deb`, `Multicart.apk`.
- Installed web app does not update: bump `VERSION` in `sw.js`.
- Android build fails on Java: the workflow uses JDK 17, which Capacitor 6 needs.
