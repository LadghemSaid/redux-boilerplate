import { useState } from "react"; // Hook pour gérer l'état local.
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux"; // Hook pour dispatcher des actions Redux.

import { addTodo } from "./redux/slice/todo"; // Action Redux pour ajouter une tâche.

export default function FormAdd() {
    // État local pour stocker la nouvelle tâche à ajouter.
    const [todo, setTodo] = useState("");

    // Hook Redux pour dispatcher des actions.
    const dispatch = useDispatch();

    // Fonction pour gérer la soumission du formulaire.
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page.

        // TODO: Complétez la logique pour créer une nouvelle tâche.
        // La tâche doit inclure :
        // - id : un identifiant unique (utilisez Math.random ou Date.now).
        // - name : le contenu de la tâche, stocké dans `todo`.
        // - isDone : false par défaut.
        // - createdAt : la date actuelle au format lisible.

        // Envoi de l'action Redux pour ajouter la nouvelle tâche.
        dispatch(addTodo(newTodo));

        // Réinitialisation du champ du formulaire.
        setTodo("");
    };

    return (
        // Formulaire pour ajouter une tâche.
        <Form onSubmit={handleSubmit} className="mb-4">
            <div className="d-flex">
                <Form.Group style={{ width: "100%" }}>
                    {/* Champ pour saisir la nouvelle tâche */}
                    <Form.Control
                        required // Champ obligatoire.
                        placeholder="Learn React" // Placeholder pour guider l'utilisateur.
                        value={todo} // Valeur actuelle de l'état `todo`.
                        onChange={(e) => setTodo(e.target.value)} // Met à jour l'état local avec la saisie.
                    />
                </Form.Group>
                <Form.Group className="ms-2">
                    {/* Bouton pour soumettre le formulaire */}
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </div>
        </Form>
    );
}
