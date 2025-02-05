export interface IUSData {
    data: Array<IUSDataItem>;
    source: any;
  }
  
  export interface IUSDataItem {
    'ID Nation': string;
    'Nation': string;
    'ID Year': number;
    'Year': number;
    'Population': number;
    'Slug Nation': string;
  }
  
  export class USData {
    public id_nation: string = '';
    public nation: string = '';
    public id_year: number = 0;
    public population: number = 0;
    public slug_nation: string = '';
  }
  