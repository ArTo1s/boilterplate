import React from 'react';
import { TodoTextInput } from '../TodoTextInput';
import { TodoActions } from 'app/actions/todos';

export namespace Header {
  export interface Props {
    addTodo: typeof TodoActions.addTodo;
    fetch: typeof TodoActions.fetch;
  }
}

export const Header = ({ addTodo, fetch }: Header.Props): JSX.Element => {
  const handleSave = React.useCallback(
    (text: string) => {
      if (text.length) addTodo({ text });
    },
    [addTodo]
  );

  const handleFetch = () => {
    fetch();
  };

  return (
    <header>
      <h1>Todos</h1>
      <div onClick={handleFetch}>FETCH</div>
      <TodoTextInput newTodo onSave={handleSave} placeholder="What needs to be done?" />
    </header>
  );
};
