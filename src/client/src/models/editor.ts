import { Mentor } from "./mentor";
import { codeBlockData } from "./codeBlockData";

export interface Editor {
  mentor: boolean | undefined;
  id: string;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  solution: string;
}
