import axios from "axios";
import { ActionType } from "../action_types";
import { Dispatch } from "react";
import { Action } from "../actions";

const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const names: string[] = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};

export { searchRepositories };
