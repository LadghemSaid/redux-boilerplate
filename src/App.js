import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import des hooks Redux
import { Button, Container, Modal, Table } from "react-bootstrap";

// TODO: Créez et importez les composants suivants : 
// - `TodoItem` : Affiche une tâche avec ses actions.
// - `FormAdd` : Formulaire pour ajouter une tâche.

import { removeTodo } from "./redux/slice/todo"; // Action pour supprimer une tâche (à compléter).

function App() {
  const dispatch = useDispatch(); // Hook pour dispatcher des actions vers Redux.

  // TODO: Remplissez le sélecteur suivant pour récupérer la liste des tâches depuis le store Redux.
  const todoList = useSelector((state) => []); // Remplacez `state.todo.list` par l'état exact du slice.

  const [show, setShow] = useState(false); // État pour contrôler l'affichage du modal.
  const [deleteTodo, setDeleteTodo] = useState({}); // Stocke la tâche à supprimer.

  // Fonction pour ouvrir le modal de confirmation.
  const handleClickRemove = (todo) => {
    setShow(true);
    setDeleteTodo(todo);
  };

  // Fonction pour dispatcher l'action `removeTodo`.
  const handleRemove = () => {
    dispatch(removeTodo()); // TODO: Assurez-vous que `removeTodo` est correctement configuré dans le slice Redux.
    setShow(false);
  };

  return (
    <div className="App">
      <Container>
        {/* Modal de confirmation de suppression */}
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Remove todo?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you really want to delete it?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleRemove}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Formulaire pour ajouter une nouvelle tâche */}
        <FormAdd />

        <h1 className="title">Todo App</h1>

        {/* Tableau des tâches */}
        <Table
          striped
          hover
          bordered
          style={{ textAlign: "center", verticalAlign: "middle" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Boucle sur la liste des tâches */}
            {todoList && todoList.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  name={todo.name}
                  isDone={todo.isDone}
                  createdAt={todo.createdAt}
                  updatedAt={todo.updatedAt}
                  onClickRemove={handleClickRemove}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
