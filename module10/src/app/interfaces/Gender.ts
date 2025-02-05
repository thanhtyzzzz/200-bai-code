export interface IGender{
    count: number;
    gender: string;
    name: string;
    probability: number;
  }
  
  export class Gender {
    public count: number = 0;
    public gender: string = '';
    public name: string = '';
    public probability: number = 0;
  }
  