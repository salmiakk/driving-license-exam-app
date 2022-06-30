import {React, useState, useEffect, useCallback, useContext } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid, GridRowModes, GridActionsCellItem } from '@mui/x-data-grid';
import { questions } from '../App.js'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import QuestionContext from './QuestionContext.js';
import { EditPageToolbar } from './EditPageToolbar.js'


export function EditPage(props) {  
  const { questions, setQuestions } = useContext(QuestionContext);
  const [rowModesModel, setRowModesModel] = useState({});
  let initialRows = [];

  const columns = [
    { field: 'id', headerName: 'ID', width: 20, editable: false },
    { field: 'type', headerName: 'Typ pytania', width: 100, type: 'singleSelect', valueOptions: ['YesOrNo', 'MultipleAnswer'], editable: true},
    { field: 'content', headerName: 'Treść', width: 300, editable: true },
    { field: 'imgSrc', headerName: 'URL zdjęcia', width: 300, editable: true },
    { field: 'answerOne', headerName: 'Pierwsza odpowiedź', width: 250, editable: true },
    { field: 'answerTwo', headerName: 'Druga odpowiedź', width: 250, editable: true },
    { field: 'answerThree', headerName: 'Trzecia odpowiedź', width: 250, editable: true },
    {
      field: 'correctAnswer',
      headerName: 'Poprawna odpowiedź (liczba od 1 do 3)',
      type: 'number',
      width: 250,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Edytuj/usuń',
      width: 150,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];
  questions.map(question => {
    if (question.type == "MultipleAnswer") {
      initialRows.push({
        id: question.id,
        type: question.type,
        content: question.content,
        imgSrc: question.imgSrc,
        answerOne: question.answerOne,
        answerTwo: question.answerTwo,
        answerThree: question.answerThree,
        correctAnswer: question.correctAnswer
      }
    )} else{
      initialRows.push({
        id: question.id,
        type: question.type,
        content: question.content,
        imgSrc: question.imgSrc,
        answerOne: "TAK",
        answerTwo: "NIE",
        answerThree: "-",
        correctAnswer: question.correctAnswer
      }
    )
    }
  })
  const [rows, setRows] = useState(initialRows);


  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };


  const processRowUpdate = useCallback(
    (newRow, oldRow) => {
      let tempQuestions = questions.filter(question => question.id !== newRow.id);
      tempQuestions.push(newRow);
      setQuestions(tempQuestions);
      return newRow;
    }
  );

  return (
    <Box sx={{ height: '110vh' }}>
      <Typography align="center" variant="h6" component="div">
        W tym trybie możesz edytować pytania egzaminacyjne. Aby edytować konkretne pytanie, wybierz je z listy i kliknij przycisk "edytuj" po prawej stronie. <br/>
        Następnie wybierz pole którego wartość chcesz zmienić, wprowadź nową zawartość i kliknij przycisk "zapisz" po prawej.<br/>
        Nowo dodane pytania będą widoczne na ostatniej stronie listy.
      </Typography>
      <DataGrid
        experimentalFeatures={{ newEditingApi: true }}
        autoHeight={true}
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[10]}
        processRowUpdate={processRowUpdate}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        components={{
          Toolbar: EditPageToolbar,
        }}
        componentsProps={{
          toolbar: { rows, setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}
export default EditPage;


