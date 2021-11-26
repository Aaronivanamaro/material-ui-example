import { Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";

export default function Notes() {

    const [notes, setNotes] = useState([]);
    const appBarHeight = 64

    useEffect(() => {
        axios.get('http://localhost:8000/notes')
             .then(res => setNotes(res.data))
    }, [])

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8000/notes/${id}`)
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 11, minHeight: `calc(100vh - ${appBarHeight}px)`}}>
            <Grid container spacing={3} sx={{pt: 2}}>
                {notes.map(note => (
                    <Grid item xs={12} md={6} lg={4} key={note.id}>
                        <NoteCard note={note} handleDelete={handleDelete}/>
                    </Grid>
                ))}               
            </Grid>
        </Container>
    )
}