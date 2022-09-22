import { makeStyles } from "@material-ui/core";
import car1 from "../assets/images/3-2-car.png";
import car2 from "../assets/images/6-2-car.png";
import car3 from "../assets/images/12-2-car.png";
import car4 from "../assets/images/bmw_PNG1683.png";
import car5 from "../assets/images/BMW.png";
import car6 from "../assets/images/bugatti_PNG35.png";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.paper
    },
    item: {
        padding: theme.spacing(1.2)
    },
    avatar: { marginRight: theme.spacing(5), width: '139px', height: '86px' },
    paginator: {
        justifyContent: "center",
        padding: "10px"
    }
}));

const dummyCarsFreeNow = [car1, car2, car3];
const dummyCarsShareNow = [car4, car5, car6];

export {
    useStyles,
    dummyCarsFreeNow,
    dummyCarsShareNow
}