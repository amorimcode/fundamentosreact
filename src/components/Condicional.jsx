import React from 'react';
import Button from './layout/Button';

export default props => {
    return (
        <div>
            <h2>O núméro é {props.numero}</h2>

            {props.numero % 2 == 0 ? <span>Par</span> : <span>Ímpar</span>}

            <Button></Button>

        </div>
    )
}
