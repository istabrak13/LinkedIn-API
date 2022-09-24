import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import PostRoute from '@routes/post.route';
import LinkedinUsersRoute from '@routes/linkedinUser.route';
import App from '@/app';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new PostRoute(),
  new LinkedinUsersRoute(),
]);

app.listen();
