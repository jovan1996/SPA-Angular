
import { Category } from './Category';

export class Post {
    
    idPost       : number;
    idAutor      : number;
    title        : string;
    autorName    : string;
    heading      : string;
    description  : string;
    createdAt    : Date;
    src          : string
    categories   :Category[]
   
}
