import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';

export default () => (
    <>
        <Card>
            <CardHeader title="Book" />
            <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        </Card>
        <Card>
            <CardHeader title="Category" />
            <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        </Card>
        <Card>
            <CardHeader title="Publisher" />
            <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        </Card>
        <Card>
            <CardHeader title="Author" />
            <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        </Card>
    </>
);