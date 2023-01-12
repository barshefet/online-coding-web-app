import { Mentor } from "./mentor"

export interface Code{
    mentor: boolean
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}