import Abductors from "/src/assets/muscles/Abductors.jpg";
import Adductors from "/src/assets/muscles/Adductors.jpg";
import Abs from "/src/assets/muscles/Abs.jpg";
import Back from "/src/assets/muscles/Back.jpg";
import Biceps from "/src/assets/muscles/Biceps.jpg";
import Calves from "/src/assets/muscles/Calves.jpg";
import Chest from "/src/assets/muscles/Chest.jpg";
import Forearms from "/src/assets/muscles/Forearms.jpg";
import Hamstrings from "/src/assets/muscles/Hamstrings.jpg";
import Traps from "/src/assets/muscles/Traps.jpg";
import Triceps from "/src/assets/muscles/Triceps.jpeg";
import Quadriceps from "/src/assets/muscles/Quadriceps.jpeg";
import Shoulders from "/src/assets/muscles/Shoulders.jpeg";

export const filterWorkoutImages = (muscle) => {
  let img;
  switch (muscle.toLowerCase()) {
    case "abdominals":
      img = Abs;
      break;
    case "abductors":
      img = Abductors;
      break;
    case "adductors":
      img = Adductors;
      break;
    case "biceps":
      img = Biceps;
      break;
    case "calves":
      img = Calves;
      break;
    case "chest":
      img = Chest;
      break;
    case "forearms":
      img = Forearms;
      break;
    case "glutes":
      img = Abductors;
      break;
    case "hamstrings":
      img = Hamstrings;
      break;
    case "lats":
      img = Back;
      break;
    case "lower_back":
      img = Back;
      break;
    case "middle_back":
      img = Back;
      break;
    case "neck":
      img = Back;
      break;
    case "traps":
      img = Traps;
      break;
    case "quadriceps":
      img = Quadriceps;
      break;
    case "triceps":
      img = Triceps;
      break;
    case "shoulders":
      img = Shoulders;
      break;
  }
  return img;
};
