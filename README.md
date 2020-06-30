# MultiSwimLineApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Steps to run the code 

1. run `npm install` to install all dependent node modules
2. run `ng serve --open` to view the application in browser. Alternatively navigate to `http://localhost:4200/`


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Application Features

1. Generate dynamic columns(duplicates allowed).
2. Selected Row Highlighting,
3. Generate New row with 'No' column added and assigned to number starting from 1.
4. Use UP/DOWN Arrows to select the bottom or top row in the Angular material table.
5. `Auto Generate of new row` if the user press the bottom arrow in the last row displayed in table.
6. Reactive Forms with validations.
7. Click on Table cell to view the corresponding channel Template(VOICE/SMS/WEB/EMAIL).
7. storing data in local storage and update table accordingly.

## Enhancement Planned/required

1. Updating only the Table cell clicked in the row. (Currently, If duplicate columns exists, updating all similar channel types in the row).
2. Move interfaces to different file and refer the same in main component.
3. Code written for demo purpose. so, code refactoring is required for better reusability.
4. Proper css classes implementation for better look and feel.

