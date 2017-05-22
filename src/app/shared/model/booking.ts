export class Booking {

  constructor(public $key: string,
              public firstName: string,
              public lastName: string,
              public shooting: string,
              public date: string,
              public userid: string,
              public adressCity: string,
              public adressPostcode: string,
              public adressStreet: string,
              public phoneNumber: string,
              public printedPictures: string,
              public printedBook: string,
              public offLocation: string,
              public makeUpWanted: string,
              public additionalPictures: string,
              public userId: string) {

  }

  static fromJsonList(array): Booking[] {
    return array.map(Booking.fromJson);
  }

  static fromJson({
    $key, firstName, lastName, shooting, date, userid,
    adressCity, adressPostcode, adressStreet, phoneNumber, printedPictures, printedBook, offLocation,
    makeUpWanted, additionalPictures, userId
  }): Booking {
    return new Booking(
      $key,
      firstName,
      lastName,
      shooting,
      date,
      userid,
      adressCity,
      adressPostcode,
      adressStreet,
      phoneNumber,
      printedPictures,
      printedBook,
      offLocation,
      makeUpWanted,
      additionalPictures,
      userId
    )
  }

  static fromJsonArray(json: any[]): Booking[] {
    return json.map(Booking.fromJson);
  }

}
