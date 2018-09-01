// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import { EggAppConfig } from 'egg';
import ExportConfigDefault from '../../config/config.default';
import ExportConfigLocal from '../../config/config.local';
import ExportConfigProd from '../../config/config.prod';
import ExportConfigTest from '../../config/config.test';
import ExportConfigUat from '../../config/config.uat';
import ExportConfigUnittest from '../../config/config.unittest';
type ConfigDefault = ReturnType<typeof ExportConfigDefault>;
type ConfigLocal = ReturnType<typeof ExportConfigLocal>;
type ConfigProd = ReturnType<typeof ExportConfigProd>;
type ConfigTest = ReturnType<typeof ExportConfigTest>;
type ConfigUat = ReturnType<typeof ExportConfigUat>;
type ConfigUnittest = ReturnType<typeof ExportConfigUnittest>;
type NewEggAppConfig = EggAppConfig & ConfigDefault & ConfigLocal & ConfigProd & ConfigTest & ConfigUat & ConfigUnittest;

declare module 'egg' {
  interface Application {
    config: NewEggAppConfig;
  }

  interface Controller {
    config: NewEggAppConfig;
  }

  interface Service {
    config: NewEggAppConfig;
  }
}