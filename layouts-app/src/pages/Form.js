import React from "react";
import { Grid } from "../layouts/Grid";
import { Box } from "../layouts/Box";
import { Center } from "../layouts/Line";
import TextField from "../elements/TextField";
import FormGroup from "../form/FormGroup";

function Form() {
  return (
    <Center>
      <Grid
        gap="5rem"
        bgColor="pink"
        gridBorder="1px solid red"
        childBorder="1px solid green">
        <TextField direction="horizontal" />

        <Box>
          <FormGroup />
        </Box>
        <Box>Three</Box>
        <Box>Four</Box>
        <Box>Five</Box>
        <Box>Six</Box>
        <Box>Seven</Box>
      </Grid>
    </Center>
  );
}

export default Form;
