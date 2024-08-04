export type OutcomeType = {
  code: string;
  title: string;
  category: string;
  pColor: string;
  Content: () => JSX.Element;
  CardElement: () => JSX.Element;
  HelmetElement: (p: {color: string}) => JSX.Element;
};