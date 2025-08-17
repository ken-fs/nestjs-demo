import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { RangeModule } from './range/range.module';
// # 生成控制器（不包含测试文件）
// npx @nestjs/cli g controller user --no-spec

// # 生成服务（不包含测试文件）
// npx @nestjs/cli g service user --no-spec

// # 生成完整的 CRUD 资源
// npx @nestjs/cli g resource user --no-spec
@Module({
  imports: [UserModule, AuthModule, LoginModule, RangeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
