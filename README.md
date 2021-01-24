# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @elim04/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `(assertArraysEqual)`: asserts if arrays and their contents to see if they are equal
* `(assertEqual)`: compares if expected with actual 
* `(countLetters)`: determines the number of each letter in a string
* `(countOnly)`: counts number of items
* `(eqArrays)`: determines if contents of array are equal to each other
* `(eqObjects)`: determines if objects and their contents are equal to each other
* `(findKey)`: finds a specific key in an object
* `(findKeyByValue)`: finds a key with specific value in an object
* `(flatten)`: turns nested arrays into one array
* `(head)`: returns the 0 index of an array
* `(letterPositions)`: determines the letter position (index) of each letter in a string
* `(map)`: modfiys each item of an array and returns that array with new values
* `(middle)`: returns the middle of an array
* `(tail)`: returns the tail end of an array
* `(takeUntil)`: filters an array until a certain condition is met
* `(without)`: filters an array without a specific item

