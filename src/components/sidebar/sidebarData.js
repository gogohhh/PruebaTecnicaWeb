import React from 'react';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';

export const SidebarData = [
    {
        title: "Ticket Center",
        icon: <ConfirmationNumberIcon />,
        link: "/Center"

    },
    {
        title: "Bulletin Board",
        icon: <DashboardIcon/>,
        link: "/Board"
    },
    {
        title: "Notification Center",
        icon: <NotificationsIcon />,
        link: "/Notificatiion"
    },
    {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/Settings"
    }
]
