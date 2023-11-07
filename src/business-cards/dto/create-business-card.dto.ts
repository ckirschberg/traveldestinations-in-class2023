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

    constructor(name: string, email: string, title?: string, phone?: string, website?: string, about?: string, interests?: string) {
        this.name = name;
        this.email = email;
        this.title = title;
        this.phone = phone;
        this.website = website;
        this.about = about;
        this.interests = interests;
    }
}
