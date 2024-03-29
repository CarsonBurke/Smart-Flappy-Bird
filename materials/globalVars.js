// Assign variables

let properties = {
    mapDimensions: 700,
    gridPartSize: 25,
    flapDelay: 30,
    nextId: 0,
    gapHeight: 130,
    speedMultiplier: 10000,
    map: {
        el: document.getElementById("map"),
        positions: [],
    },
    hotkeys: {
        moveUp: "ArrowUp",
        moveLeft: "ArrowLeft",
        moveDown: "ArrowDown",
        moveRight: "ArrowRight",

        panUp: "w",
        panDown: "s",
        panLeft: "a",
        panRight: "d",

        stopPlacing: "x",
    },
    colors: {
        red: "#b51818",
        blue: "#3718b5",
        green: "#18b543",
        yellow: "#a0a620",
        purple: "#c700c2",
    },
    objects: {

    },
    findById(id) {

        return objects[id]
    },
    newId() {

        nextId++
        return nextId - 1
    }
}

// Assign variables to globalThis

for (let propertyName in properties) {

    let property = properties[propertyName]

    globalThis[propertyName] = property
}