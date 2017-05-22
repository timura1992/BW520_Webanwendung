export class Shootings{

  constructor(
    public $key:string,
    public titel:string,
    public beschreibung:string,
    public dauer:string,
    public ort:string,
    public anzahlBilder:string,
    public preis:string,
    public url:string,
    public id: string
  ){

  }
  static fromJsonList(array): Shootings[] {
    return array.map(Shootings.fromJson);
  }

  static fromJson({$key, titel, beschreibung, dauer, ort, anzahlBilder, preis, url, id}):Shootings {
    return new Shootings(
      $key,
      titel,
      beschreibung,
      dauer,
      ort,
      anzahlBilder,
      preis,
      url,
      id);
  }

  static fromJsonArray(json : any[]) : Shootings[] {
    return json.map(Shootings.fromJson);
  }

}
