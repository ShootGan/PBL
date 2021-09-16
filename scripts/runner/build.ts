import { $ } from "zx";

$`tsc && yarn run remove-build && cross-env TS_NODE_PROJECT=tsconfig.webpack.json webpack --config webpack.config.ts`;
