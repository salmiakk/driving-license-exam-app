import { GridToolbarContainer, GridRowModes } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

export function EditPageToolbar(props) {
    const { rows, setRows, setRowModesModel } = props;
    const handleClick = () => {
      const id = Math.max(...rows.map(row => row.id))+1;
      setRows((oldRows) => [...oldRows, { 
        id: id,
        type: "MultipleAnswer",
        content: "",
        imgSrc: "",
        answerOne: "",
        answerTwo: "",
        answerThree: "",
        correctAnswer: 1 } ]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'type' },
      }));
    };
  
    return (
      <GridToolbarContainer>
        <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
          Dodaj pytanie
        </Button>
      </GridToolbarContainer>
    );
}
export default EditPageToolbar ;