import * as React from "react";
import { Card, CardContent, CardHeader, Grid } from '@material-ui/core';

export default () => (
    <Grid container spacing={2} style={{paddingTop:"1rem"}}>
        <Grid item md={6} xs={12}>
            <Card>
                <CardHeader title="Book" />
                <CardContent>Lorem ipsum sic dolor amet...</CardContent>
            </Card>
        </Grid>
        <Grid item md={6} xs={12}>
            <Card>
                <CardHeader title="Category" />
                <CardContent>Lorem ipsum sic dolor amet...</CardContent>
            </Card>
        </Grid>
        <Grid item md={6} xs={12}>
            <Card>
                <CardHeader title="Publisher" />
                <CardContent>Lorem ipsum sic dolor amet...</CardContent>
            </Card>
        </Grid>
        <Grid item md={6} xs={12}>
            <Card>
                <CardHeader title="Author" />
                <CardContent>Lorem ipsum sic dolor amet...</CardContent>
            </Card>
        </Grid>
    </Grid>
);