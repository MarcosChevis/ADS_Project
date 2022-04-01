import { Injectable } from '@nestjs/common';
import { knex } from './db'
import { Game, GameUpdate } from './models/game';

@Injectable()
export class AppService {
  async getAllGames(): Promise<any> {
    return await knex.select().table('games')
  }

  async addGame(game: Game) {
    await knex.insert(game).into('games')
  }

  async updateGame(game: GameUpdate, id: number) {
   await knex("games").update(game).where('id', id)
  }

  async removeGame(id: number) {
    await knex("games").where('id', id).del()
  }
}
