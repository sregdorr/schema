import * as path from "path";
import * as cp from "child_process";
import Command from "@oclif/command";
import { indentBlock } from "../../utils";

// tslint:disable-next-line
export default class Typegen extends Command {
  static description =
    "\nGenerate TypeScript types derived from your schema for complete type safety across all your definition blocks and resolvers.";

  static args = [
    {
      name: "entrypoint",
      required: false,
      description: `
Relative path (from cwd) to your app's TypeScript module that will run directly or indirectly Nexus.makeSchema. By default the following paths will be searched, picking the first match, or erroring out

    * src/schema/index.ts
    * src/schema.ts
    * src/server.ts
    * src/main.ts
    * src/index.ts

    * schema/index.ts
    * schema.ts
    * server.ts
    * main.ts
    * index.ts

      ERROR`,
    },
  ];

  async run() {
    const {
      args: { entrypoint },
    } = this.parse(Typegen);

    console.log(1);
    const entryPoint = path.join(process.cwd(), entrypoint);
    console.log(2);

    let result: cp.SpawnSyncReturns<string>;
    try {
      result = cp.spawnSync(
        "npx",
        ["ts-node", "--transpile-only", entryPoint],
        {
          encoding: "utf8",
          env: {
            ...process.env,
            NEXUS_SHOULD_GENERATE_ARTIFACTS: "true",
            NEXUS_EXIT_AFTER_TYPEGEN: "true",
          },
        }
      );
    } catch (error) {
      console.error(
        `\nSomething went wrong while running Nexus typegen:\n\n${indentBlock(
          4,
          error.stack
        )}`
      );
      process.exit(1);
    }

    if (result!.stderr !== "") {
      console.error(
        `\nSomething went wrong while running Nexus typegen:\n\n${indentBlock(
          4,
          result!.stderr
        )}`
      );
      process.exit(1);
    }

    console.log(result!.stdout);
    console.log(
      "Success! Tailored TypeScript declaration for your GraphQL types and resolvers generated."
    );
  }
}
