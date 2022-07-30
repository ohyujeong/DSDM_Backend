import { Injectable } from '@nestjs/common';
import { ClubRepository } from './club.repository';
import { Club } from './club.entity';

@Injectable()
export class ClubService {
  constructor(
    private readonly clubRepository: ClubRepository
  ){}

  async getClubOne(clubId): Promise<any> {
    return this.clubRepository.findClubOne(clubId);
  }

  async addClubInfo(clubId, createSuggestionDto){
    return this.clubRepository.saveClubInfo(clubId, createSuggestionDto);
  }

  async addSuggestion(createSuggestionDto) {
    return this.clubRepository.saveSuggestion(createSuggestionDto);
  }

  async getClubs() {
    return this.clubRepository.findAllClub();
  }
}