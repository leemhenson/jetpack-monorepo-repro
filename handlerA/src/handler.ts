import { PackageB } from "@jetpack-monorepo-repro/package-b";
import { PackageC } from "@jetpack-monorepo-repro/package-c";

export const handler = () => {
  return Promise.reject(`${PackageB}-${PackageC}`);
};
