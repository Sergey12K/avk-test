import { NumbersService } from './numbers.service';
import { DynamicModule, Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NumbersModuleOptions } from './numbers-module-options.interface';


@Module({})
export class NumbersModule {
  static forRoot(options: NumbersModuleOptions): DynamicModule {
    return {
      module: NumbersModule,
      providers: [
        {
          provide: 'BASE_NUMBER',
          useValue: options.value,
        },
        NumbersService
      ],
      exports: ['BASE_NUMBER', NumbersService],
    };
  }
  static forFeature(options: NumbersModuleOptions): DynamicModule {
    return {
      module: NumbersModule,
      providers: [
        {
          provide: 'BASE_NUMBER_2',
          useValue: options.value,
        },
      ],
      exports: ['BASE_NUMBER_2'],
    };
  }

  static forRootAsync(options: NumbersModuleOptions): DynamicModule {
    return {
      module: NumbersModule,
      providers: [
        {
          provide: 'BASE_NUMBER_3',
          useValue: options.value,
        },
      ],
      exports: ['BASE_NUMBER_3'],
    };
  }
  static forFeatureAsync(options: NumbersModuleOptions): DynamicModule {
    return {
      module: NumbersModule,
      providers: [
        {
          provide: 'BASE_NUMBER_4',
          useValue: options.value,
        },
      ],
      exports: ['BASE_NUMBER_4'],
    };
  }
};