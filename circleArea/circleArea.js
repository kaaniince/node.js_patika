const args = process.argv.slice(2);

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

function main() {
  if (args.length === 0) {
    console.error("Please enter a radius value.");
    process.exit(1);
  }

  const radius = parseFloat(args[0]);
  if (isNaN(radius) || radius <= 0) {
    console.error("The radius must be a positive number.");
    process.exit(1);
  }

  const circle = new Circle(radius);
  const area = circle.calculateArea();

  console.log(
    `The area of a circle with a radius of ${circle.radius} is: ${area.toFixed(
      2
    )}`
  );
}

main();
