import { browser } from '$app/environment';

const DEFAULT_STATE = {
  visited: [],
  unlocked: [],
  completed: []       // optional but prepared for your future 3-state system
};

/* -----------------------------------------------------
 * Load full state
 * --------------------------------------------------- */
export function getState() {
  if (!browser) return DEFAULT_STATE;
  try {
    const raw = localStorage.getItem('fytrup-state');
    return raw ? JSON.parse(raw) : DEFAULT_STATE;
  } catch (err) {
    console.error("Failed to load FYTRUP state", err);
    return DEFAULT_STATE;
  }
}

/* -----------------------------------------------------
 * Save full state
 * --------------------------------------------------- */
export function saveState(state) {
  if (!browser) return;
  try {
    localStorage.setItem('fytrup-state', JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save FYTRUP state", err);
  }
}

/* -----------------------------------------------------
 * VISITED
 * --------------------------------------------------- */
export function getVisited() {
  const state = getState();
  return state.visited || [];
}

export function markVisited(id) {
  const state = getState();

  // already visited → no change
  if (state.visited.includes(id)) return state;

  const next = {
    ...state,
    visited: [...state.visited, id]
  };

  saveState(next);
  return next;
}

/* -----------------------------------------------------
 * COMPLETED (optional future-proofing)
 * --------------------------------------------------- */
export function getCompleted() {
  const state = getState();
  return state.completed || [];
}

export function markCompleted(id) {
  const state = getState();

  if (state.completed.includes(id)) return state;

  const next = {
    ...state,
    completed: [...state.completed, id]
  };

  saveState(next);
  return next;
}

/* -----------------------------------------------------
 * UNLOCKED (your existing system)
 * --------------------------------------------------- */
export function getUnlocked() {
  const state = getState();
  return state.unlocked || [];
}

export function unlock(id) {
  const state = getState();

  if (state.unlocked.includes(id)) return state;

  const next = {
    ...state,
    unlocked: [...state.unlocked, id]
  };

  saveState(next);
  return next;
}
