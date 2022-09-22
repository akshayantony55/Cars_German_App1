import React, { useState, useEffect } from "react"
import styles from "./index.module.css";
import Loader from '../../components/Loader';
import { Divider, Box, List, ListItem } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Pagination from "@material-ui/lab/Pagination";
import Avatar from "@material-ui/core/Avatar";
import SimpleMap from "../../components/Map";
import { useStyles, dummyCarsShareNow as dummyCars } from "../../utils/constants";
import Typography from '@mui/material/Typography';
import clsx from "clsx";

const ShareNowDashboard = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedVehicle, setSelectedVehicle] = useState({});

    const classes = useStyles();
    const itemsPerPage = 10;
    const [page, setPage] = React.useState(1);
    const [noOfPages, setNoOfPages] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/share-now/vehicles`)
            .then(response => response.json())
            .then(data => {
                const vehiclesUpdated = setVehicleDummyImage(data.placemarks);
                setVehicles(vehiclesUpdated);
                setSelectedVehicle(vehiclesUpdated[0])
                setNoOfPages(
                    Math.ceil(vehiclesUpdated.length / itemsPerPage)
                );
                setLoading(false);
            });
    }, []);

    const setVehicleDummyImage = (vechicles) => {
        return vechicles.map(vehicle => {
            return {
                ...vehicle,
                vehicleImage: dummyCars[Math.floor(Math.random() * dummyCars.length)]
            }
        })
    }

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loaderContainer}>
                    <Loader />
                </div>
            ) :
                <div className={styles.row}>
                    <div className={styles.leftContainer}>
                        <div className={styles.vechiclesHeader}>
                            <span>CHOOSE YOUR RIDE</span>
                        </div>
                        <List dense component="div" className={styles.leftContainerList}>
                            {vehicles
                                .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                                .map((vehicle, index) => {
                                    const labelId = `list-secondary-label-${vehicle.id}`;
                                    return (
                                        <div key={vehicle.id}>
                                            <ListItem
                                                key={vehicle.id}
                                                button
                                                onClick={() => setSelectedVehicle(vehicle)}
                                                selected={vehicle.id === selectedVehicle.id}
                                            >
                                                <ListItemText
                                                    id={labelId}
                                                    primary={vehicle.name}
                                                    secondary={
                                                        <React.Fragment>
                                                            <div className={styles.cardContent}>
                                                                <div className={styles.contentRow}>
                                                                    <div className={clsx(styles.field, styles.leftContent)}>
                                                                        <Typography
                                                                            component="span"
                                                                            variant="body2"
                                                                            color="text.primary"
                                                                        >
                                                                            {"Engine Type "}
                                                                        </Typography>
                                                                        - {vehicle.engineType}
                                                                    </div>
                                                                    <div className={clsx(styles.field, styles.rightContent)}>
                                                                        <Typography
                                                                            component="span"
                                                                            variant="body2"
                                                                            color="text.primary"
                                                                        >
                                                                            {"Fuel "}
                                                                        </Typography>
                                                                        - {vehicle.fuel}
                                                                    </div>
                                                                </div>

                                                                <div className={styles.contentRow}>
                                                                    <div className={clsx(styles.field, styles.leftContent)}>
                                                                        <Typography
                                                                            component="span"
                                                                            variant="body2"
                                                                            color="text.primary"
                                                                        >
                                                                            {"Address "}
                                                                        </Typography>
                                                                        - {vehicle.address}
                                                                    </div>
                                                                    <div className={clsx(styles.field, styles.rightContent)}>
                                                                        <Typography
                                                                            component="span"
                                                                            variant="body2"
                                                                            color="text.primary"
                                                                        >
                                                                            {"Interior "}
                                                                        </Typography>
                                                                        - {vehicle.interior}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </React.Fragment>
                                                    }
                                                    className={classes.item}
                                                />
                                                <ListItemAvatar>
                                                    <Avatar
                                                        alt={`Avatar n°${vehicle.id + 1}`}
                                                        src={vehicle.vehicleImage}
                                                        className={classes.avatar}
                                                    />
                                                </ListItemAvatar>
                                            </ListItem>
                                            {index + 1 !== itemsPerPage &&
                                                <Divider />
                                            }
                                        </div>
                                    );
                                })}
                        </List>
                        <Divider />
                        <Box component="span">
                            <Pagination
                                count={noOfPages}
                                page={page}
                                onChange={handleChange}
                                defaultPage={1}
                                color="primary"
                                size="large"
                                showFirstButton
                                showLastButton
                                classes={{ ul: classes.paginator }}
                            />
                        </Box>
                    </div>
                    <div className={styles.rightContainer}>
                        <SimpleMap zoom={7} selectedCoordinate={[selectedVehicle.coordinates[0], selectedVehicle.coordinates[1]]} />
                    </div>
                </div>
            }

        </div>
    )
}

export default ShareNowDashboard;