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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (e, reason) => {
    setOpen(false);
    // if (reason !== "backdropClick") {
    //   setOpen(false);
    // }
  };

  const handleForm = (str) => {
    setOpen(false);
    if (str === "cancel") dispatch({ type: "cancel" });
    if (str === "submit") onSubmit(formData);
  };

  return (
    categories && (
      <div className="flex justify-center pb-60">
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
          <DialogTitle>Build Your Quiz</DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="Category">Category</InputLabel>
                <Select
                  native
                  value={category}
                  id="Category"
                  input={<OutlinedInput label="Category" id="Category" />}
                  onChange={(e) =>
                    dispatch({ type: "category", payload: e.target.value })
                  }
                >
                  {categories.map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="difficulty">Difficulty</InputLabel>
                <Select
                  labelId="Difficulty"
                  id="Difficulty"
                  value={difficulty}
                  input={<OutlinedInput label="Difficulty" id="Difficulty" />}
                  onChange={(e) =>
                    dispatch({ type: "difficulty", payload: e.target.value })
                  }
                >
                  <MenuItem value={"easy"}>easy</MenuItem>
                  <MenuItem value={"medium"}>medium</MenuItem>
                  <MenuItem value={"hard"}>hard</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleForm("cancel")}>Cancel</Button>
            <Button onClick={() => handleForm("submit")}>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  );
}

export default QuizForm;
