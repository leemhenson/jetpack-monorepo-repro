import { VERSION } from "lodash";

const PackageC = "PackageC" as const;
type PackageC = typeof PackageC;

const PackageCThing = VERSION;

export { PackageC, PackageCThing };
