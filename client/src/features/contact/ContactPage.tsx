import { decrement, increment } from "./contactReducer";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/store";

export default function ContactPage() {
  const { data } = useAppSelector((state) => state.counter); 
  const dispatch = useAppDispatch();

  return (
    <>
      <Typography variant="h2">Contact Page</Typography>
      <Typography variant="body1">The data is : {data}</Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(decrement(1))} color="error">
          Decrement
        </Button>
        <Button onClick={() => dispatch(increment(1))} color="success">
          Increment
        </Button>
        <Button onClick={() => dispatch(increment(5))} color="secondary">
          Increment by 5
        </Button>
      </ButtonGroup>
    </>
  );
}
