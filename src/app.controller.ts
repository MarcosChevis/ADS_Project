import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Game, GameUpdate } from './models/game';

@Controller("games")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllGames(): Promise<any> {
    return await this.appService.getAllGames();
  }

  @Post()
  async addGame(@Body() game: Game) {
    await this.appService.addGame(game);
  }

  @Put(":id")
  async updateGame(@Body() game: GameUpdate, @Param() params: any) {
    await this.appService.updateGame(game, params.id)
  }

  @Delete(":id")
  async removeGame(@Param() params: any) {
    await this.appService.removeGame(params.id)
  }

}
