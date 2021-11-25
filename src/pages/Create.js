import { KeyboardArrowRight, KeyboardArrowRightSharp, Send } from "@mui/icons-material";
import { Container, Button, ButtonGroup, Typography } from "@mui/material";

export default function Create() {

    return (
        // Container creates a margin
        // disableGutters removes the padding
        // maxWidth: 'xs','sm', 'md', 'lg', 'xl', false
        <Container >

         {/* align: 'center', 'inherit', 'justify', 'left', 'right' */}

            <Typography variant ="h3" gutterBottom component="h1" color="primary"
                // How to override default styles with sx
                // sx={{color: 'green', '&:hover': {color: 'green'}}}
            >
                Create a New Note
            </Typography>
            
        {/* color: 'primary', 'secondary', 'success', 'error', 'info', 'warning' */}
        {/* variant: 'contained', 'outlined', 'text' */}
            <Button 
                type="submit" variant="contained" disableElevation 
                onClick={() => console.log('You clicked me!')}
                startIcon={<Send />}
                endIcon={<KeyboardArrowRight />} >
                Submit
            </Button>
            
            <ButtonGroup color="secondary" variant="contained">
                <Button disabled>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

        {/* color: 'primary', 'secondary', 'success', 'action', 'disabled' */}
        {/* fontSize: 'small', 'large' */}
            <KeyboardArrowRightSharp fontSize="large" color="success"/>

        </Container>
    )
}