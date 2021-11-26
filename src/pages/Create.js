import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Send } from "@mui/icons-material";
import { Container, Button, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import axios from "axios";

export default function Create() {

    const navigate = useNavigate()

    const colorSecLight = theme => theme.palette.secondary.light
    const colorSecMain = theme => theme.palette.secondary.main

    const textFieldStyle =  [
        { 
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: colorSecLight 
            }
        },  
        {
            '& .MuiInputLabel-root': { 
                color: colorSecLight 
            }
        }
    ]

    const radioGroup =  [
        { color: colorSecLight },
        { '& .MuiRadio-root.Mui-checked': {
            color: colorSecLight
        }}
    ]
    const radioStyledComponent = <Radio sx={{ color: colorSecLight }} />

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
            axios.post('http://localhost:8000/notes', {
                title, details, category })
                 .then(() => navigate('/')) 
        }
    }

    return (
        <Container maxWidth="sm" sx={{ pt: 2 }}>
            <Typography variant ="h5" gutterBottom component="h2" 
                sx={{ color: colorSecMain }}>
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
                    sx={ textFieldStyle }
                    inputProps={ { sx:{color: colorSecLight} } }
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
                    margin="dense"
                    error={detailsError}
                    sx={ textFieldStyle }
                    inputProps={ { sx:{color: colorSecLight} } }
                />

                <FormControl sx={{display: 'block'}} margin='dense' error={categoryError}>
                    <FormLabel sx={ { color: colorSecMain, mb: 2 } } color="secondary">Note Category</FormLabel> 
                    {/* Without wrapping the options in a group, you may select many */}
                    <RadioGroup sx={radioGroup} value={category} onChange={e => setCategory(e.target.value)}> 
                        <FormControlLabel value="money" control={radioStyledComponent} label="Money" />
                        <FormControlLabel value="todos" control={radioStyledComponent} label="Todos" />
                        <FormControlLabel value="reminders" control={radioStyledComponent} label="Reminders" />
                        <FormControlLabel value="work" control={radioStyledComponent} label="Work" />
                    </RadioGroup>                   
                </FormControl>

                <Button
                    type="submit" variant="contained"  
                    endIcon={<Send />} 
                    // Abreviation de certain CSS props
                    sx={{my: 1}}
                    color="secondary">
                    Submit
                </Button>

            </form>
            
        </Container>
    )
}