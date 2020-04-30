// export { Footer } from './Footer';
// export { Header } from './Header';
// export { TodoList } from './TodoList';
// export { TodoItem } from './TodoItem';
// export { TodoTextInput } from './TodoTextInput';
import React from 'react';

type NameProps = {
  name: string;
};

export default function Name(props: NameProps) {
  const { name } = props;

  return <div>{name}</div>;
}
