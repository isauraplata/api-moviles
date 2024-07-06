export class MechanicWorkshop {
    constructor(
      readonly id: number,
      readonly name: string,
      readonly address: string,
      readonly postalCode: string,
      readonly openingHours: Date,
      readonly closingHours: Date,
      readonly description: string,
      readonly id_user: number,
    ) {}
}
  