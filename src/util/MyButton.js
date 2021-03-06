import React from 'react';
import { Tooltip } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children, onClick, tip, btnClassName, tipClassName }) => (
    <Tooltip title={tip} className={tipClassName}>
        <IconButton onClick={onClick} className={btnClassName}>
            {children}
        </IconButton>
    </Tooltip>
)
