import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

export default () => (
    <Card>
        <Title title="Baz" />
        <CardContent>
            <h1>BAz nayak</h1>
        </CardContent>
    </Card>
);