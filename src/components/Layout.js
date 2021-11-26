import { SubjectOutlined, AddCircleOutlineOutlined } from "@mui/icons-material";
import { AppBar, Avatar, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Container, Switch } from "@mui/material";
import { useNavigate, useLocation } from 'react-router-dom'
import { createTheme, ThemeProvider } from "@mui/material";
import { amber, red, grey } from "@mui/material/colors";
import img from '../assets/Aaron.jpg'
import { useState } from 'react' 

export default function Layout ({ children }) {

    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const theme = createTheme({
        palette: {
          primary: {
            light: isDarkTheme ? '#a0a0a0' : '#fefefe', 
            main: isDarkTheme ? '#0a0a0a' : grey[50],
            dark: isDarkTheme ? '#000' : grey[100]
          },
          secondary: {
            light: isDarkTheme ? amber[200] : red[300],
            main: isDarkTheme ? amber[400] : red[400],
            dark: isDarkTheme ? amber[600] : red[600]
          },
          text: {
            primary: isDarkTheme ? grey[900] : grey[50],
            secondary: isDarkTheme ? grey[700] : grey[100]
          }
        }
      })    

    const navigate = useNavigate()
    const location = useLocation()

    const appBarHeight = 64

    const menuItems = [
        {
            text: "My Notes",
            icon: <SubjectOutlined color="textPrimary"/>,
            path: "/"
        },
        {
            text: "Create Note",
            icon: <AddCircleOutlineOutlined color="textPrimary"/>,
            path: "/create"
        }
    ]

    return (
      <ThemeProvider theme={theme}>
        <Container sx={{
            minWidth: '100%',
            backgroundColor: (theme) => theme.palette.primary.main 
            }}>
            {/* app bar */}
            {/* position: 'absolute', 'fixed', 'relative', 'static', 'sticky' */}
            <AppBar
                position="fixed"
                color="secondary"
                elevation={0}
                sx={{ width: 'calc(100% - 240px)',
                      height: appBarHeight }}>
                <Toolbar>
                    <Typography sx={{flexGrow: 1,
                        color: (theme) => theme.palette.text.primary
                    }}>
                        Today is an awesome day
                    </Typography>
                    <Switch onChange={() => setIsDarkTheme(!isDarkTheme)}/>
                    <Typography sx={{color: (theme) => theme.palette.text.primary }}>Aaron</Typography>
                    <Avatar src={img} sx={{ml: 2}} />
                </Toolbar>
            </AppBar>

            {/* side bar */}
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{ '& .MuiDrawer-paper': 
                        { backgroundColor: (theme) => theme.palette.secondary.main } 
                    }}
                // paper={{backgroundColor: 'black'}}
                >
                <Typography variant="h5" sx={{px: 8, py: 3}}>
                    Notes App
                </Typography>

                <List>
                    {menuItems.map(item => (
                        <ListItemButton
                            key={item.text}
                            onClick={() => navigate(item.path)}
                            sx={location.pathname === item.path ? {backgroundColor: theme => theme.palette.secondary.light } : null }>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>

            {/* main content */}
            <div style={{marginLeft: 240, marginTop: appBarHeight, minHeight: `calc(100vh - ${appBarHeight}px)` }}>
                { children }
            </div>
        </Container>
      </ThemeProvider>
    )
}