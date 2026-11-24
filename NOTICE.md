# Notices

## Software
Multicart's own code is released under the MIT licence (see `LICENSE`).

## Bundled MIDI data: action required before publishing
`index.html` embeds MIDI note data for 84 piano pieces. They come from MIDI files supplied by the person who published this app, and **the licence of those files has not been verified**.

A composition being in the public domain does not make a particular MIDI file free to redistribute: the person who sequenced or performed it can hold a copyright in that file. Some sources use Creative Commons licences that require credit and, for ShareAlike licences, the same licence on what you share. For example, MIDI files from piano-midi.de (Bernd Krueger) are CC BY-SA 3.0 Germany.

Before you publish:
1. Work out where each bundled file came from and what licence it carries.
2. List the sources, authors and licences in this file.
3. If you cannot confirm a licence, remove that piece from the app.

Sources with clear licences for new additions: Mutopia Project (each piece states public domain or a Creative Commons licence) and piano-midi.de (CC BY-SA 3.0 Germany, credit required).

## Fonts and libraries
The app uses your system fonts and no third-party scripts. Desktop builds include Electron (MIT) and Android builds include Capacitor (MIT).
