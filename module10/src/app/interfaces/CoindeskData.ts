import { ICoindeskItem } from "./CoindeskItem";

export interface ICoindeskData {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  disclaimer: string;
  chartName: string;
  bpi: {
    USD: ICoindeskItem;
    GBP: ICoindeskItem;
    EUR: ICoindeskItem;
  };
}
