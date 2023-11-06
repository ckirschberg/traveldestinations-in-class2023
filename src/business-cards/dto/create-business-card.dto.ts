import { IsNotEmpty } from "class-validator";

export class CreateBusinessCardDto {
    
    @IsNotEmpty()
    name: string;
    
    title: string;
    
    @IsNotEmpty()
    email: string;
    
    phone: string;
    
    website: string;

    about: string;

    interests: string;
}
