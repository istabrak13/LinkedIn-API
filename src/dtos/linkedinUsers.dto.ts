import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateLinkedinUsersDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  URL: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsString()
  currentCompany: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  avatarURL: string;

  @IsString()
  about: string;
}
