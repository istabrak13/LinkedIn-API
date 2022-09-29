import { IsNumber, IsUrl } from 'class-validator';

export class CreatePostsDto {
  @IsUrl()
  URL: string;

  @IsNumber()
  likesCount: number;
}
