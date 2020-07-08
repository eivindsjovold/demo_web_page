import React from 'react';
import {Button} from '@equinor/eds-core-react';

export const ClickButton = () => {

    function handleOnClick() {
        console.log("Button clicked")
    }

    return (
        <Button onClick = {() => handleOnClick()}>
            Click on me!
        </Button>
    );
}
