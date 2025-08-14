class Bird {
    fly() {
        console.log("Flying");
    }
}

class Sparrow extends Bird { }

class Ostrich extends Bird {
    fly() {
        throw new Error("Ostriches can't fly");
    }
}

// ❌ Violación: Ostrich rompe la sustitución de Bird