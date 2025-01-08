import { createSlice } from "@reduxjs/toolkit";

// Création du slice Redux pour gérer la liste des tâches.
const todoSlice = createSlice({
    name: 'todo',
    initialState: { list: [] }, // Initialisation avec une liste vide.
    reducers: {
        // Action pour ajouter une tâche
        addTodo(state, action) {
            // TODO: Ajoutez une nouvelle tâche à la liste. La tâche doit inclure :
            // - id : un identifiant unique.
            // - name : le texte de la tâche (action.payload.name).
            // - isDone : false par défaut.
            // - createdAt : la date actuelle.
            // Exemple : { id: 1, name: "Nouvelle tâche", isDone: false, createdAt: "01/01/2025" }
        },

        // Action pour supprimer une tâche
        removeTodo(state, action) {
            // TODO: Supprimez la tâche correspondant à l'id passé dans action.payload.id.
            // Utilisez `filter` pour retourner une nouvelle liste sans l'élément à supprimer.

        },

        // Action pour mettre à jour le statut d'une tâche
        updateStatus(state, action) {
            // TODO: Mettez à jour le statut de la tâche identifiée par action.payload.id.
            // - Changez `isDone` à `true`.
            // - Ajoutez ou mettez à jour `updatedAt` avec la date actuelle (format lisible).
        },
    },
});

// Extraction des actions et du reducer générés par createSlice.
const { actions, reducer } = todoSlice;

// Exportation des actions pour les utiliser dans les composants.
export const { addTodo, removeTodo, updateStatus } = actions;

// Exportation du reducer pour l'intégration dans le store Redux.
export default reducer;
