function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const perKmCharge = 15;
  const travelCharge = distanceInKm * perKmCharge;
  const totalFare = baseFare + travelCharge;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${travelCharge}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!");
}

const distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
calculateBodaFare(Number(distanceInput));
