import React, { useEffect } from 'react';

export function App() {
    const [name, setName] = React.useState();

    useEffect(() => {
        (async () => {
            BX24.callMethod('profile', {}, (res) => {
                setName(res.data().NAME);
            });
        })();
    }, []);

    return <div>Привет, {name && name}!</div>;
}
