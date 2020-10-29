import { ApiGatewayManagementApi } from "aws-sdk";
import { PackageCThing } from "@jetpack-monorepo-repro/package-c";

const PackageB = "PackageB" as const;
type PackageB = typeof PackageB;

const PackageBThing = ApiGatewayManagementApi.name;
const PackageBThingFromPackageC = PackageCThing;

export { PackageB, PackageBThing, PackageBThingFromPackageC };
