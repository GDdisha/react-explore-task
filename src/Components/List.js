import * as React from "react";
import { Container } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SingleItem from "../Components/SingleItem";
import Data from "./Data";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function List({ setCount }) {
  return (
    <Container>
      <div className="section-title">
        <h2>Explore React Courses</h2>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Data.map((i) => (
            <Grid item xs={2} sm={4} md={4} key={i.id}>
              <Item>
                <SingleItem handleIncrement={setCount} ItemData={i} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default List;
