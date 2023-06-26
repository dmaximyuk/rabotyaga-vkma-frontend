export enum TextMode {
  Title = "title",
  Paragraph = "paragraph",
  Description = "description",
}

export enum TextSize {
  XL = "xl",
  L = "l",
  M = "m",
}

export interface TextProps {
  mode: TextMode;
  size?: TextSize;
  children: string;
}
