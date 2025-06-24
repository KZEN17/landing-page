import { atom } from "jotai";

// Sometimes life is hard.
// This is a dirty trick to clear the filter when the user clicks on the clear button.
// For example on the player page.
// It's mostly to avoid havign to pass each fields into the parent component. 
// This is very dirty but the Scrum master will never know about it.
export const dirtyClearFilterTrickTrigger = atom(false);
