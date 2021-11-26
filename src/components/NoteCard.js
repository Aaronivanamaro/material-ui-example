import { DeleteOutlined } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { blue, green, pink, yellow } from "@mui/material/colors";

export default function NoteCard({ note, handleDelete }) {

    const avatar = (category) => {
        if (category === 'work') {
            return yellow[700]
        }
        if (category === 'money') {
            return green[500]
        }
        if (category === 'todos') {
            return pink[500]
        }        
            return blue[500]
    }

    return (
        <div>
            <Card elevation={1}
                  sx={{backgroundColor: theme => theme.palette.secondary.light }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{backgroundColor: avatar(note.category)}}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
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
                    <Typography variant="body2" sx={{ color: theme => theme.palette.text.secondary }}>
                        { note.details }
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}