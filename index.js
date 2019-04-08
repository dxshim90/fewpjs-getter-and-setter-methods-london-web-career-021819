// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius
  }
    get diameter() {
      return this.radius + this.radius
    }

    get circumference() {
      return Math.PI * this.diameter
    }

    get area() {
      return Math.PI * this.radius * this.radius
    }

    set diameter(newDiameter) {
    this.radius = newDiameter/2
    }

    set circumference(newCirfumference) {
        this.radius = newCirfumference/2 / Math.PI
    }

}
