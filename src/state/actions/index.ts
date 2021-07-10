import { ActionType } from "../action_types";

interface searchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface searchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface searchRepositoriesErroAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | searchRepositoriesAction
  | searchRepositoriesErroAction
  | searchRepositoriesSuccessAction;
