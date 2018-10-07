# Project Specifications

## Fretboards

Responsible for:

1. Displaying active notes and positions by referencing `vuex store`
2. Playing note sounds
3. Interface for creating custom instances of modules (choosing notes)

## Modules

Responsible for:

1. Setting the active notes/positions in the `vuex store`
2. Playing metronome sounds
3. Anything that instructs the fretboard on what to do

## Module Ideas

#### Metronome Module
Provide a click in quarter notes 4/4 time to a specified rhythm.

#### Scales Module

The Scales Module will display common scales and arpeggios in any key.

#### II-V-I Module

Go through all II-V-I progressions in major/minor keys. Add option to include 
certain degrees of the corresponding major scale (7ths, 6's).

Display arpeggios similar to the Scales module but switch with chord changes.

Incorporates metronome module

#### Arpeggiator

Abstract version of the II-V-I Module that takes a chord progression as input
and displays the arpeggios to a metronome.
