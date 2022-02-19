import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Sarah:1234@cluster0.l2pk0.mongodb.net/test'),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
