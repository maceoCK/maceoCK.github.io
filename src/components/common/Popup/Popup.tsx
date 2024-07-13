import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import { X } from "@phosphor-icons/react";

interface PopupProps {
    open: boolean;
    onClose: () => void;
    title: string;
    image?: string;
    body: string;
}

const Popup: React.FC<PopupProps> = ({ open, onClose, title, image, body }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <X size={24} />
                </IconButton>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                {image && (
                    <img
                        src={image}
                        alt={title}
                        style={{ width: "100%", marginTop: "10px" }}
                    />
                )}
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {body}
                </Typography>
            </Box>
        </Modal>
    );
};

export default Popup;
