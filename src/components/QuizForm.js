import { useState, useReducer, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";

const initialState = { category: "", difficulty: "" };

function reducer(state, action) {
  switch (action.type) {
    case "category":
      return { ...state, category: action.payload };
    case "difficulty":
      return { ...state, difficulty: action.payload };
    case "cancel":
      return initialState;
    default:
      return { ...state };
  }
}

function QuizForm({ onSubmit }) {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(false);
  const [formData, dispatch] = useReducer(reducer, initialState);
  const { category, difficulty } = formData;

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://opentdb.com/api_category.php");
      const data = await res.json();
      setCategories(data.trivia_categories);
    }
    fetchCategories();
  }, []);

  ////////// Clears the error message from the form
  useEffect(() => {
    if (error) setTimeout(() => setError(false), 5000);
  }, [error]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e, reason) => {
    setOpen(false);
    dispatch({ type: "cancel" });
  };

  const handleForm = (str) => {
    if (str === "cancel") {
      setOpen(false);
      dispatch({ type: "cancel" });
    }

    if (str === "submit") {
      if (!formData.category || !formData.difficulty) {
        return setError(true);
      }
      setOpen(false);
      onSubmit(formData);
    }
  };

  return (
    categories && (
      <div className="flex justify-center">
        <Button
          onClick={handleClickOpen}
          variant="contained"
          sx={{
            padding: "1rem",
            fontSize: "1.25rem",
            borderRadius: "16px",
            ":hover": {
              bgcolor: "#fff",
              color: "#2196f3",
            },
          }}
        >
          Start your Quiz
        </Button>
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle sx={{ color: "#2196f3" }}>Build Your Quiz</DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
              <FormControl required sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="Category">Category</InputLabel>
                <Select
                  labelId="Category"
                  label="Category"
                  value={category}
                  id="Category"
                  input={<OutlinedInput label="Category" id="Category" />}
                  onChange={(e) =>
                    dispatch({ type: "category", payload: e.target.value })
                  }
                >
                  {categories.map((category) => (
                    <MenuItem value={category.id} key={category.id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl required sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="Difficulty">Difficulty</InputLabel>
                <Select
                  labelId="Difficulty"
                  label="Difficulty"
                  id="Difficulty"
                  value={difficulty}
                  input={<OutlinedInput label="Difficulty" id="Difficulty" />}
                  onChange={(e) =>
                    dispatch({ type: "difficulty", payload: e.target.value })
                  }
                >
                  <MenuItem value={"easy"}>Easy</MenuItem>
                  <MenuItem value={"medium"}>Medium</MenuItem>
                  <MenuItem value={"hard"}>Hard</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {error && (
              <Alert severity="error">
                Please select a category and difficulty
              </Alert>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleForm("cancel")}>Cancel</Button>
            <Button onClick={() => handleForm("submit")}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  );
}

export default QuizForm;
