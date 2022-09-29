import { IsString, IsUrl } from 'class-validator';

export class CreateCommentsDto {
  @IsString()
  content: string;

  @IsString()
  @IsUrl()
  userProfileURL: string;

  @IsString()
  @IsUrl()
  postURL: string;
}
