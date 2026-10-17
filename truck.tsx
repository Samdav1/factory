abstract class Truck {
    deliver(cargo: string): void {
        console.log(`Delivering ${cargo} by road`);
    }

    costPerKm(): number {
        return 1;
    }
}

class DeliverTruck extends Truck {
 override deliver(cargo: string): void {
console.log(🚚 Delivering ${cargo} by road);
}

}

class TruuckCsot extends Truck {
override costPerKm(): number {
return 2;
}
}

class Logistics {

planDelivery(cargo: string): void {
console.log(`Planning delivery of ${cargo}..`);
const truck = new DeliverTruck(); // 👈 hard-wired
truck.deliver(cargo);
console.log("Delivery logged. ");
}


estimateCost(km: number): number {
const truck = new TruuckCsot(); // 👈 hard-wired again
return km * truck.costPerKm();
}
} 

new Logistics().planDelivery("cement");