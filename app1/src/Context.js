import React from 'react'

const dataPass = {
    id: '1222',
    name: 'Code improve',
    department: ['A', 'B', 'c']
}
const Context = React.createContext(dataPass);

const Provider = Context.Provider;

const Consumer = Context.Consumer;

export { Provider, Consumer }

export default Context;
