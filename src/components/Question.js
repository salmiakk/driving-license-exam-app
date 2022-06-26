import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/Card';
import CardActions from '@mui/material/Card';
import CardMedia from '@mui/material/Card';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import ListItem from '@mui/material/List';
import ListItemButton from '@mui/material/List';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export function Question(props) {
    let answers;
    if(props.type =="YesOrNo"){
        answers = <>
            <Button size="large">TAK</Button>
            <Button size="large">NIE</Button>
        </>
    } else if (props.type == "MultipleAnswer"){
        answers = <>
            <List sx={{ color: "inherit", textDecoration: "inherit"  }}>
                <ListItem>
                    <ListItemButton component={NavLink} to="/error">
                        <ListItemText primary="40km/h"/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={NavLink} to="/error">
                        <ListItemText primary="50km/h"/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={NavLink} to="/error">
                        <ListItemText primary="60km/h"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    }
    return (
    <Card align="center" sx={{ minWidth: 275 }}>
        <CardContent>
        <Typography variant="h4" component="div">
            { props.content }
        </Typography>
        </CardContent>
        <CardMedia
            component="img"
            height="140"
            src={ props.imgSrc }
        />
        <CardActions>
            { answers }
        </CardActions>
    </Card>
    );
}
export default Question;