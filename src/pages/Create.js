import { Send } from "@mui/icons-material";
import { Container, Button, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useState } from "react";

export default function Create() {

    const [title, setTitle] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [details, setDetails] = useState('')
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('')
    const [categoryError, setCategoryError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(false)
        setDetailsError(false)
        setCategoryError(false)

        if (title === '') {
            setTitleError(true)
        }
        if (details === '') {
            setDetailsError(true)
        }
        if (category === '') {
            setCategoryError(true)
        }
        if (title && details && category) {
            console.log(title, details, category);
        }
    }

    return (
        <Container maxWidth="sm">
            <Typography variant ="h3" gutterBottom component="h1" color="primary">
                Create a New Note
            </Typography>
            
            {/* Form components must be inside a simple form element */}
            {/* noValidate is in order to manage errors with states */}
            <form noValidate onSubmit={handleSubmit}>
                {/* variant: 'filled', 'outlined', 'standard' */}
                {/* same clrs as buttons */}
                <TextField 
                    onChange={e => setTitle(e.target.value)}
                    label="Note Title"
                    variant="outlined"
                    color="secondary"
                    required
                    fullWidth
                    margin="normal"
                    error={titleError}
                />

                <TextField 
                    onChange={e => setDetails(e.target.value)}
                    label="Details"
                    variant="outlined"
                    color="secondary"
                    required
                    fullWidth
                    // When multiline is set to true, you can choose
                    // how many rows to show
                    multiline
                    rows={4}
                    margin="normal"
                    error={detailsError}
                />

                <FormControl sx={{display: 'block'}} margin='normal' error={categoryError}>
                    <FormLabel>Note Category</FormLabel> 
                    {/* Without wrapping the options in a group, you may select many */}
                    <RadioGroup value={category} onChange={e => setCategory(e.target.value)}> 
                        <FormControlLabel value="money" control={<Radio />} label="Money" />
                        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                        <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                    </RadioGroup>                   
                </FormControl>

                <Button
                    type="submit" variant="contained"  
                    endIcon={<Send />} 
                    // Abreviation de certain CSS props
                    sx={{mt: 1}}>
                    Submit
                </Button>

            </form>
            
        </Container>
    )
}