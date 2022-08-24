import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import "./App.css";
import Sidebar from "./component/Sidebar";

const countriesURL = "https://restcountries.com/v2/all";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [ toggle,settoggle] = React.useState(false)
  const[info,setinfo] = React.useState({})
  const classes = useStyles();

  const handletoggle=(name,capital,population,region,flags)=>{
    const sendData = {
      name,
      capital,
      population,
      region,
      flags
    }
        setinfo(sendData)
    settoggle(true)

  }
  
  const getCountriesWithAxios = async () => {
    const response = await axios.get(countriesURL);
    console.log(response.data)
    setCountriesData(response.data);
    setCountriesData(response.data);
  };

  useEffect(() => {
    getCountriesWithAxios();
    console.log(info)
  }, [info]);

  return (
    <>
      <div className={toggle?"sidebar_holder":"sidebar_holder_off"}>
        <Sidebar settoggle={settoggle} name={info.name} capital={info.capital} population={info.population} region={info.region} flags={info.flags} />
      </div>
      <Grid container>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow >
                  <TableCell>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Flag</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Capital</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Population</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Region</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {countriesData.map((country) => (
                  <TableRow className="table_cell" >
                    <TableCell component="th" scope="row" onClick={()=>handletoggle(country.name,country.capital,country.population,country.region,country.flags)}>
                      {country.name}
                    </TableCell>
                    <TableCell align="right">
                      <img src={country.flags.svg} alt="flag" width="32px" />
                    </TableCell>
                    <TableCell align="right">{country.capital}</TableCell>
                    <TableCell align="right">{country.population}</TableCell>
                    <TableCell align="right">{country.region}</TableCell>
                  </TableRow>
                ))}
                  
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
