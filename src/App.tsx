import { makeStyles } from "@material-ui/core";
import Calculator from "./components/Calculator";
import { EntireCalculatorLayout } from "./layouts/EntireCalculatorLayout";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    background:
      'url("https://images.pexels.com/photos/3297593/pexels-photo-3297593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") center center/cover no-repeat',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <EntireCalculatorLayout>
        <Calculator />
      </EntireCalculatorLayout>
    </div>
  );
}

export default App;
