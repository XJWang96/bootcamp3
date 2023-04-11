import { Girafe } from './abstract/Girafe';
import { Animals} from './abstract/Aniamls';

function main() {
    const chien1 = new Animals("Gaia", 11, "chien");
    chien1.FaireBruit();
    const girafe1 = new Girafe("Gi1",1);
    console.log(girafe1.type);
  }
  
  main();