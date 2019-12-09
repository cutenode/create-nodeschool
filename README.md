# create-nodeschool

[![Greenkeeper badge](https://badges.greenkeeper.io/cutenode/create-nodeschool.svg)](https://greenkeeper.io/)

A more guided way to install NodeSchool workshoppers.

## Usage

Via `npm init`:

```bash
npm init nodeschool # Interactive prompt
# OR
npm init nodeschool core # will install the core set of workshoppers
# OR
npm init nodeschool electives # will install the core set of workshoppers
```

Via global install:

```bash
npm i -g create-nodeschool
nodeschool # Interactive prompt
# OR
nodeschool core # will install the core set of workshoppers
# OR
nodeschool electives # will install the elective workshoppers
# OR
nodeschool install [workshoppers..] # will install the workshoppers you list
```

## Commands

All commands can be used via `nodeschool` (when the module is installed globally) and via `npm init nodeschool`.

### Bare (no arguments passed)

* **npm init Syntax**: `npm init nodeschool`
* **Global Syntax**: `nodeschool`
* **Purpose**: Introduce the user to an interactive CLI that allows them to install specific workshoppers, install the entire core set, or install the entire electives set.

### `install [workshoppers..]`

* **npm init Syntax**: `npm init nodeschool install [workshoppers..]`
* **Global Syntax**: `nodeschool install [workshoppers..]`
* **Purpose**: Install specific workshoppers rapidly
* **Example**: `nodeschool install learnyounode javascripting expressworks`

### `core`

* **npm init Syntax**: `npm init nodeschool core`
* **Global Syntax**: `nodeschool core`
* **Purpose**: Install the core set of NodeSchool workshoppers

### `electives`

* **npm init Syntax**: `npm init nodeschool electives`
* **Global Syntax**: `nodeschool electives`
* **Purpose**: Install the electives set of NodeSchool workshoppers
