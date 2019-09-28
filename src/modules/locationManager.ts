import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";

export const LOCATION_TASK = "LOCATION_TASK";
export function defineLocationTask() {
  TaskManager.defineTask(LOCATION_TASK, ({ data, error }) => {
    if (error) {
      // Error occurred - check `error.message` for more details.
      return;
    }
    if (data) {
      const { locations } = data;
      // do something with the locations captured in the background
    }
  });
}
