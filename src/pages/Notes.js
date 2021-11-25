import { Container, Grid, Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";

export default function Notes() {

    const [notes, setNotes] = useState([]);

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
        <Container>
            {/* 12-Col-grid example with Paper Component */}
            {/* <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}><Paper>1</Paper></Grid>
                <Grid item xs={12} md={6} lg={4}><Paper>2</Paper></Grid>
                <Grid item xs={12} md={6} lg={4}><Paper>3</Paper></Grid>
                <Grid item xs={12} md={6} lg={4}><Paper>4</Paper></Grid>
            </Grid> */}
            <Grid container spacing={3}>
                {notes.map(note => (
                    <Grid item xs={12} md={6} lg={4} key={note.id}>
                        <NoteCard note={note} handleDelete={handleDelete}/>
                    </Grid>
                ))}               
            </Grid>
        </Container>
    )
}