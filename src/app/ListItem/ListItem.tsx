type ListItemProps = {
  text: string;
};

export const ListItem = ({ text }: ListItemProps) => {
  return <li>{text}</li>;
};
