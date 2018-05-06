export class Experience {
  constructor(
    public title: string,
    public company: string,
    public kind?: string,
    public startDate?: string,
    public endDate?: string,
    public description?: string,
    public techLabels?: string,
    public projects?: string) {
  }
}
