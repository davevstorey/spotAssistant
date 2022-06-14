import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {}

    @Get('signUp')
    signUp() {
        return "Thank you for signing up!"
    }

    @Get('signIn')
    signIn() {
        return "Thank you for signing in!"
    }
}