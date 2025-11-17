import { Alert, AlertTitle, Snackbar, IconButton } from '@mui/material'
import { CloseOutlined } from '@ant-design/icons'

// interface SnackBarAnchor {
//     horizontal: 'center';
//     vertical: 'top'
// }

interface AlertSnackProps {
    open: boolean;
    message: string;
    severity: "success" | "error" | "warning" | "info";
    closeAlert: () => void
}
export default function AlertSnack({ open, message, severity, closeAlert }: AlertSnackProps) {

    return (
        <Snackbar
            open={open}
            autoHideDuration={1200}
            anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
            onClose={closeAlert}
        >
            <Alert
                variant='filled'
                severity={severity}
                action={(
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={closeAlert}
                    >
                        <CloseOutlined />
                    </IconButton>)
                }
            >
                <AlertTitle
                    sx={{
                        width: 300,
                        textAlign: 'start',
                    }}
                >
                    {message}
                </AlertTitle>
            </Alert>
        </Snackbar >
    )
}
