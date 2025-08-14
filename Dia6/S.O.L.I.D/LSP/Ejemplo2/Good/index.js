// ✅ Solución: separar interfaces
class Bird { }

class FlyingBird extends Bird {
    fly() { console.log("Flying"); }
}

class NonFlyingBird extends Bird { }

class Penguin extends NonFlyingBird { }
class Eagle extends FlyingBird { }