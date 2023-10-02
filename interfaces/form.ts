export interface ISelectProps {
  value: string;
  text: string;
  disabled?: boolean;
  selected?: boolean;
  hidden?: boolean;
}

export interface ICarModels {
  [make: string]: {
    value: string;
    text: string;
    hidden?: boolean;
    disabled?: boolean;
  }[];
}

export interface IModel {
  value: string;
  text: string;
  hidden?: boolean;
}

export interface IService {
  value: string;
  text: string;
  info: {
    titleInfo: string;
    textProvide: string;
    textInfo: string;
  };
}
