class Ship {

    /**
     * @since 1.0
     * @author ミク虚礼
     * @param {string} name - Her name, you gave her, there will be a lot of them.
     * @param {Point[]} coordinates - The coordinates of your ship.
     * @param {"VERTICAL"|"HORIZONTAL"} orientation - Vertical for 1, Horizontal for 0
     * @param {"BB"|"BC"|"CA"|"CL"|"CV"|"DD"} type - A Carrier, Battleship and so on.
     * @param {"EAGLES"|"ROYAL"|"IRON BLOOD"|"SAKURA EMPIRE"} camp - Where she is from.
     * 
     * @summary This is a superclass for every ship type from each camp
     */

    constructor(name, coordinates, orientation, type, camp) {
        this.name = name;
        this.coordinates = coordinates;
        this.orientation = orientation;
        this.type = type;
        this.camp = camp;
    }

    /**
     * @param {Point[]} newCoordinates
     */

    set coordinates(newCoordinates) {
        this.coordinates = newCoordinates;
    }

    get coordinates() {
        return this.coordinates;
    }

    /**
     * @param {"VERTICAL"|"HORIZONTAL"} newOrientation
     */

    set orientation(newOrientation) {
        this.orientation = newOrientation;
    }

    get orientation() {
        return this.orientation;
    }
}
