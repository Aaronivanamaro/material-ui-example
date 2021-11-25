import { DeleteOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";

export default function NoteCard({ note, handleDelete }) {

    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                    action={ 
                        <IconButton>
                            <DeleteOutlined onClick={
                                () => handleDelete(note.id)
                            }/>
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category} 
                />
                <CardContent>
                    <Typography variant="body2" color="secondary">
                        { note.details }
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}