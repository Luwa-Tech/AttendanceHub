import React from "react";
import { NavLink } from "react-router-dom"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";

const NotificationDialog = ({ openDialog, setOpen, resMsg, msgTitle, location }) => {
    const handleDialog = () => setOpen(!open);

    return (
        <>
            <Dialog open={openDialog} handler={handleDialog}>
                <DialogHeader>
                    <Typography variant="h5" color="blue-gray">
                        {msgTitle}
                    </Typography>
                </DialogHeader>
                <DialogBody divider className="grid place-items-center gap-4">
                    <Typography className="text-center font-normal">
                        {resMsg}
                    </Typography>
                </DialogBody>
                <DialogFooter className="space-x-2">
                    {
                        location === "/reset_password" ? (
                            <NavLink to="/">
                                <Button variant="text" color="blue-gray" onClick={handleDialog}>
                                    Ok, Got it
                                </Button>
                            </NavLink>
                        ) : (
                            <Button variant="text" color="blue-gray" onClick={handleDialog}>
                                close
                            </Button>
                        )
                    }
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default NotificationDialog;