import React from 'react';
import { Card, CardContent } from '@mui/material';

import '../App.css';

const Instruction = () => {
    return (
        <Card className='card' raised={true}>
            <CardContent>
                <h1> Instructions </h1>
                <ul>
                    <li>Do this first</li>
                    <li>Then do that</li>
                </ul>
            </CardContent>
        </Card>
    );
};

export default Instruction;