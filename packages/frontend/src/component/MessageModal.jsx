import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";

const NotificationDialog = ({ openDialog, handleDialog, resMsg, msgTitle }) => {

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
                    <Button variant="text" color="blue-gray" onClick={handleDialog}>
                        close
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default NotificationDialog;