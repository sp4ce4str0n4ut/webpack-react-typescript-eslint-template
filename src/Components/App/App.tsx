import React, { useState } from 'react';
import { CommonButton } from '../Common/Button/Button';

export const App = (): JSX.Element => {
    const [count, setCount] = useState(0);

    const handler = () => {
        alert(count + 1);
        setCount(count + 1);
    }

    return (
        <div>
            <div className={"application-root"}>
                <CommonButton text={"BUTTON"} onClick={handler}/>
            </div>
        </div>
    );
};
