import React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { Title } from 'react-admin';

const Dashboard:React.FC= () => (
    <Card>
        <Title title="Welcome to the administration" />
        <CardHeader title="Welcome to the administration" />
        <CardContent>HI this is Kumar Nayak...</CardContent>
    </Card>
);

export default Dashboard;