class Room {
    constructor(name, length, width, capacity = 15){
        this.name = name;
        this.length = length;
        this.width = width;
        this.available = true;
        this.capacity = capacity;
    }

    getArea() {
        return this.length*this.width;
    }

    getPerimeter() {
        return (this.length*2)+(this.width*2);
    }


}

const room1 = new Room("Sun", 30, 50);
const room2 = new Room("Green", 15, 30, 18);
room2.available = false;

console.log(`Name: ${room1.name} \nLength: ${room1.length} \nWidth: ${room1.width} \nArea: ${room1.getArea()} \nPerimeter: ${room1.getPerimeter()} \nAvailable: ${room1.available} \nCapacity: ${room1.capacity}`);

console.log(`Name: ${room2.name} \nLength: ${room2.length} \nWidth: ${room2.width} \nArea: ${room2.getArea()} \nPerimeter: ${room2.getPerimeter()} \nAvailable: ${room2.available} \nCapacity: ${room2.capacity}`);