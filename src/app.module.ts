import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { RangeModule } from './range/range.module';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import dotenv from 'dotenv';
// # 生成控制器（不包含测试文件）
// npx @nestjs/cli g controller user --no-spec

// # 生成服务（不包含测试文件）
// npx @nestjs/cli g service user --no-spec

// # 生成完整的 CRUD 资源
// npx @nestjs/cli g resource user --no-spec

const envFilePath = `.env.${process.env.NODE_ENV || 'production'}`;
@Module({
  imports: [
    UserModule,
    AuthModule,
    LoginModule,
    RangeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [envFilePath],
      load: [() => dotenv.config({ path: '.env' })],
      validationSchema: Joi.object({
        // joi校验配置文件
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required().valid(3306, 3307, 3308, 3309),
        DB_USER: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
      }),
    }), // 全局配置使用configService
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
